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
  created() {
    this.ProductLists()
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    "$route": ["ProductLists"]
  },
  methods:{
    ProductLists:function () {
      var that = this
      var url = 'https://chat.yggx.com/index.php/Shop/select_product.html'
      // 参数
      var details = '/node/details'+
        '?Callback=jsonp'+
        '&token='+that.$route.query.token
      var params = {
        showPage:1,
        shopId:that.$route.query.shopId,
        showLimit:100,
        showSort:'id',//that.$route.query.showSort  根据获取到的字段排序
        showOrder:'desc',
        storeCategoryId:that.$route.query.storeCategoryId,
        stockNum:0,
        Callback:'jsonp'
      }
      $.ajax({
        url:url,
        data:params,
        type:'post',
        dataType:'JSONP',
        success:function (res) {
          if(res.code=='SUCCESS'){
            for(var i = 0;i<res.data.rows.length;i++){
              res.data.rows[i].mainPicPath = unescape(res.data.rows[i].mainPicPath) //url解码
              Vue.set(res.data.rows[i],"href",'https://chat.yggx.com/Public/node/#'+details+'&id='+res.data.rows[i].id)
            }
            Vue.set(that,"list",res.data.rows)
          }else {
            alert('请求失败！请重试...')
          }
        },
        error:function (res) {
          console.log('请求失败:....123')
        }
      })
    }
  },
  mounted(){
    //this.ProductLists()
  }
}
