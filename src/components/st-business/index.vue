<template>
  <div class="st-product">
    <div class="st-product-business product-checkout">
      <div class="st-business-number">
        <span><img src="../../assets/st-shop/icon-105.png" alt=""></span>
        <s>商家编号：<b v-html="merchants.shopNum"></b></s>
      </div>
      <div class="st-business-number st-address">
        <b><span><img src="../../assets/st-shop/icon-106.png" alt=""></span></b>
        <b style="padding-right: 70px">
          <s v-html="merchants.systemAddress+merchants.detailAddress"></s>
        </b>
        <b class="st-weizhi"><i><img src="../../assets/st-shop/icon-108.png" alt=""></i></b>
      </div>
      <div class="st-business-number">
        <span><img src="../../assets/st-shop/icon-107.png" alt=""></span>
        <s v-html="merchants.workday=='00'||merchants.businessHoursBegin=='00'||merchants.businessHoursEnd=='00:00'?'营业时间：24小时':'营业时间：'+merchants.workday+'：'+merchants.businessHoursBegin+'～'+merchants.businessHoursEnd"></s>
      </div>
      <div class="st-contact-business st-business-number">
        <a v-for="item in merchants.merchant" :href="item.telephone" v-html="item.message"></a>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name:"ShangJia",
    props:{
      merchants:Object
    }
  }
</script>
<style>
  /*business 商家*/
  .st-product-business{

  }
  .st-business-number{
    background: #ffffff;
    margin-top: 2px;
    padding: 10px 15px;
    color: #666666;
    webkit-box-align: center;
    -webkit-align-items: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    align-items: center;
  }
  .st-business-number span img{
    width: 100%;
  }
  .st-address{
    overflow: hidden;
    -webkit-align-items: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    align-items: center;
    position: relative;
  }
  .st-address b{
    display: table-cell;
  }
  .st-address b s{
    display: block;

    padding-right: 10px;
  }
  .st-business-number span{
    width: 14px;
    display: inline-block;
    margin-right: 10px;
    padding-top: 4px;
  }
  .st-address b:last-child{
    padding-left: 12px;
    padding-right: 4px;
    border-left: 1px solid #cccccc;
    position: absolute;
    right: 12px;
  }
  .st-contact-business{
    padding: 10px 16px;
  }
  .st-contact-business a:first-child{
    margin-left: 20px;
  }
  .st-contact-business a{
    padding: 4px 14px;
    border: 1px solid #cccccc;
    border-radius: 5px;
    text-decoration: none;
    color: #666666;
    display: inline-block;
    margin-left: 10px;
  }
  .st-weizhi i{
    display: block;
    width: 46px;
    height: 46px;
    border-radius: 46px;
  }
  .st-weizhi i img{
    width: 100%;
    display: block;
  }
</style>
