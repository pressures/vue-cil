<template>
  <div class="st-product">
    <div class="st-product-evaluate product-checkout">
      <div class="st-evaluate">
        <div class="st-population-evaluate">
          <h1 v-html="parseFloat(generalnumber).toString()=='NaN'?0:generalnumber"></h1>
          <p>总体评价</p>
        </div>
        <div class="st-degree">
            <span v-for="item in degree">
              <b v-html="item.rated"></b>
              <s class="st-pingjia-huise"><img src="../../assets/st-shop/icon-110.png" alt="">
                <a :style="{width:item.width+'%'}"><i class="st-pingjia"><img src="../../assets/st-shop/icon-109.png" alt=""></i></a>
              </s>
              <em><s v-html="item.score"></s>分</em>
            </span>
          <!--<span><b>服务态度：</b><s><img src="../../assets/st-shop/icon-110.png" alt=""></s><em>4.7分</em></span>
          <span><b>配送时间：</b><s><img src="../../assets/st-shop/icon-109.png" alt=""></s><em>4.7分</em></span>-->
        </div>
      </div>
      <div class="st-evaluating-indicator">
        <a v-for="(item, $index) in whole"  :class="{'active':item.active,'unactive':!item.active}" v-html="item.praise" @click="selectStyle(item, $index)"></a>
      </div>
      <div class="pingjia-st-evaluation-score" v-for="item in stcomments">
        <table>
          <tr>
            <td class="st-evaluating-portrait" rowspan="6"><span><img v-lazy="item.headPortrait" alt=""></span></td>
            <td><h3 v-html="item.username"></h3></td>
            <td style="text-align:right;color:#666666"><span v-html="item.addTime"></span></td>
          </tr>
          <tr>
            <td colspan="2">
                <span class="st-xingji">
                  <s class="st-pingjia-huise huise"><img src="../../assets/st-shop/icon-110.png" alt="">
                    <a :style="{'width':PersonalDeuce(item.evaAttitude,item.evaDescription,item.evaQuality)+'%'}"><i class="st-pingjia pingjia"><img src="../../assets/st-shop/icon-109.png" alt=""></i></a>
                  </s>
                </span>
            </td>
          </tr>
          <tr v-if="item.detail!='(null)'">
            <td colspan="2" v-html="item.detail"></td>
          </tr>
          <tr>
            <td colspan="2">
              <span class="st-shaitu" v-for="imges in item.picture"><img v-lazy="imges.img" alt=""></span>
            </td>
          </tr>
          <tr v-if="item.img!=undefined&&item.img!=null">
            <td class="st-dizhi" colspan="2">
              <i v-if="item.img!=undefined&&item.img!=null"><img v-lazy="item.img" alt=""></i>
              <span style="color: #666666" v-html="item.address"></span>
            </td>
          </tr>
          <tr v-if="item.content">
            <td class="st-seller" colspan="2">
              <a href="#"><span>卖家评论:</span><s v-html="item.content"></s><b><i></i></b></a>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  export default {
    name:"StEvaluate",
    props:{
      generalnumber:String,
      general:String,
      degree:Array,
      whole:Array,
      stcomments:Array,
      PersonalDeuce:Function
    },
    methods: {
      selectStyle(item, index) {
        this.$nextTick(function () {
          this.whole.forEach(function (item) {
            Vue.set(item, 'active', false);
          });
          Vue.set(item, 'active', true);
        });
      },
    }
  }
</script>
<style>
  /*evaluate 评价*/
  .st-evaluate{
    background: #ffffff;
    overflow: hidden;
    -webkit-align-items: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    align-items: center;
    padding: 20px 0;
    margin-top: 1px;
    color: #666666;
  }
  h1{
    font-weight: inherit
  }
  .st-evaluate h1{
    color: #FF9A32;
    padding: 0;
    margin: 0;
  }
  .st-evaluate p{
    margin: 0;
    padding: 0;
  }
  .st-evaluate .st-population-evaluate,.st-evaluate .st-degree{
    float: left;
  }
  .st-evaluate .st-population-evaluate{
    width: 30%;
    border-right: 1px solid #cccccc;
    text-align: center;
  }
  .st-degree{
    width: 58%;
    padding: 0 6%;
  }
  .st-degree span{
    display: block;
    overflow: hidden;
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
    float: left;
  }
  .st-degree span em{
    display:flex;
    justify-content:space-between;
    text-overflow: ellipsis;
    white-space: nowrap;
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
    width: 100%;
    display: inline-block;
  }
  .st-xingji s{
    position: relative;
    overflow: hidden;
    display: inline-block;
    width: 30%;
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
  @media screen and (min-width:720px){
    .st-degree span s i,.st-degree span s img{
      width: 100%;
    }
  }
  @media screen and (max-width:720px){
    .st-degree span s{
      width: 50%;
      margin-left: 2%;
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
    vertical-align: top;
  }
  .st-evaluating-portrait span{
    display: block;
    width: 60px;
    height: 60px;
    border-radius: 60px;
    overflow: hidden;
    background: #cccccc;
  }
  .st-evaluating-portrait span img{
    width: 100%;
  }
  .pingjia-st-evaluation-score{
    background: #ffffff;
    margin-top: 5px;
    overflow: hidden;
    padding: 16px;
  }

  h3{
    font-weight: inherit;
    margin: 0;
    padding: 0;
  }
  .pingjia-st-evaluation-score table{
    width: 100%;
  }
  .st-shaitu{
    width: 29%;
    float: left;
    margin-right: 2%;
  }
  .st-shaitu img{
    width: 100%;
  }
  .st-dizhi{
    webkit-box-align: center;
    -webkit-align-items: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    align-items: center;
  }
  .st-dizhi i{
    width: 16px;
    height: 16px;
    display: inline-block;
    margin-right: 10px;
  }
  .st-dizhi i img{
    width: 100%;
  }
  .st-seller a{
    display: inline-block;
    color: #666666;
    background: #eeeeee;
    padding: 8px;
    border-radius: 5px;
    position: relative;
  }
  .st-seller a b{
    width: 0;
    height: 0;
    border-width:0 6px 6px;
    border-style: solid;
    border-color:  transparent transparent #eee;
    position: absolute;
    top: -5px;
    left: 15px;
    z-index: 100;
  }
</style>
