import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import baidu from '../views/baidu.vue'
import test from '../views/test.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'baidu',
    component: baidu
  },
  {
    path: '/',
    name: 'test',
    component: test
  },

  // {
  //   path:'/',
  //   name:'baidu',
  //   component: baidu
  // },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
