import ProductList from "../src/components/st-product/index.vue"
import StEvaluate from "../src/components/st-evaluate/index.vue"
import Vue from "vue"
export default{
  //name:"home",
  components: {
    ProductList,
    StEvaluate
  },
  data(){
    return{
      list:[]
    }
  },
  computed:{

  },
  methods:{
    ProductLists:function () {
      var that = this
      var url = 'https://chat.yggx.com/index.php/Shop/select_product.html'
      // 参数
      var details = '/node/details'+
        '?Callback='+that.$route.query.Callback+
        '&token=78ac5vlm7v5fo933gp16jpud42'+
        '&shopId='+that.$route.query.shopId+
        '&uid='+that.$route.query.uid
      var params = {
        showPage:1,
        shopId:that.$route.query.shopId,
        showLimit:200,
        showSort:'id',
        showOrder:'desc',
        storeCategoryId:that.$route.query.storeCategoryId,
        stockNum:0,
        Callback:that.$route.query.Callback
      }
      $.ajax({
        url:url,
        data:params,
        type:'post',
        dataType:'JSONP',
        success:function (res) {
          //console.log('请求成功')
          if(res.code=='SUCCESS'){
            for(var i = 0;i<res.data.rows.length;i++){
              res.data.rows[i].mainPicPath = unescape(res.data.rows[i].mainPicPath) //url解码
              Vue.set(res.data.rows[i],"href",details+'&id='+res.data.rows[i].id)
            }
            Vue.set(that,"list",res.data.rows)
          }else {
            alert('请求失败！请重试...')
          }
        },
        error:function (res) {
          console.log('请求失败:')
        }
      })
    }
  },
  mounted(){
    this.ProductLists()
  }
}
