<template>
  <div class="popup">
    <div @click="popupfadeout($event)" class="popup-fixed-1"></div>
    <div class="popup-fixed-2">
      <p><span v-html="product.productName">海鲜组合1冰冻海鲜海鲜组合1冰冻海鲜海鲜组合1</span><s @click="popupfadeout($event)">X</s></p>
      <div class="guige">
        <div class="Stock" style="color: #777;margin-bottom: 10px">规格: <em class="choice">您还未选择商品规格!</em><span>库存:<em v-html="Stock">111</em></span></div>
        <div class="Specifications">
          <a v-for="(item, $index) in SkuList" :class="{'active':item.active,'undactive':!item.active}"
             @click="selectStyle(item, $index,$event)"
             :data-skuid="item.id"
             :data-Stock="item.stockNum"
             :data-productId="product.id"
             :data-freightTemplateId="product.freightTemplateId"
             :data-shopId="product.shopId"
             :data-isDiscount="item.isDiscount"
             :data-skuRule="item.skuRule"
             :data-skuRuleName="item.skuRuleName"
             :data-price="item.price">
            <span v-html="item.skuRuleName"></span></a>
        </div>
      </div>
      <div class="popup-button">
        <span>￥<em v-html="reversedMessage">0.00</em></span>
        <div class="button">
          <b class="Reduce" @touchend="Reduce($event)"><img src="../../../src/assets/st-shop/icon-4.png" alt=""></b>
          <input type="text" value="1" v-model="counter" disabled>
          <b class="Increase" @touchend="Increase($event)"><img src="../../../src/assets/st-shop/icon-3.png" alt=""></b>
        </div>
      </div>
      <div class="popup-button product_status">
        <a @click="ShoppingCart($event)">+购物车</a>
        <a @click="Purchase($event)">立即购买</a>
      </div>
    </div>
  </div>
</template>
<script>
  import Vue from "vue"
  export default {
    name:"Popup",
    props:{
      popupfadeout:Function,
      SkuList:Array,
      product:Object,
      Increase:Function,
      Reduce:Function,
      counter:Number,
      reversedMessage:String,
      Purchase:Function,
      selectStyle:Function,
      ShoppingCart:Function,
      Stock:Number
    }
  }
</script>
<style>
  .grayness{
    background: #cccccc !important;
  }
  .popup{
    display: none;
  }
  .popup .popup-fixed-1{
    position: fixed;
    background: #000;
    opacity: .5;
    width: 100%;
    height: 100%;
    z-index: 100;
    top: 0;
    left: 0;
  }
  .popup .popup-fixed-2{
    position: fixed;
    background: #fff;
    width: 90%;
    left: 50%;
    margin-left: -45%;
    border-radius: 10px;
    top: 50%;
    z-index: 101;
    max-height: 310px;
    overflow: auto;
  }
  .popup-fixed-2 p{
    position: relative;
  }
  .popup-fixed-2 p span{
    width: 60%;
    display: block;
    margin: auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 1.3rem;
  }
  .popup-fixed-2 p s{
    display: block;
    position: absolute;
    right: 20px;
    top: 0;
    font-size: 1.5rem;
  }
  .guige{
    padding: 0 20px;
  }
  .Specifications{
    /*overflow: hidden;*/
    max-height: 98px;
    overflow: auto;
  }
  .Specifications a{
    display: block;
    float: left;
    line-height: 2rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 0 6px;
    margin: 5px 6px;
  }
  .Specifications .active{
    background: #D8FFEC;
    border: 1px solid #1CB957;
  }
  .popup-button{
    overflow: hidden;
    padding: 10px 20px;
    border-top: 1px solid #f1f1f1;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    webkit-box-align: center;
    -webkit-align-items: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    align-items: center;
  }
  .popup-button span{
    color: #F12828;
    float: left;
    display: block;
    line-height: 28px;
  }
  .popup-button span em{
    font-size: 1.5rem;
  }
  .popup-button a:first-child{
    background: #FF9934;
  }
  .popup-button a{
    display: inline-block;
    padding: 3% 16%;
    background: #0bb20c;
    color: #fff;
    border-radius: 20px;
    margin: 0 2px;
  }
  .button{
    float: right;
    webkit-box-align: center;
    -webkit-align-items: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    align-items: center;
    overflow: hidden;
  }
  .button b{
    display: inline-block;
    width: 26px;
    height: 26px;
    border-radius: 26px;
    line-height: 26px;
    margin: 0 5px;
    overflow: hidden;
    background: #0bb20c;
    float: left;
  }
  .button b img{
    width: 100%;
    display: block;
  }
  .button input{
    outline: medium;
    width: 50px;
    text-align: center;
    border: 1px solid #ccc;
    line-height: 26px;
    border-radius: 5px;
    padding: 0 5px;
    background: #fff;
    float: left;
  }
  .choice{
    color: red;
    padding-left: 10px;
    display: none;
  }
  .undactive{
    border: 1px solid #ccc;
    background: #fff;
  }
  .Stock{
    overflow: hidden;
  }
  .Stock span{
    display: inline-block;
    float: right;
  }
</style>
