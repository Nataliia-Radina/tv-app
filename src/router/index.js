import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    name: 'Show',
    path: '/show/:id',
    props: true,
    component: () => import(/* webpackChunkName: "showDetails" */ '@/views/ShowDetails.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: /tv-app/,
  routes
})

export default router
