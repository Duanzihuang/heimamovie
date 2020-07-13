// tslint:disable
// import { RouteConfig, createRouter, createWebHistory } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

// const routes: Array<RouteConfig> = [
const routes: Array<any> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Index', // name不能为Home，否则路由不起作用
    component: Home
  },
  {
    path: '/list/:type',
    name: 'List',
    component: () => import('@/views/List.vue')
  },
  {
    path: '/detail/:id',
    name: 'Home',
    component: () => import('@/views/Detail.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
