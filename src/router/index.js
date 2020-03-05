import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home'),
    children:[
      //商品g
      { path: '/goods',
      name: 'Goods',
      component: () => import('../views/components/Goods.vue')},
      { path: '/business',
      name: 'Business',
      //商家
      component: () => import('../views/components/Business.vue')},
      //评价
      { path: '/assess',
      name: 'Assess',
      component: () => import('../views/components/Assess.vue')},
      
    ],redirect:'/goods'
  }

]

const router = new VueRouter({
  routes
})

export default router
