// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
//轮播组件
import VueAwesomeSwiper from "vue-awesome-swiper"
Vue.use(VueAwesomeSwiper)
//图片懒加载
import VueLazyload from "vue-lazyload"
Vue.use(VueLazyload, {
  preLoad: 1,
  error: require('./assets/st-shop/loading.gif'),
  loading: require('./assets/st-shop/loading.gif'),
  attempt: 2
})

//弹窗
import 'vue-layer-mobile/need/layer.css'
import layer from 'vue-layer'
Vue.prototype.$layer = layer(Vue);

/* eslint-disable no-new */
var app = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
//console.log(app)
