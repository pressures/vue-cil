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
          newshref:"#",
          address:"江干区白杨街道111111111"
        },
        //轮播位置　数据
        swiperslide:[
          {img:require("../../src/assets/st-shop/icon-24.png")},
          {img:require("../../src/assets/st-shop/icon-24.png")},
          {img:require("../../src/assets/st-shop/icon-24.png")},
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
            linkhref:"#"
          },
          {
            img:require("../../src/assets/st-shop/icon-06.png"),
            name:"全球进口",
            linkhref:"#"
          },
          {
            img:require("../../src/assets/st-shop/icon-07.png"),
            name:"活色海鲜",
            linkhref:"#"
          },
          {
            img:require("../../src/assets/st-shop/icon-08.png"),
            name:"饮料酒水",
            linkhref:"#"
          },
          {
            img:require("../../src/assets/st-shop/icon-09.png"),
            name:"当季水果",
            linkhref:"#"
          },
          {
            img:require("../../src/assets/st-shop/icon-10.png"),
            name:"9.9特卖",
            linkhref:"#"
          },
          {
            img:require("../../src/assets/st-shop/icon-11.png"),
            name:"特价包邮",
            linkhref:"#"
          },
          {
            img:require("../../src/assets/st-shop/icon-12.png"),
            name:"精品礼盒",
            linkhref:"#"
          },
          {
            img:require("../../src/assets/st-shop/icon-13.png"),
            name:"时尚服装",
            linkhref:"#"
          },
          {
            img:require("../../src/assets/st-shop/icon-14.png"),
            name:"订单查询",
            linkhref:"#"
          },
        ],
        Advertisement:{
          href:"#",
          img:require("../../src/assets/st-shop/icon-15.png")
        },
        numerous:"热卖单品",
        Single:[
          {
            img:require("../../src/assets/st-shop/icon-16.png"),
            href:"#"
          },
          {
            img:require("../../src/assets/st-shop/icon-17.png"),
            href:"#"
          },
        ],
        //推荐商家
        Recommend:"推荐商家",
        stcomments:[],
      }
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
      AjaxFunction:function () {
        var that = this
        var url = "https://chat.yggx.com/index.php/index/select_nearshop.html"
        var params = {
          latitude:"30.274047",
          longitude:"120.209429",
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
                time = Math.floor((nabber/1000)/0.2) + "分"
              }else {
                res.data.rows[i].distance = res.data.rows[i].distance
                time = Math.floor(nabber/0.2) + "分"
              }
              Vue.set(res.data.rows[i],"time",time)
              Vue.set(res.data.rows[i],"href","/node/shop/home?shopId="+res.data.rows[i].id+"&uid="+res.data.rows[i].uid+"&Callback=jsonp"+"&storeCategoryId=")
            }
            var v = res.data.rows[0].distance
            that.stcomments = res.data.rows
          },
          error:function () {
            console.log('请求失败！')
          }
        })
      }
    },
    mounted(){
      this.AjaxFunction()
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
