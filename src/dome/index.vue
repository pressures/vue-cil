<template>
  <div class="home">
    <homeheader
      :header="header"/>
    <slide
      :swiperslide="swiperslide"
      :swiperOption="swiperOption"/>
    <classification
      :stcomments="stcomments"
      :Fraction="Fraction"
      :classify="classify"
      :Advertisement="Advertisement"
      :numerous="numerous"
      :Single="Single"
      :Recommend="Recommend"
      :PersonalDeuce="PersonalDeuce"/>
  </div>
</template>
<script>
  import Vue from "vue"
  import homeheader from "../components/st-header/home_header.vue"
  import Slide from "../components/st-banner/index.vue"
  import classification from "../components/st-classification/index.vue"
  //import {hybrid} from '../router/app'
  require('swiper/dist/css/swiper.css')

  export default {
    components: {
      Slide,
      homeheader,
      classification
    },
    data() {
      return {
        //头部位置　数据
        header:{
          newshref:"gomoreneardongtai",
          address:this.$route.query.detailAddress,
          href:'address'
        },
        //轮播位置　数据
        swiperslide:[
          {
            img:require("../../src/assets/st-shop/swiper-1.png"),
            name:'蚕丝被',
            href:'https://chat.yggx.com/gosearch?product='
          },
          {
            img:require("../../src/assets/st-shop/swiper-2.png"),
            name:'皇冠城堡',
            href:'https://chat.yggx.com/gosearch?product='
          },
          {
            img:require("../../src/assets/st-shop/swiper-3.png"),
            name:'女装',
            href:'https://chat.yggx.com/gosearch?product='
          },
        ],
        //swiper 参数设置
        swiperOption: {
          notNextTick: true,
          autoplay: {
            disableOnInteraction:false,
          },
          speed: 300,
          loop: true,
          autoplayDisableOnInteraction:false,
          pagination: {
            el: '.swiper-pagination',
          }
        },
        //分类处
        classify:[
          {
            img:require("../../src/assets/st-shop/icon-05.png"),
            name:"工厂店",
            linkhref:"https://chat.yggx.com/gosearch?shop=工厂店"
          },
          {
            img:require("../../src/assets/st-shop/icon-06.png"),
            name:"全球进口",
            linkhref:"https://chat.yggx.com/gosearch?product=进口"
          },
          {
            img:require("../../src/assets/st-shop/icon-07.png"),
            name:"活色海鲜",
            linkhref:"https://chat.yggx.com/gosearch?product=海鲜"
          },
          {
            img:require("../../src/assets/st-shop/icon-08.png"),
            name:"饮料酒水",
            linkhref:"https://chat.yggx.com/gosearch?product=酒水"
          },
          {
            img:require("../../src/assets/st-shop/icon-09.png"),
            name:"当季水果",
            linkhref:"https://chat.yggx.com/gosearch?product=水果"
          },
          {
            img:require("../../src/assets/st-shop/icon-10.png"),
            name:"9.9特卖",
            linkhref:"https://chat.yggx.com/gosearch?product=9.9特卖"
          },
          {
            img:require("../../src/assets/st-shop/icon-11.png"),
            name:"特价包邮",
            linkhref:"https://chat.yggx.com/gosearch?product=特价包邮"
          },
          {
            img:require("../../src/assets/st-shop/icon-12.png"),
            name:"精品礼盒",
            linkhref:"https://chat.yggx.com/gosearch?product=精品礼盒"
          },
          {
            img:require("../../src/assets/st-shop/icon-13.png"),
            name:"时尚服装",
            linkhref:"https://chat.yggx.com/gosearch?product=服装"
          },
          {
            img:require("../../src/assets/st-shop/icon-14.png"),
            name:"订单查询",
            linkhref:"https://chat.yggx.com/order"
          },
        ],
        Advertisement:{
          href:"https://chat.yggx.com/gosearch?product=",
          name:'水果',
          img:require("../../src/assets/st-shop/fruits.png")
        },
        numerous:"热卖单品",
        Single:[
          {
            img:require("../../src/assets/st-shop/12171.png"),
            name:'白雀羚',
            href:"https://chat.yggx.com/Public/node/#/node/details?Callback=jsonp&id=13198"+"&token="+this.$route.query.token
          },
          {
            img:require("../../src/assets/st-shop/15485.png"),
            name:'百草味',
            href:"https://chat.yggx.com/Public/node/#/node/details?Callback=jsonp&id=12008"+"&token="+this.$route.query.token
          },
        ],
        //推荐商家
        Recommend:"推荐商家",
        stcomments:[],
      }
    },
    created() {
      window.loc_address = this.loc_address
    },
    watch: {
       // 如果路由有变化，会再次执行该方法
      "$route": ["AjaxFunction"]
    },
    methods: {
      Fraction:function (a,b) {
        var fraction = 0
        if(a == 0 || b==0 ){
          fraction = (0).toFixed(1)
        }else {
          fraction = ((a/b)*5).toFixed(1)
        }
        return fraction
      },
      //个人平分计算　百分比
      PersonalDeuce: function (a, b) {
        var Deuce = 0, Personal = 0
        Personal = a / b
        Deuce = Personal*100;
        return Deuce
      },
      loc_address:function ($address,$longitude,$latitude) {
        if($address!==undefined||$latitude!==undefined||$longitude!==undefined){
          this.AjaxFunction($address,$longitude,$latitude)
        }
      },
      AjaxFunction:function ($address,$longitude,$latitude) {
        var that = this
        var url = "https://chat.yggx.com/index.php/index/select_nearshop.html"
        var latitude,longitude
        if($latitude!==undefined||$longitude!=undefined||$address!==undefined){
          this.header.address = $address
          latitude = $latitude
          longitude = $longitude
        }else {
          this.header.address = that.$route.query.detailAddress
          latitude = that.$route.query.latitude
          longitude = that.$route.query.longitude
        }
        var params = {
          latitude:latitude,
          longitude:longitude,
//          latitude:"35.213325",//35.213325,110.058035
//          longitude:"110.058035",
          Callback:'jsonp'
        }
        $.ajax({
          url:url,
          data:params,
          type:"post",
          dataType:"JSONP",
          success:function (res) {
            for (var i=0;i<res.data.rows.length;i++){
              if(!res.data.rows[i].announcement){
                Vue.set(res.data.rows[i],'announcement',"暂无商家公告")
              }
              var minute = res.data.rows[i].distance
              var company = minute.replace(/[^a-z]/ig,"")
              var nabber = minute.replace(/[^0-9\./]/ig,"")
              var time
              if(company=='m'){
                res.data.rows[i].distance = parseFloat(nabber/1000).toFixed(2)+"km"
                time = Math.floor((nabber/1000)/0.3) + "分"
              }else {
                res.data.rows[i].distance = res.data.rows[i].distance
                time = Math.floor(nabber/0.3) + "分"
              }
              var distance = res.data.rows[i].distance
              Vue.set(res.data.rows[i],"time",time)
              Vue.set(res.data.rows[i],"href","https://chat.yggx.com/Public/node/#/node/shop/home?shopId="+res.data.rows[i].id+"&token="+that.$route.query.token)
            }
            that.stcomments = res.data.rows
          },
          error:function () {
            console.log('请求失败！')
          }
        })
      }
    },
    mounted(){
      //loc_address(11,11.274047,120.209429)
      this.AjaxFunction()
      $(window).scroll(function(event){
        if($('.seach-product').html()!=undefined){
          const sollerTop = $(window).scrollTop()
          const documenttop = $('.seach-position').offset().top
          if(sollerTop>=documenttop){
            $('.seach-product').css({position:'fixed',top:0,left:0})
          }else {
            $('.seach-product').attr('style','')
          }
        }
      });
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
</script>
