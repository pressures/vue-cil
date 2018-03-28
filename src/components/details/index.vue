<template>
  <div class="details">
    <div class="particulars-img">
      <swiper :options="swiperOption" ref="mySwiper" class="">
        <!-- slides -->
        <swiper-slide v-for="item in productDetailImgsList"><img v-lazy="item.url" alt=""></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="specifications">
      <p v-html="product.productName">海鲜组合1冰冻海鲜海鲜组合1冰冻海鲜海鲜组合1</p>
      <div class="price">
        <span>￥<em v-html="product.displayPrice"></em></span>
        <a @click="Specifications($event)">选规格</a>
      </div>
      <div class="profit">
        <span>配送:<em>0.5</em></span>
        <span>佣金:<em v-html="productSkuList.commission">0.5</em></span>
        <span>利润:<em v-html="productSkuList.profit">0.5</em></span>
      </div>
    </div>
    <div class="details-shopname">
      <ul>
        <li><span><img src="../../assets/st-shop/icon-0111.png" alt=""></span><s style="font-size: 1.3rem;color: #333" v-html="product.shopName">雅供冷链专共</s></li>
        <li v-html="product.status==0?'该商品已下架！':'在售'"></li>
        <li>
          <a><b><img src="../../assets/st-shop/icon-0112.png" alt=""></b><s>正品保障</s></a>
          <a><b><img src="../../assets/st-shop/icon-0112.png" alt=""></b><s>线下门店</s></a>
          <a><b><img src="../../assets/st-shop/icon-0112.png" alt=""></b><s>七天退货</s></a>
        </li>
      </ul>
    </div>
    <div class="product-pingjia">
      <span>商品评价(<em v-html="pjlength">123</em>)</span>
      <span class="st-details-xingji">
        <!--<em><img src="../../assets/st-shop/icon-0004.png" alt=""></em>-->
        <s class="st-pingjia-huise huise">
          <img class="imgwidth" src="../../assets/st-shop/icon-110.png" alt="">
          <a :style="{'width':pingjia+'%'}">
            <i class="st-pingjia pingjia">
              <img src="../../assets/st-shop/icon-109.png" alt="">
            </i>
          </a>
        </s>
        <b>综合评价</b>
      </span>
    </div>
    <div class="selling">
      <p>热销推荐</p>
      <div class="tuijin">
        <a v-for="item in list" :href="item.href"><span><img v-lazy="item.mainPicPath" alt=""></span><s>￥<em v-html="item.displayPrice">0.00</em></s></a>
      </div>
    </div>
    <div class="selling margin">
      <p>商品详情</p>
      <div class="details-img">
        <span v-html="productDescription"></span>
      </div>
    </div>
  </div>
</template>
<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    name:"particulars",
    props:{
      product:Object,
      productSkuList:Object,
      pingjia:Number,
      pjlength:Number,
      productDescription:String,
      Specifications:Function,
      list:Array,
      swiperOption:Object,
      productDetailImgsList:Array
    }
  }
</script>
<style>
  .particulars-img{
    width: 100%;
    background: #fff;
  }
  .particulars-img img{
    width: 100%;
    display: block;
  }
  .specifications{
    width: 100%;
  }
  .specifications p{
    padding: 0 10px;
    padding-top: 10px;
    margin: 0;
    font-size: 1.2rem;
    background: #fff;
  }
  .price{
    background: #fff;
    padding: 0 10px;
    overflow: hidden;
    webkit-box-align: center;
    -webkit-align-items: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    align-items: center;
    position: relative;
  }
  .price span{
    color: #F12828;
    line-height: 40px;
  }
  .price a{
    display: block;
    padding: 0 10px;
    background: #0bb20c;
    color: #fff;
    border-radius: 20px;
    line-height: 2rem;
    position: absolute;
    right: 10px;
  }
  .price span em{
    font-size: 1.5rem;
  }
  .profit{
    background: #fff;
    overflow: hidden;
    padding: 0 10px;
    margin-top: 1px;
    line-height: 3rem;
    display:flex;
    justify-content:space-between;
  }
  .profit span{
    display: inline-block;
    color: #777;
  }
  .details-shopname{
    background: #fff;
    margin-top: 5px;
    padding: 0 10px;
  }
  .details-shopname ul{
    margin: 0;
    padding: 0;
  }
  .details-shopname ul li{
    list-style: none;
    webkit-box-align: center;
    -webkit-align-items: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    align-items: center;
    color: #777;
  }
  .details-shopname ul li img{
    width: 100%;
    display: block;
  }
  .details-shopname ul li a{
    webkit-box-align: center !important;
    -webkit-align-items: center !important;
    display: -webkit-box !important;
    display: -webkit-flex !important;
    display: flex !important;
    align-items: center !important;
  }
  .details-shopname ul li span,.details-shopname ul li a,.details-shopname ul li s,.details-shopname ul li b{
    display: inline-block;
    line-height: 40px;
  }
  .details-shopname ul li span,.details-shopname ul li b{
    width: 18px;
    margin-right: 5px;
  }
  .details-shopname ul li s{
    margin-right: 10px;
  }
  .product-pingjia{
    display:flex;
    justify-content:space-between;
    background: #fff;
    margin-top: 5px;
    padding: 5px 10px;
    overflow: hidden;
    webkit-box-align: center;
    -webkit-align-items: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    align-items: center;
    overflow: hidden;
  }
  .product-pingjia span{
    display: inline-block;
    font-size: 1.2rem;
  }
  .product-pingjia span:first-child{
    float: left;
    line-height: 34px;
  }
  .product-pingjia span:last-child{
    float: right;
  }
  .st-details-xingji{
    display: inline-block;
    overflow: hidden;
    line-height: 34px;
  }
  .st-details-xingji b{
    font-size: 1rem;
    color: #777;
  }
  .st-details-xingji em{
    display: inline-block;
    width: .5rem;
    transform:rotate(180deg);
  }
  .st-details-xingji em,.st-details-xingji s,.st-details-xingji b{
    float: right;
    display: block;

  }
  .st-details-xingji s{
    position: relative;
    overflow: hidden;
    display: inline-block;
    width: 40%;
    margin: 0 5px;
  }
  .st-details-xingji s img,.st-details-xingji em img{
    display: inline-block;
    width: 100%;
  }
  .st-details-xingji s a{
    position: absolute;
    left: 0;
    top:0;
    overflow: hidden;
    height: 100%;
  }
  .st-details-xingji s a i{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 20;
  }
  .selling{
    background: #fff;
    overflow: hidden;
    margin-top: 5px;
    padding: 0 10px;
  }
  .selling .tuijin{
    overflow: hidden;
  }
  .selling .tuijin a{
    display: block;
    float: left;
    width: 23%;
    margin: 1%;
    overflow: hidden;
  }
  .selling .tuijin a img{
    width: 100%;
  }
  .selling .tuijin a s{
    display: block;
    text-align: center;
    color: #F12828;
  }
  .selling .tuijin a span{
    display: block;
    width: 100%;
    overflow: hidden;
    height: 86px;
  }
  .selling p{
    font-size: 1.3rem;
    margin: 0;
    padding: 8px 0;
  }
  .details-img{
    overflow: hidden;
  }
  .details-img img{
    width: 100%;
    display: block;
  }
  .margin{
    padding: 0;
  }
  .margin p{
    margin: 10px;
  }
</style>
