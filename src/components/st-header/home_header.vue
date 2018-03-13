<template>
  <div class="home-header">
    <div class="home-address">
      <p>
        <span class="dingwei"><img src="../../assets/st-shop/icon-01.png" alt=""></span>
        <s class="address" v-html="header.address">江干区白杨街道111111111</s>
        <b class="slide"><img src="../../assets/st-shop/icon-02.png" alt=""></b>
        <a :href="header.newshref" class="asuccess"><img src="../../assets/st-shop/icon-03.png" alt=""></a>
      </p>
      <p><input @focus="Inputchange($event)" @blur="Inputblur($event)" type="text" placeholder="输入体验店,商品名称"><b class="home-position"><img src="../../assets/st-shop/icon-04.png" alt=""></b></p>
    </div>
  </div>
</template>
<script>
  export default {
    name:"homeheader",
    props:{
      header:Object
    },
    methods:{
      Inputchange:function (event) {
        $(event.target).css({textAlign:"left"})
        $(event.target).parent().find('b').css({left:"22px"})
      },
      Inputblur:function (event) {
        if($(event.target).val()!=''&&$(event.target).val()!=null){
          $(event.target).css({textAlign:"left"})
          $(event.target).parent().find('b').css({left:"22px"})
        }else {
          $(event.target).css({textAlign:"center"})
          $(event.target).parent().find('b').css({left:"31%"})
        }
      }
    }
  }
</script>
<style>
  .home-header{
    background: #19B955;
    padding: 5px 0;
    overflow: hidden;
  }
  .home-header p{
    padding: 5px 16px;
    margin: 0;
    overflow: hidden;
    webkit-box-align: center;
    -webkit-align-items: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    align-items: center;
    position: relative;
  }
  .home-header p .dingwei,.home-header p .address,.home-header p .slide{
    display: block;
    float: left;
    font-size: 1.2rem;
    color: #ffffff;
  }
  .home-header p .dingwei{
    width: 14px;
    margin-right: 5px;
    webkit-box-align: center;
    -webkit-align-items: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    align-items: center;
  }
  .home-header p img{
    width: 100%;
  }
  .home-header p .address{
    width: 130px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-right: 5px;
  }
  .home-header p .slide{
    width: 10px;
    webkit-box-align: center;
    -webkit-align-items: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    align-items: center;
  }
  .asuccess{
    width: 20px;
    float: right !important;
    webkit-box-align: center;
    -webkit-align-items: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    align-items: center;
    position: absolute;
    right: 16px;
  }
  .home-header p input{
    width: 100%;
    border: none;
    outline: medium;
    line-height: 2.4rem;
    padding: 0 5px;
    border-radius: 50px;
    font-size: 1.2rem;
    padding-left: 30px;
    text-align: center;
  }
  .home-position{
    position: absolute;
    display: block;
    width: 5%;
    max-width: 30px;
    /*left: 22px;*/
    left: 31%;
    webkit-box-align: center;
    -webkit-align-items: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    align-items: center;
  }
</style>
