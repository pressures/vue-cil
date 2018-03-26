import Vue from 'vue'
import Router from 'vue-router'
import routes from './router.js'

Vue.use(Router)

export default new Router({
  //mode: 'history', //去掉#
  routes:routes
})
