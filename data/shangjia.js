import ShangJia from "../src/components/st-business/index.vue"
import Vue from "vue"
export default {
  components:{
    ShangJia
  },
  data(){
    return{
      merchants:{}
    }
  },
  methods: {
    //店铺信息
    Created: function () {
      //获取数据
      var that = this
      var params = {
        shopId: that.$route.query.shopId,
        Callback:that.$route.query.Callback
      }
      var url = "https://chat.yggx.com/index.php/shop/storetopinfo.html";
      $.ajax({
        url: url,
        data: params,
        type: "post",
        dataType: "jsonp",
        success: function (res) {
          if (res.code == 'SUCCESS') {
            var WorkTime = res.data.businessHoursBegin/60
            var WorkTimend = res.data.businessHoursEnd/60
            var workday = res.data.workday
            var split = new Array()
            var days = new Array()
            var HoursEnd = new Array() //下班时间
            split = String(WorkTime).split('.')
            HoursEnd = String(WorkTimend).split('.')
            days = String(workday).split(',')
            // console.log(res.data.businessHoursEnd)
            var date = "星期"
            for (var i=0;i<days.length;i++){
              switch (days[i]){
                case "1":
                  days[i] = date+"一"
                  break;
                case "2":
                  days[i] = date+"二"
                  break;
                case "3":
                  days[i] = date+"三"
                  break;
                case "4":
                  days[i] = date+"四"
                  break;
                case "5":
                  days[i] = date+"五"
                  break;
                case "6":
                  days[i] = date+"六"
                  break;
                default:
                  days[i] = date+"日"
              }
            }
            if(days.length < 7){
              res.data.workday = days[0]+" 至 "+days.pop()
            }else {
              res.data.workday = "每天"
            }
            if(WorkTime==0){
              split = [0,0]
            }
            if(WorkTimend==0){
              HoursEnd = [0,0]
            }
            if(HoursEnd[0]<10){
              res.data.businessHoursEnd = "0"+HoursEnd[0]+":"+HoursEnd[1]+"0"
            }else {
              res.data.businessHoursEnd = HoursEnd[0]+":"+HoursEnd[1]+"0"
            }

            if(split[1]!==undefined){
              split[1] = split[1]
            }else {
              split[1] = 0
            }
            if(split[0] < 10 ){
              res.data.businessHoursBegin = "0"+split[0]+":"+split[1]+"0"//上班时间
            }else {
              res.data.businessHoursBegin = split[0]+":"+split[1]+"0"//上班时间
            }
            var merchant = [
              {
                message:"联系商家",
                telephone:'tel://'+res.data.telephone,
              },
              {
                message:"发消息",
                telephone:""
              }
            ]
            Vue.set(res.data,"merchant",merchant)
            that.merchants = res.data
          } else {
            alert('请求失败')
          }
        }
      })
    },
  },
  mounted(){
    this.Created()
  }
}
