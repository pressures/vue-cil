import Index from '../dome/index.vue'
import Shophome from '../dome/shophome.vue'
import Home from '../dome/home.vue'
import Pingjia from '../dome/pingjia.vue'
import ShangJia from '../dome/shangjia.vue'
import Details from '../dome/details.vue'
export default [
  {path: '/node',name:Index, component: Index},
  {
    path: '/node/shop',
    name:Shophome,
    component: Shophome,
    children:[  //二级路由
      {path: '/node/shop/home',name:Home,component: Home},
      {path: '/node/shop/pingjia',name:Pingjia,component: Pingjia},
      {path: '/node/shop/shangjia',name:ShangJia, component: ShangJia}
    ]
  },
  {path: '/node/details',name:Details, component: Details}
]
