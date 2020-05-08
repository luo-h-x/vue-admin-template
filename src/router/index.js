import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../views/Login')
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/Admin',
    children: [
      {
        path: '/Admin',
        name: 'Admin',
        component: () => import('../views/Admin')
      }
    ]
  },
  {
    path: '/404',
    name: '404',
    component: () => import('../views/404')
  },
  {
    path: '/from',
    component: Home,
    children: [
      {
        path: '/From',
        component: () => import('../views/From')
      }
    ]
  },
  {
    path: '/Data',
    name: 'Data',
    component: Home,
    redirect: '/Data/Tree',
    children: [
      {
        path: 'Table',
        name: 'Table',
        component: () => import('../views/Table')
      },
      {
        path: 'Tree',
        name: 'Tree',
        component: () => import('../views/Tree')
      }
    ]
  },
  {
    path: '/error',
    component: Home,
    children: [
      {
        path: '404',
        name: '404',
        component: () => import('../views/404')
      }
    ]
  },
  {
    path: '/Icon',
    component: Home,
    children: [
      {
        path: 'index',
        component: () => import('../views/Icon')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
