// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//路由规则
import VueRouter from 'vue-router'
import Routers from './router/router'
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',//history hash
  base: __dirname, //这个很重要
  routes: Routers
})
//轮播组件
import VueAwesomeSwiper from "vue-awesome-swiper"
Vue.use(VueAwesomeSwiper)

//图片懒加载
import VueLazyload from "vue-lazyload"
Vue.use(VueLazyload,{
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'dist/loading.gif',
  attempt: 1
})

//弹窗
import 'vue-layer-mobile/need/layer.css'
import layer from 'vue-layer'
Vue.prototype.$layer = layer(Vue);

//图片懒加载
// import Vuelazyload from 'vue-lazyload'
//
// Vue.use(Vuelazyload, {
//   loading: require('common/image/default.jpg')
// })

/* eslint-disable no-new */
var app = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
