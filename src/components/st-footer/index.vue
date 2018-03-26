<template>
  <div class="st-footer">
    <ul>
      <li v-for="(item,index) in classification">
        <a class="st-footer-a" v-html="item.shopnew" @click="Navigation($event,index)"></a><i :class="{'display-block':item.show,'display-none':!item.show}"></i>
        <p>
          <router-link v-for="items in item.subclass" :to="''+items.href" @click.native="This_Navigation($event)" :data_id="items.id" v-html="items.name"></router-link>
        </p>
        <b><s></s></b>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name:"StFooter",
    props:{
      classification:Array,
      This_Navigation:Function,
      Navigation:Function,
      Bottomclass:Function
    }
  }
</script>
<style>
  .st-footer{
    position: fixed;
    bottom: 0;
    left: 0;
    background: #ffffff;
    width: 100%;
    z-index: 1000;
  }
  .st-footer ul{
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .st-footer ul li{
    float: left;
    width: 33.3333333333333333333333%;
    text-align: center;
    position: relative;
    padding: 10px 0;
    cursor: pointer;
    z-index: 1000;
  }
  .st-footer ul li .st-footer-a{
    font-size: 1.2rem !important;
    text-decoration: none;
    color: #333333;
    display: block;border-right: 1px solid #c5c5c5;
    cursor: pointer;
    line-height: 2.2rem;
  }
  .st-footer ul li:last-child .st-footer-a{
    border-right: 0;
  }
  .st-footer ul li i{
    display: block;
    width: 24px;
    height: 2px;
    border-bottom: 1px solid #999999;
    border-top: 1px solid #999999;
    position: absolute;
    top: 3px;
    left: 50%;
    margin-left: -12px;
  }
  .st-footer ul li p{
    position: absolute;
    bottom: 56px;
    left: 50%;
    margin: 0;
    margin-left: -50px;
    background: #ffffff;
    overflow: hidden;
    padding: 0 10px;
    width: 80px;
    border-radius: 5px;
    border: 1px solid #cccccc;
    z-index: 2000;
    display: none;
  }
  .st-footer ul li p a{
    display: block;
    text-decoration: none;
    color: #333333;
    padding: 5px 0;
    border-bottom: 1px dashed #666666;
  }
  .st-footer ul li b{
    width:0;
    height:0;
    border-width:6px 6px 0;
    border-style:solid;
    border-color:#ccc transparent transparent;/*灰 透明 透明 */
    position:absolute;
    top: -11px;
    left: 50%;
    margin-left: -5px;
    z-index: 2500;
    display: none;
  }
  .st-footer ul li s{
    display:block;
    width:0;
    height:0;
    border-width:8px 8px 0;
    border-style:solid;
    border-color:#ffffff transparent transparent ;/*黄 透明 透明 */
    position:absolute;
    top:-9px;
    left:-8px;
  }
  .st-footer ul li p a:last-child{
    border: none;
  }
</style>
