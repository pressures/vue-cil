<template>
  <div class="header">
    <div class="st-left-arrow"><img src="../../assets/st-shop/icon-7.png" alt=""></div>
    <div class="st-header-right">
      <a @click="Collection($event)"><img src="../../assets/st-shop/icon-5.png" alt=""></a>
      <a @click="DetailsClisk($event)"><img src="../../assets/st-shop/icon-6.png" alt=""></a>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name:"DetailsHeader",
    props:{
      DetailsClisk:Function,
      Collection:Function
    }
  }
</script>
<style>
  .st-header{
    width: 100%;
    position: relative;
    z-index: 999;
  }
  .top-header{

    width: 100%;
  }
  .header{
    height: 40px;
    padding: 3px 0;
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    z-index: 999;

  }
  .st-left-arrow{
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
  }
  .st-left-arrow img{
    width: 32%;
    display: block;
    margin: auto;
  }
  /*.st-left-arrow:after{
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    border: 2px solid #666666;
    border-width: 2px 0 0 2px;
    -webkit-transform: rotate(315deg);
    transform: rotate(315deg);
    top: 9px;
    left: 12px;
  }*/
  .st-header-title{
    margin: 0 88px;
    height: 40px;
    width: auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 34px;
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    color: #fff;
    opacity: .5;
  }
  .st-header-right{
    right: 15px;
    position: absolute;
    top: 8px;
    display: block;
    font-size: 14px;
    line-height: 30px;
    color: #ccc;
  }
  .st-header-right a{
    float: left;
    color: #ccc;
    width: 30px;
    height: 30px;
    border-radius: 30px;
    background: #333;
    text-align: center;
    margin-left: 5px;
    opacity: .6;
    webkit-box-align: center;
    -webkit-align-items: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    align-items: center;
  }
  .st-header-right a img{
    width: 50%;
    display: block;
    margin: auto;
  }
  .st-header-right a i{
    color: #666666;
    text-align: center;
    margin-top: auto;
    display: inline-block;
    font-size: 16px;
  }
  /*shop-name*/
  .st-shop-name{
    position: relative;
    display: list-item;
  }
  .st-shop-img{
    position: absolute;
    width: 20%;
    max-width: 150px;
    top:10%;
    left: 4%;
    text-align: center;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
    -webkit-box-shadow: #7C7C7C 0px 0px 2px;
    -moz-box-shadow: #7C7C7C 0px 0px 2px;
    box-shadow: #7c7c7c 0px 0px 4px;
  }
  .st-shop-img img{
    width: 100%;
    display: block;
  }
  .st-name,.follow{
    padding-left: 28%;
    overflow: hidden;
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
  .st-introduce{
    overflow: hidden;
  }
  .follow{
    overflow: hidden;
    padding-top: 2%;
    padding-bottom: 1%;
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
  .st-notice{
    padding-top: 5%;
    overflow: hidden;
    background: #ffffff;
    padding-bottom: 2%;
  }
  .st-notice div{
    float: left;
  }
  .st-left-img{
  }
  .st-content{
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    width: 76%;
    margin-left: 10px;
  }
  .st-content span{
    color: #666666;
  }
  .st-right-img{
    float: right !important;
    margin-right: 16px;
  }
  .st-left-img img{
    margin-left: 16px;
    width: 20px;
  }
  .st-header-mohu{
    background: url("../../assets/st-shop/icon-005.png") no-repeat;
    background-size: 350% 350%;
    -moz-background-size: 350% 350%; /*  Firefox 3.6 */
    -o-background-size: 350% 350%;/* Opera 9.5 */
    -webkit-background-size: 350% 350%;/* Safari 3.0 */
    -webkit-filter: blur(6px); /* Chrome, Opera */
    -moz-filter: blur(6px);
    -ms-filter: blur(6px);
    filter: blur(6px);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    overflow: hidden
  }
  .mud-header{
    background: url("../../assets/st-shop/icon-005.png") no-repeat;background-size: 350% 350%;
    -moz-background-size: 350% 350%; /*  Firefox 3.6 */
    -o-background-size: 350% 350%;/* Opera 9.5 */
    -webkit-background-size: 350% 350%;/* Safari 3.0 */
    -webkit-filter: blur(6px); /* Chrome, Opera */
    -moz-filter: blur(6px);
    -ms-filter: blur(6px);
    filter: blur(6px);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 46px;
    z-index: 3;
    overflow: inherit;
  }

  .st-switch{
    overflow: hidden;
    width: 100%;
    background: #ffffff;
  }
  .placeholder{
    margin-top: 5px;
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
  .st-header-title{
    position: relative;
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
  .st-seach{
    position: absolute;
    left: 0;
    top: 0;
    width: 30px;
    height: 30px;
    border-radius: 30px;
    overflow: hidden;
    margin-top: 4px;
  }
  .st-seach img{
    width: 50%;
  }
  .st-seach-img{
    margin: 0 88px;
    height: 40px;
    width: auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 34px;
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    color: #fff;
    opacity: .5;
  }
  .st-seach-img input{
    display: none;
  }
  .st-seach-img div{
    position: relative;
    width: 100%;
    height: 30px;
  }
  .st-seach-img a{
    background: #ffffff;
    width: 30px;
    height: 30px;
    -webkit-align-items: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    align-items: center;
    position: absolute;
    right: 0;
    top: 0;
    left: inherit;
  }
  .st-seach-img a img{
    width: 50%;
    margin: auto;
    display: block;
  }
</style>
