import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
layout:'AppLayoutHome'
    }
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      layout: 'AppLayoutAbout'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
