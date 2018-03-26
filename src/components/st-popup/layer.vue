<template>
  <div id="layerdetails" class="layui-m-layer layui-m-layer1">
    <div @click="DetailsCliskclose($event)" class="layui-m-layershade"></div>
    <div class="layui-m-layermain">
      <div class="layui-m-layersection">
        <div class="layui-m-layerchild layui-m-anim-up">
          <div class="layui-m-layercont">
            <div class="sharebox">
              <p>
                <a href="https://chat.yggx.com/index.php/product/quweixin"><i></i><b>微信</b></a>
                <a href="https://chat.yggx.com/index.php/product/qupengyouquan"><i></i><b>朋友圈</b></a>
                <a href="https://chat.yggx.com/index.php/product/quqq"><i></i><b>QQ</b></a>
                <a href="https://chat.yggx.com/index.php/product/qukongjian"><i></i><b>空间</b></a>
                <a href="https://chat.yggx.com/index.php/product/quweibo"><i></i><b>微博</b></a>
              </p>
              <p>
                <a href="https://chat.yggx.com/index.php/product/qushejiaoquan"><i></i><b>社交圈</b></a>
                <a href="https://chat.yggx.com/index.php/product/qupengyou"><i></i><b>朋友</b></a>
                <a href="https://chat.yggx.com/index.php/product/fuzhilianjie"><i></i><b>复制链接</b></a>
              </p>
            </div>
          </div>
          <div class="layui-m-layerbtn"><span @click="DetailsCliskclose($event)" type="1">取消</span></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name:'layer',
    props:{
      DetailsCliskclose:Function
    }
  }
</script>
<style>
  .layui-m-layer{
    display: none;
  }
  /*分享弹框样式*/
  .sharebox{padding-bottom:10px; float: left;}
  .sharebox a{display: inline-block;width: 20%; float: left; }
  .sharebox a i{width:5rem; height:70px; display:block; background-size:80% !important; background-position:5px 10px !important; }
  .sharebox p{ box-sizing: border-box; padding:0 20px; float: left; width: 100%;}
  .sharebox p:nth-child(1) a:nth-child(1) i{background:url(../../../src/assets/st-shop/share_weixin.png) no-repeat; }
  .sharebox p:nth-child(1) a:nth-child(2) i{background:url(../../../src/assets/st-shop/share_pyq.png) no-repeat; }
  .sharebox p:nth-child(1) a:nth-child(3) i{background:url(../../../src/assets/st-shop/share_qq.png) no-repeat; }
  .sharebox p:nth-child(1) a:nth-child(4) i{background:url(../../../src/assets/st-shop/share_qqkj.png) no-repeat; }
  .sharebox p:nth-child(1) a:nth-child(5) i{background:url(../../../src/assets/st-shop/share_weibo.png) no-repeat; }
  .sharebox p:nth-child(2) a:nth-child(1) i{background:url(../../../src/assets/st-shop/share_ygstshq.png) no-repeat; }
  .sharebox p:nth-child(2) a:nth-child(2) i{background:url(../../../src/assets/st-shop/share_ygstpy.png) no-repeat; }
  .sharebox p:nth-child(2) a:nth-child(3) i{background:url(../../../src/assets/st-shop/share_ygstlink.png) no-repeat; }
  .default{width:100%!important; line-height: 4.5rem; height:4.5rem; text-align: center; float: left; margin-top:20px; border-top:1px solid #ddd; font-size: 1.5rem; color:#333;}
  .sharebox a b{width:5rem; float: left;font-weight: normal; font-size:1.2rem; text-align: center; color:#333;}
  .layui-m-layerbtn span[yes]{color:#333!important; font-size:1.5rem;}
  .layui-m-layerbtn{background: #fff!important;}
  .sharebox{background: #fff;}
  .layui-m-layermain .layui-m-layersection{
    vertical-align: bottom !important;
  }
  .layui-m-layerchild{
    display: block !important;
  }
  .sharebox p{
    margin: 0;
  }
</style>
