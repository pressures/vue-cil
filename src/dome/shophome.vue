<template>
  <div id="app">
    <st-header
      :Json_Data="Json_Data"
      :Isdata="Isdata"
      :naver="naver"
      :seach="seach"
      :StFollows="StFollows"
      :selectStyle="selectStyle"
      :DetailsClisk="DetailsClisk"
      :Return="Return"
    />
    <router-view></router-view>
    <st-footer
      :Navigation="Navigation"
      :This_Navigation="This_Navigation"
      :classification="classification"/>
    <layer :DetailsCliskclose="DetailsCliskclose"/>
  </div>
</template>
<script src="../../data/shop.js"></script>

<style>
  @media screen and (min-width:320px) and (max-width:375px){html{font-size:11px}}
  @media screen and (min-width:376px) and (max-width:414px){html{font-size:12px}}
  @media screen and (min-width:415px) and (max-width:639px){html{font-size:15px}}
  @media screen and (min-width:640px) and (max-width:719px){html{font-size:20px}}
  @media screen and (min-width:720px) and (max-width:749px){html{font-size:22.5px}}
  @media screen and (min-width:750px) and (max-width:799px){html{font-size:23.5px}}
  @media screen and (min-width:800px){html{font-size:25px}}
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    background: #EEEEEE;
  }
  a,s{text-decoration: none}
  b{font-weight: inherit}
  em{font-style: inherit}
  .display-none{
    display: none !important;
  }
  .display-block{
    display: block !important;
  }
  .st-product{
    padding-bottom: 45px;
  }
</style>
