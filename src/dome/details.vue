<template>
  <div class="default-details">
    <details-header
      :Collection="Collection"
      :Return="Return"
      :DetailsCliskHeader="DetailsCliskHeader"/>
    <particulars
      :product="product"
      :swiperOption="swiperOption"
      :pingjia="pingjia"
      :pjlength="pjlength"
      :Specifications="Specifications"
      :productDetailImgsList="productDetailImgsList"
      :list="list"
      :productDescription="productDescription"
      :productSkuList="productSkuList"/>
    <details-footer
      :DetailsClisk="DetailsClisk"
      :shophref="shophref"
      :product="product"
      :kefuhref="kefuhref"
      :Specifications="Specifications"/>
    <popup
      :product="product"
      :SkuList="SkuList"
      :Increase="Increase"
      :Reduce="Reduce"
      :Purchase="Purchase"
      :counter="counter"
      :Stock="Stock"
      :selectStyle="selectStyle"
      :reversedMessage="reversedMessage"
      :ShoppingCart="ShoppingCart"
      :popupfadeout="popupfadeout"/>
    <layer :DetailsCliskclose="DetailsCliskclose"/>
  </div>
</template>
<style>
  .default-details{
    overflow: hidden;
  }
</style>
<script src="../../data/details.js"></script>
