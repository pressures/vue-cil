<template>
  <div class="st-product">
    <div class="st-product-cheage product-checkout show">
      <router-link v-for="item in list" :to="item.href">
        <span><img v-bind:src="item.mainPicPath" alt=""></span>
        <div class="st-product-describe">
          <p v-html="item.productName"></p>
          <p><s>￥</s><em v-html="item.displayPrice"></em><b>+购物车</b></p>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  export default {
    name:"productList",
    props:{
      list:Array,
    }
  }
</script>
<style>
  ul{
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .st-product-cheage{
    overflow: hidden;
  }
  .st-product-cheage a{
    float: left;
    width: 48%;
    overflow: hidden;
    display: block;
    margin: 1%;
    text-decoration: none;
    color: #333333;
    background: #ffffff;
  }
  .st-product-cheage a span{
    display: block;
    height: 50vw;
  }
  .st-product-cheage a span img{
    display: block;
    width: 100%;
  }
  .st-product-cheage p{
    margin: 0;
    padding: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .st-product-describe p{
    padding: 5px 5px;
  }
  .st-product-describe p s{
    text-decoration: none;
    color: red;
  }
  .st-product-describe p em{
    font-style: inherit;
    color: red;
    font-size: 1.2rem;
  }
  .st-product-describe p b{
    font-weight: inherit;
    display: block;
    padding: 0 5px;
    background: #0BB20C;
    text-align: center;
    color: #ffffff;
    float: right;
    border-radius: 20px;
    font-size: 1rem;
  }
  .show{
    display: block;
  }

</style>
