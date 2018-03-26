import StHeader from "../src/components/st-header/index"
import StFooter from "../src/components/st-footer/index"
import ShangJia from "../src/components/st-business/index"
import Layer from "../src/components/st-popup/layer.vue"
var Interface = 'https://chat.yggx.com/index.php/shop/storetopinfo.html'
import Distance from "../src/dome/index.vue"
import Vue from "vue"
export default {
  name:"home",
  components:{
    StHeader,
    StFooter,
    ShangJia,
    Layer
  },
  data(){
    return {
      Json_Data :{},
      seach:false,
      Isdata:false,
      naver:[
        {
          classification:"商品",
          href:"/node/shop/home"+"?shopId="+this.$route.query.shopId+"&uid="+this.$route.query.uid+'&token='+this.$route.query.token,
          border:true
        },
        {
          classification:"评价",
          href:"/node/shop/pingjia"+"?shopId="+this.$route.query.shopId+"&uid="+this.$route.query.uid+'&token='+this.$route.query.token,
          border:false
        },
        {
          classification:"商家",
          href:"/node/shop/shangjia"+"?shopId="+this.$route.query.shopId+"&uid="+this.$route.query.uid+'&token='+this.$route.query.token,
          border:false
        }
      ],
      classification:[
        {
          shopnew:"全部商品",
          show:true,
          //href:'javascript:;',
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
          //href:'javascript:;',
        },
        {
          shopnew:"热销排行",
          show:false,
          //href:'javascript:;',
        }
      ]
    }
  },
  // computed:{
  //   minute:function () {
  //     return Math.floor(this.Json_Data.distance/0.3);
  //   }
  // },
  created() {
    this.Created()
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    "$route": ["Created"]
  },
  methods:{
    //返回
    Return:function (event) {
      $(event.target).parents('a').attr('href','https://chat.yggx.com/back')
    },
    //店铺信息
    Created:function(){
      //获取数据
      var that = this
      var params = {
        shopId:that.$route.query.shopId,
        Callback:'jsonp'
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
            that.Foorter()
          }else {
            alert('请求失败4')
          }

        }
      })
    },
    //分享
    DetailsClisk:function (event) {
      var paramete =
        '?{"shareid":'+'"'+this.Json_Data.id+'"'+
        ',"shareName":'+'"'+this.Json_Data.name+'"'+
        ',"shareUrl":'+'"'+this.Json_Data.signageUrl+'"'+
        ',"address":'+'"'+this.Json_Data.detailAddress+'"'+
        ',"type":1}'
      $.each($(event.target).parents('body').find('#layerdetails .sharebox a'),function () {
        $(this).attr('href',$(this).attr('href')+encodeURI(paramete))
      })
      $(event.target).parents('body').find('#layerdetails').slideDown()
    },
    DetailsCliskclose:function (event) {
      $(event.target).parents('.layui-m-layer').fadeOut()
    },
    StFollows:function(){
      var that = this
      var url = 'https://chat.yggx.com/index.php/shop/collect_store.html'
      var params = {
        uid:that.$route.query.uid,
        storeId:that.$route.query.shopId,
        Callback:'jsonp'
      }
      $.ajax({
        url:url,
        data:params,
        type:"post",
        dataType:"jsonp",
        success:function (res) {
          if(res.code=='SUCCESS'){
            that.Follows()
            Vue.set(that,'Isdata',that.data)
          }
        },
        error:function () {
          alert('请求失败3')
        }
      })
    },
    selectStyle:function(item, index) {
      this.$nextTick(function () {
        this.naver.forEach(function (item) {
          Vue.set(item, 'border', false);
        });
        Vue.set(item, 'border', true);
      });
      $('.st-footer').find('li p').slideUp()
      $('.st-footer').find('li b').slideUp()
    },
    Bottomclass:function (event,index) {
      var that = this
      if(index===1){
        that.$layer.msg("暂无上新!");
      }else {
        that.$layer.msg("已为您入购物车!");
      }
    },
    //底部下拉
    Foorter:function () {
      var that = this
      var url = 'https://chat.yggx.com/index.php/shop/storecategory.html'
      var ref = '/node/shop/home'+"?shopId="+this.$route.query.shopId+"&uid="+this.$route.query.uid+'&token='+this.$route.query.token+"&storeCategoryId="
      var params = {
        shopuid: that.Json_Data.uid,
        Callback:'jsonp'
      }
      $.ajax({
        url:url,
        data:params,
        type:"post",
        dataType:"jsonp",
        success:function (res) {
          //that.classification[0].subclass=res.data
          if(res.code=='SUCCESS'){
            for(var i=0;i<res.data.length;i++){
              Vue.set(res.data[i],"href",ref+res.data[i].id)
            }
            that.classification[0].subclass=res.data
            console.log(that.classification[0].subclass)
          }else {
            alert('请求失败2')
          }
        }
      })
    },
    Navigation:function (event,index) {
      var ref = '#/node/shop/home'+"?shopId="+this.$route.query.shopId+"&uid="+this.$route.query.uid+'&token='+this.$route.query.token+"&storeCategoryId=0"
      if(index==0){
        var st_hight = $(event.currentTarget).parent().find('p');
        if(this.classification[0].subclass.length!==0){
          st_hight.stop(true).slideToggle();
          $(event.currentTarget).parent().find('b').stop(true).fadeToggle();
          $(event.currentTarget).parent().siblings('li').find('p').slideUp();
          $(event.currentTarget).parent().siblings('li').find('b').fadeOut();
        }
      }else if(index==1){
        this.naver[0].border = true
        this.naver[1].border = false
        this.naver[2].border = false
        $(event.target).parents('ul').find('li b').fadeOut()
        $(event.target).parents('ul').find('li p').slideUp()
        this.$layer.msg("暂无上新!");
        $(event.target).attr('href',ref)
      }else {
        this.naver[0].border = true
        this.naver[1].border = false
        this.naver[2].border = false
        $(event.target).parents('ul').find('li b').fadeOut()
        $(event.target).parents('ul').find('li p').slideUp()
        this.$layer.msg("暂无排行!");
        $(event.target).attr('href',ref)
      }
    },
    This_Navigation:function (event) {
      $(event.currentTarget).parents('li').find('p').slideToggle();
      $(event.currentTarget).parents('li').find('b').fadeToggle();
      this.naver[0].border = true
      this.naver[1].border = false
      this.naver[2].border = false
    },
    //关注
    Follows:function () {
      var that = this
      var url = 'https://chat.yggx.com/index.php/shop/shop_iscollect.html'
      var params = {
        uid:that.$route.query.uid,
        storeId:that.$route.query.shopId,
        Callback:'jsonp'
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
            alert('请求失败1')
          }
        }
      })
    }
  },
  //组件渲染完毕后　初始化
  mounted(){
    //var that = this
    $(window).scroll(function(event){
      if($('.st-header').html()!=undefined){
        const sollerTop = $(window).scrollTop()
        const documenttop = $('.st-notice').offset().top
        const placeholder = $('.placeholder').offset().top
        const mudheader = $('.mud-header')
        const stswitch = $('.st-switch')
        const header = $('.header').offset().top
        if(sollerTop>documenttop){
          mudheader.css({filter:"blur(1px)",'background-size':'350% 350%'})
        }else {
          mudheader.css({filter:"blur(6px)",'background-size':'350%'})
        }
        if(sollerTop>placeholder-mudheader.height()){
          $('.placeholder').css({height:stswitch.height()})
          stswitch.css({position:"fixed",top:mudheader.height()+'px',left:0,width:"100%",zIndex:999})
        }else {
          stswitch.attr('style',"")
        }
        if(header>0){
          $('.header h1').attr('class','').addClass('st-header-title')
        }else {
          $('.header h1').attr('class','').addClass('st-seach-img')
        }
      }
    });
    this.Created()
    this.Follows()
    //$('.st-footer ul li:first-child a').attr('href','javascript:;')
    //console.log($('.st-footer ul li:first-child a').attr('href'))
  }
}
