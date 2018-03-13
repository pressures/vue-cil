<template>
  <div class="details-footer">
    <div class="left-shop">
      <span><img src="../../assets/st-shop/icon-0152.png" alt=""></span>
      <a :href="shophref" class="one"><b><img src="../../assets/st-shop/icon-0116.png" alt=""></b><s>店铺</s></a>
      <a class="tow"><b><img src="../../assets/st-shop/icon-0117.png" alt=""></b><s>客服</s></a>
      <a class="three" @click="Specifications($event)"><b><img src="../../assets/st-shop/icon-0118.png" alt=""></b><s>购物车</s></a>
    </div>
    <div class="reight-button">
      <a @click="DetailsClisk($event)">分享减价</a>
      <a @click="Specifications($event)">立即购买</a>
    </div>
  </div>
</template>
<script>
  export default {
    name:"DetailsFooter",
    props:{
      Specifications:Function,
      DetailsClisk:Function,
      shophref:String
    }
  }
</script>
<style>
  .details-footer{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #fff;
    display:flex;
    justify-content:space-between;
    z-index: 20;
  }
  .left-shop{
    overflow: hidden;
    webkit-box-align: center;
    -webkit-align-items: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    align-items: center;
  }
  .left-shop span{
    display: block;
    float: left;
    background: #19B754;
    padding: 1.1rem 8px;
  }
  .left-shop span img{
    width: 60%;
    display: block;
    margin: auto;
  }
  .left-shop a{
    display: block;
    float: left;
    margin-left: 1.3rem;
  }
  .left-shop a b{
    display: block;
    width: 80%;
    margin: auto;
    max-width: 30px;
  }
  .left-shop a b img{
    width: 100%;
  }
  .left-shop a img,.left-shop a s{
    display: block;
    text-align: center;
    color: #333;
  }
  .reight-button{
    webkit-box-align: center;
    -webkit-align-items: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    align-items: center;
  }
  .reight-button a:first-child{
    background: #FF9934;
  }
  .reight-button a{
    display: inline-block;
    padding: 5px 10px;
    background: #19B754;
    color: #fff;
    border-radius: 5px;
    margin: 0 5px;
  }
</style>
