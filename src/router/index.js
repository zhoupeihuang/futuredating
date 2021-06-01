import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../views/home.vue'

const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
    redirect: "/index"
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('../views/index.vue')
  },
  {
    path: '/signIn',
    name: 'signIn',
    component: () => import('../views/signIn.vue')
  },
  {
    path: '/vip', /*升级*/
    name: 'vip',
    component: () => import('../views/vip.vue')
  },
  {
    path: '/store',
    name: 'store',
    component: () => import('../views/store.vue')
  },
  {
    path: '/joinUs',
    name: 'joinUs',
    component: () => import('../views/joinUs.vue')
  },
  {
    path: '/setings',
    name: 'setings',
    component: () => import('../views/setings.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router