<template>
  <div class="home-classification">
    <ul>
      <li>
        <a v-for="item in classify" :href="item.linkhref"><img :src="item.img" alt=""><span v-html="item.name"></span></a>
      </li>
    </ul>
    <!--海报位置-->
    <div class="poster"><a :href="Advertisement.href"><img :src="Advertisement.img" alt=""></a></div>
    <!--热卖单品-->
    <div class="numerous">
      <p><s></s><b v-html="numerous"></b></p>
    </div>
    <div class="advertisement">
      <ul>
        <li>
          <a v-for="item in Single" :href="item.href"><img :src="item.img" alt=""></a>
        </li>
      </ul>
    </div>
    <!---->
    <div class="numerous">
      <p><s></s><b v-html="Recommend"></b></p>
    </div>
    <div class="st-evaluation-score" v-for="item in stcomments">
      <a :href="item.href">
        <table>
          <tr>
            <td class="st-evaluating-portrait" rowspan="4"><span><img v-bind:src="item.signageUrl" alt=""></span></td>
            <td><big v-html="item.name"></big></td>
            <td style="text-align:right;color:#666666"><s class="yinye">营</s></td>
          </tr>
          <tr>
            <td class="state"><span>在售 <em v-html="item.onlineSaleNum"></em></span><s>收藏<em v-html="item.collectNum"></em></s></td>
          </tr>
          <tr>
            <td>
              <span class="st-xingji">
                <s class="st-pingjia-huise huise"><img src="../../assets/st-shop/icon-110.png" alt="">
                  <a :style="{'width':PersonalDeuce(item.evaluateGoodNum,item.evaluateNum)+'%'}"><i class="st-pingjia pingjia"><img src="../../assets/st-shop/icon-109.png" alt=""></i></a>
                </s>
                <b v-html="Fraction(item.evaluateGoodNum,item.evaluateNum)"></b>
              </span>
            </td>
            <td width="28%">
              <span class="time-distance">
                <s><em v-html="item.distance"></em></s>
                <b v-html="item.time"></b>
              </span>
            </td>
          </tr>
          <tr>
            <td colspan="2" class="notice">
              <p>
                <s><img src="../../assets/st-shop/icon-21.png" alt=""></s>
                <span v-html="item.announcement"></span>
              </p>
            </td>
          </tr>
        </table>
      </a>
    </div>
  </div>
</template>
<script>
  export default {
    name:"classification",
    props:{
      stcomments:Array,
      PersonalDeuce:Function,
      classify:Array,
      Advertisement:Object,
      numerous:String,
      Single:Array,
      Recommend:String,
      Fraction:Function
    }
  }
</script>
<style>
  .home-classification ul{
    margin: 0;
    padding: 0;
    background: #fff;
  }
  .home-classification ul li{
    list-style: none;
    width: 100%;
    overflow: hidden;
  }
  .home-classification ul li a{
    width: 16%;
    margin: 2%;
    display: block;
    float: left;
    margin-bottom: 0;
  }
  .home-classification ul li a img{
    width: 100%;
    display: block;
  }
  .home-classification ul li a span{
    display: block;
    text-align: center;
    color: #333;
    margin-top: 5px;
  }
  .poster{
    width: 100%;
    padding: 5px 0;
    background: #fff;
  }
  .poster a{
    display: block;
  }
  .poster img{
    width: 100%;
    display: block;
  }
  .numerous{
    padding: 10px 10px;
    margin-top: 10px;
    background: #fff;
  }
  .numerous p{
    margin: 0;
    padding: 0;
    overflow: hidden;
    webkit-box-align: center;
    -webkit-align-items: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    align-items: center;
  }
  .numerous p s{
    width: .5vw;
    background: #19B955;
    height: 1.4em;
    display: block;
    float: left;
  }
  .numerous p b{
    display: block;
    padding-left: 6px;
    font-size: 1.3rem;
    float: left;
  }
  .advertisement ul{
    padding: 0;
    margin: 0;
    width: 100%;
    padding-bottom: 6px;
  }
  .advertisement ul li{
    list-style: none;
    overflow: hidden;
    margin-top: 1px;
  }
  .advertisement ul li a{
    display: block;
    float: left;
    width: 46%;
  }
  .advertisement ul li a img{
    width: 100%;
  }
  .st-degree{
    width: 50%;
    padding: 0 10%;
  }
  .st-degree span{
    display: block;
  }
  .st-degree span{
    padding: 2px 0;
    width: 100%;
    webkit-box-align: center;
    -webkit-align-items: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    align-items: center;
  }

  .st-degree span b,.st-degree span s,.st-degree span em{
    display: inline-table;
  }
  .st-degree span b{
  }
  .st-degree span s{
    position: relative;
    webkit-box-align: center;
    -webkit-align-items: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    align-items: center;
  }
  .st-degree span s a{
    width: 100%;
    height: 100%;
    display: inline-block;
    position: absolute;
    left: 0;
    top: 0;
    overflow: hidden;
  }
  .st-degree span s i{
    width: 100%;
    height: 100%;
    display: inline-block;
    position: absolute;
    left: 0;
    top: 0;
  }
  .st-degree span s i img{
    display: block;
  }
  .st-xingji{
    display: inline-block;
    webkit-box-align: center;
    -webkit-align-items: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    align-items: center;
  }
  .st-xingji s{
    position: relative;
    overflow: hidden;
    display: inline-block;
    width: 45%;
    max-width: 152px;
  }
  .st-xingji s img{
    display: inline-block;
  }
  .st-xingji s a{
    position: absolute;
    left: 0;
    top:0;
    overflow: hidden;
    height: 100%;
  }
  .st-xingji s a i{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 20;
  }
  .st-xingji b{
    margin-left: 10px;
    color: #999;
  }
  @media screen and (min-width:720px){
    .st-degree span s i,.st-degree span s img{
      width: 100%;
    }

  }
  @media screen and (max-width:720px){
    .st-degree span s{
      width: 60%;
      margin-left: 10px;
    }
    .st-degree span s img,.st-xingji .st-pingjia-huise img{
      width: 100%;
    }
  }
  .st-degree span em{
    margin-left: 5%;
    color: #FF9A32;
  }
  .st-evaluating-indicator{
    background: #ffffff;
    padding: 16px;
    margin-top: 5px;
  }
  .st-evaluating-indicator a{
    display: inline-block;
    text-decoration: none;
    color: #666666;
    padding: 5px 10px;
    border: 1px solid #cccccc;
    border-radius: 5px;
    margin-right: 5px;
  }
  .st-evaluating-indicator .active{
    border: 1px solid #23AC38;
    color: #33be63;
    background: #EFFFF5;
  }
  .st-evaluating-portrait{
    width: 60px;
  }
  .st-evaluating-portrait span{
    display: block;
    width: 80px;
    height: 80px;
    overflow: hidden;
    background: #cccccc;
    margin-right: 10px;
  }
  .st-evaluating-portrait span img{
    width: 100%;
  }
  .st-evaluation-score{
    background: #ffffff;
    margin-top: 5px;
    overflow: hidden;
    padding: 10px;
  }
  .st-evaluation-score table{
    width: 100%;
  }
  .yinye{
    display: block;
    float: right;
    padding: 0 5px;
    background: #23AC38;
    color: #fff;
    text-align: center;
  }
  .state span,.state s{
    color: #777;
    font-size: .6rem;
  }
  .state s{
    margin-left: 10px;
  }
  .time-distance{
    display: block;
    float: right;
    color: #999;
  }
  .time-distance b,.time-distance s{
    display: inline-block;
  }
  .time-distance b::before{
    content: '|';
    margin-right: 4px;
  }
  .notice s{
    display: inline-block;
    width: 6%;
    min-width: 15px;
    max-width: 18px;
  }
  .notice s img{
    width: 100%;
    display: block;
  }
  .notice p{
    margin: 0;
    padding: 0;
    webkit-box-align: center;
    -webkit-align-items: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    align-items: center;
    width: 100%;
  }
  .notice p span{
    display: inline-block;
    font-size: .8rem;
    color: #666;
    margin-left: 10px;
  }
  big{
    width: 160px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
    color: #333;
  }
</style>
