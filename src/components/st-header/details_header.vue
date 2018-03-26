<template>
  <div class="header">
    <div style="position: relative;height: 40px">
      <div @click="Return" class="details-left-arrow"><img src="../../assets/st-shop/icon-7.png" alt=""></div>
      <div class="header-right">
        <a @click="Collection($event)"><img src="../../assets/st-shop/icon-5.png" alt=""></a>
        <a @click="DetailsClisk($event)"><img src="../../assets/st-shop/icon-6.png" alt=""></a>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name:"DetailsHeader",
    props:{
      DetailsClisk:Function,
      Collection:Function,
      Return:Function
    }
  }
</script>
<style>
  .header{
    height: 40px;
    padding: 3px 0;
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    z-index: 999;
  }
  .details-left-arrow{
    position: absolute;
    width: 30px;
    height: 30px;
    top: 8px;
    left: 15px;
    font-size: 14px;
    line-height: 21px;
    color: #ccc;
    text-align: center;
    border-radius: 30px;
    background: #333;
    opacity: .6;
    overflow: hidden;
    webkit-box-align: center;
    -webkit-align-items: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .details-left-arrow img{
    width: 90%;
    display: block;
    margin: auto;
  }
  .header-right{
    right: 15px;
    position: absolute;
    top: 8px;
    display: block;
    font-size: 14px;
    line-height: 30px;
    color: #ccc;
  }
  .header-right a{
    float: left;
    color: #ccc;
    width: 30px;
    height: 30px;
    border-radius: 30px;
    background: #333;
    text-align: center;
    cursor: pointer;
    margin-left: 5px;
    opacity: .6;
    webkit-box-align: center;
    -webkit-align-items: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    align-items: center;
  }
  .header-right a img{
    width: 90%;
    display: block;
    margin: auto;
  }
  .header-right a i{
    color: #666666;
    text-align: center;
    margin-top: auto;
    display: inline-block;
    font-size: 16px;
  }
  .st-shop-img img{
    width: 100%;
    display: block;
  }
  .st-name h3{
    font-weight: inherit;
    padding: 0;
    margin: 0;
    font-size: 1.2rem;
    color: #ffffff;
    float: left;
  }
  .st-name a{
    font-size: 1rem;
    color: #ffffff;
    text-decoration: none;
    float: right;
    margin-right: 15px;
    border: 1px solid #ffffff;
    text-align: center;
    color: #ffffff;
    padding: 1% 4%;
    text-decoration: none;
    border-radius: 5px;
    font-size: .8rem;
  }
  .follow span{
    display: block;
    color: #ffffff;
    font-size: .9rem;
  }
  .follow span:first-child{
    float: left;
  }
  .follow span:last-child{
    float: right;
    margin-right: 15px;
  }
  .follow span s,.follow span b{
    font-weight: inherit;
    text-decoration: none;
    padding: 0 5px;
    display: inline-block;
    color: #ffffff;
    font-size: .8rem;
  }
  .follow span b{
    padding-right: 0 !important;
  }
  .st-notice div{
    float: left;
  }
  .st-content span{
    color: #666666;
  }
  .st-left-img img{
    margin-left: 16px;
    width: 20px;
  }
  .st-switch a span{
    display: block;
    width: 100%;
  }
  .st-switch a{
    width: 33.33333333%;
    text-decoration: none;
    float: left;
    text-align: center;
    color: #666666;
    line-height: 2.5rem;
  }
  .st-switch i{
    font-weight: inherit;
    text-decoration: inherit;
    font-style: inherit;
    line-height: 2.5rem;
    display: inline-block;
  }
  .border i{
    border-bottom: 2px solid #0BB20C;
  }

  .st-header-title input{
    width: 100%;
    line-height: 30px;
    padding: 0;
    margin: 0;
    border: 0;
    border-radius: 20px;
    text-indent: 30px;
    outline: medium;
  }

  .st-seach img{
    width: 100%;
  }

</style>
