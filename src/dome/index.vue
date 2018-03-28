<template>
  <div class="home">
    <homeheader
      :header="header"/>
    <slide
      :swiperslide="swiperslide"
      :swiperOption="swiperOption"/>
    <classification
      :stcomments="stcomments"
      :Fraction="Fraction"
      :classify="classify"
      :Advertisement="Advertisement"
      :numerous="numerous"
      :Single="Single"
      :Recommend="Recommend"
      :PersonalDeuce="PersonalDeuce"/>
  </div>
</template>
<script src="../../data/index.js"></script>
