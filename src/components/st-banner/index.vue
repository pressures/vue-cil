<template>
  <div class="back">
    <swiper :options="swiperOption" ref="mySwiper" class="home-banner">
      <!-- slides -->
      <swiper-slide v-for="item in swiperslide"><a :href="item.href+item.name" style="display: inline-block"><img :src="item.img" alt=""></a></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    name:"Slide",
    components: {
      swiper,
      swiperSlide
    },
    props:{
      swiperOption:Object,
      swiperslide:Array
    }
  }
</script>
<style>
  .swiper-wrapper img{width: 100%}
</style>
<style>
  .home-banner{
    margin: 0 6px !important;
    border-radius: 6px;
    overflow: hidden !important;
  }
  .back{
    background: #fff;
    padding: 6px 0;
  }
  .swiper-slide{
    float: left;
  }

</style>
