import StHeader from "../src/components/st-header/index"
import StFooter from "../src/components/st-footer/index"
import ShangJia from "../src/components/st-business/index"
var Interface = 'https://chat.yggx.com/index.php/shop/storetopinfo.html'
import HomeJs from "../data/home.js"
import Vue from "vue"
export default {
  name:"home",
  components:{
    StHeader,
    StFooter,
    ShangJia
  },
  data(){
    return {
      Json_Data :{},
      seach:false,
      Isdata:false,
      naver:[
        {
          classification:"商品",
          href:"/node/shop/home"+"?shopId="+this.$route.query.shopId+"&uid="+this.$route.query.uid+"&Callback="+this.$route.query.Callback+"&storeCategoryId="+"",
          border:true
        },
        {
          classification:"评价",
          href:"/node/shop/pingjia"+"?shopId="+this.$route.query.shopId+"&uid="+this.$route.query.uid+"&Callback="+this.$route.query.Callback+"&storeCategoryId="+"",
          border:false
        },
        {
          classification:"商家",
          href:"/node/shop/shangjia"+"?shopId="+this.$route.query.shopId+"&uid="+this.$route.query.uid+"&Callback="+this.$route.query.Callback+"&storeCategoryId="+"",
          border:false
        }
      ],
      classification:[
        {
          shopnew:"全部商品",
          show:true,
          subclass:[
            {
              name:"全部商品",
              id:112
            }
          ]
        },
        {
          shopnew:"店铺上新",
          show:false,
          //href:"11111111",
        },
        {
          shopnew:"热销排行",
          show:false,
          //href:"11111111",
        }
      ]
    }
  },
  computed:{
    minute:function () {
      return Math.floor(this.Json_Data.distributionDistance/0.4);
    }
  },
  methods:{
    //店铺信息
    Created:function(){
      //获取数据
      var that = this
      var params = {
        shopId:that.$route.query.shopId,
        Callback:that.$route.query.Callback
      }
      var url="https://chat.yggx.com/index.php/shop/storetopinfo.html";
      $.ajax({
        url:url,
        data:params,
        type:"post",
        dataType:"jsonp",
        success:function (res) {
          if(res.code=='SUCCESS'){
            that.Json_Data=res.data
          }else {
            alert('请求失败')
          }
        }
      })
    },
    StFollows:function(){
      var that = this
      var url = 'https://chat.yggx.com/index.php/shop/collect_store.html'
      var params = {
        uid:that.$route.query.uid,
        storeId:that.$route.query.shopId,
        Callback:that.$route.query.Callback
      }
      $.ajax({
        url:url,
        data:params,
        type:"post",
        dataType:"jsonp",
        success:function (res) {
          if(res.code=='SUCCESS'){
            that.Isdata = !that.data
          }else {
            alert('请求失败')
          }
        }
      })
      // window.location.reload()
    },
    //底部下拉
    Foorter:function () {
      var that = this
      var url = 'https://chat.yggx.com/index.php/shop/storecategory.html'
      var shopid = this.$route.query.shopId
      var uid = this.$route.query.uid
      var Callback = this.$route.query.Callback
      var ref = '/node/shop/home'+"?shopId="+shopid+"&uid="+uid+"&Callback="+Callback+"&storeCategoryId="
      var params = {
        shopuid:that.$route.query.uid,
        Callback:that.$route.query.Callback
      }
      $.ajax({
        url:url,
        data:params,
        type:"post",
        dataType:"jsonp",
        success:function (res) {
          if(res.code=='SUCCESS'){
            for(var i=0;i<res.data.length;i++){
              Vue.set(res.data[i],"href",ref+res.data[i].id)
            }
            that.classification[0].subclass=res.data
          }else {
            alert('请求失败')
          }
        }
      })
    },
    Navigation:function (event) {
      var st_hight = $(event.currentTarget).parent().find('p');

      if(this.classification[0].subclass.length!==0){
        st_hight.stop(true).slideToggle();
        $(event.currentTarget).parent().find('b').stop(true).fadeToggle();
        $(event.currentTarget).parent().siblings('li').find('p').slideUp();
        $(event.currentTarget).parent().siblings('li').find('b').fadeOut();
      }
    },
    This_Navigation:function (event) {
      $(event.currentTarget).parents('li').find('p').slideToggle();
      $(event.currentTarget).parents('li').find('b').fadeToggle();


    },
    //关注
    Follows:function () {
      var that = this
      var url = 'https://chat.yggx.com/index.php/shop/shop_iscollect.html'
      var params = {
        uid:that.$route.query.uid,
        storeId:that.$route.query.shopId,
        Callback:that.$route.query.Callback
      }
      $.ajax({
        url:url,
        data:params,
        type:"post",
        dataType:"jsonp",
        success:function (res) {
          if(res.code=='SUCCESS'){
            that.Isdata = res.data
          }else {
            alert('请求失败')
          }
        }
      })
    }
  },
  //组件渲染完毕后　初始化
  mounted(){
    $(window).scroll(function(event){
      const sollerTop = $(window).scrollTop()
      const documenttop = $('.st-notice').offset().top
      const placeholder = $('.placeholder').offset().top
      const mudheader = $('.mud-header')
      const stswitch = $('.st-switch')
      const header = $('.header').offset().top
      if(sollerTop>documenttop){
        mudheader.css({filter:"blur(1px)"})
      }else {
        mudheader.css({filter:"blur(6px)"})
      }
      if(sollerTop>placeholder-mudheader.height()){
        stswitch.css({position:"fixed",top:mudheader.height()+'px',left:0,width:"100%",zIndex:999})
      }else {
        stswitch.attr('style',"")
      }
      if(header>0){
        $('.header h1').attr('class','').addClass('st-header-title')
      }else {
        $('.header h1').attr('class','').addClass('st-seach-img')
      }
    });
    this.Created()
    this.Foorter()
    this.Follows()
  }
}
