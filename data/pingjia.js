import StEvaluate from "../src/components/st-evaluate/index";
import Vue from "vue"
export default {
  //name:"pingjia",
  components:{
    StEvaluate
  },
  data(){
    return{
      generalnumber:"0.0",
      active: false,
      degree:[
        {
          rated:"商品描述：",
          score:"0.0",
          width:"0"
        },
        {
          rated:"商品质量：",
          score:"0.0",
          width:"0"
        },
        {
          rated:"服务态度：",
          score:"0.0",
          width:"0"
        }
      ],
      whole:[
        {
          praise:"全部",
          active:true
        },
        {
          praise:"好评",
          active:false
        },
        {
          praise:"差评",
          active:false
        },
        {
          praise:"有图",
          active:false
        }
      ],
      stcomments:[],
    }
  },
  methods:{
    //个人平分计算　百分比
    PersonalDeuce:function (a,b,c) {
      var Deuce = 0,Personal = 0
      Personal = a+b+c
      Deuce = (Personal/15)*100;
      return Deuce
    },
    Evaluate:function () {
      var that = this
      var url = 'https://chat.yggx.com/index.php/shop/select_evaluation.html'
      var params = {
        sellerId:that.$route.query.sellerId, //149193 215100
        Callback:'jsonp'
      }
      $.ajax({
        url:url,
        data:params,
        type:"post",
        dataType:"jsonp",
        success:function (res) {
          if(res.code == 'SUCCESS'){
            //进行数据处理
            that.stcomments = res.data.rows
            for(var i = 0;i<res.data.rows.length;i++){
              var pic = new String()
              var arr = new Array()
              var pus = []
              pic = res.data.rows[i].picture
              if(pic!=undefined){
                arr=pic.split(',');
                for(var v=0;v<arr.length;v++){
                  var json_data = {}
                  Vue.set(json_data,"img",arr[v])
                  pus.push(json_data)
                }
              }
              Vue.set(res.data.rows[i],"picture",pus)
            }
            Vue.set(that,"stcomments",res.data.rows)
            console.log(that.stcomments)
            //v-for 渲染完成后
            that.$nextTick(() => {
              var Attitude = 0
              var Description = 0
              var Quality = 0
              for (var i=0;i<that.stcomments.length;i++){
                Attitude += that.stcomments[i].evaAttitude
                Description += that.stcomments[i].evaDescription
                Quality += that.stcomments[i].evaQuality
              }

              //总分比
              that.degree[0].width = parseFloat(Description/(res.data.totalRowNum*5)*100)
              that.degree[1].width = parseFloat(Quality/(res.data.totalRowNum*5)*100)
              that.degree[2].width = parseFloat(Attitude/(res.data.totalRowNum*5)*100)
              //总分值
              that.degree[0].score = (parseFloat(Description/(res.data.totalRowNum*5))*5).toFixed(1)
              that.degree[1].score = (parseFloat(Quality/(res.data.totalRowNum*5))*5).toFixed(1)
              that.degree[2].score = (parseFloat(Attitude/(res.data.totalRowNum*5))*5).toFixed(1)
              if(parseFloat(that.degree[0].score).toString()=='NaN'){
                that.degree[0].score = (0).toFixed(1)
              }else {
                that.degree[0].score = (parseFloat(Description/(res.data.totalRowNum*5))*5).toFixed(1)
              }
              if(parseFloat(that.degree[1].score).toString()=='NaN'){
                that.degree[1].score = (0).toFixed(1)
              }else {
                that.degree[1].score = (parseFloat(Quality/(res.data.totalRowNum*5))*5).toFixed(1)
              }
              if(parseFloat(that.degree[2].score).toString()=='NaN'){
                that.degree[2].score = (0).toFixed(1)
              }else {
                that.degree[2].score = (parseFloat(Attitude/(res.data.totalRowNum*5))*5).toFixed(1)
              }
              //总体评价
              that.generalnumber = parseFloat((Description/(res.data.totalRowNum*5)*5+Quality/(res.data.totalRowNum*5)*5+Attitude/(res.data.totalRowNum*5)*5)/3).toFixed(1)
              if(parseFloat(that.generalnumber).toString()=='NaN'){
                that.generalnumber = (0).toFixed(1)
              }else {
                that.generalnumber = parseFloat((Description/(res.data.totalRowNum*5)*5+Quality/(res.data.totalRowNum*5)*5+Attitude/(res.data.totalRowNum*5)*5)/3).toFixed(1)
              }
              //个人平分星的宽度
              $('.st-pingjia-huise').each(function () {
                $(this).find('.st-pingjia').css({width:$(this).width()+'px'})
              })
              $('.placeholder').css({height:$('.st-switch').height()+'px'})
            })
          }else {
            alert('请求失败5')
          }
        }
      })
    }
  },
  mounted(){
    this.Evaluate()
    //监听窗口的大小变化
    window.onresize = () => {
      return (() => {
        $('.st-pingjia-huise').each(function () {
          $(this).find('.st-pingjia').css({width:$(this).width()+'px'})
        })
        $('.placeholder').css({height:$('.st-switch').height()+'px'})
      })()
    }
  }
}

