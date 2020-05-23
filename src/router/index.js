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
        component: () => import('../views/Admin'),
        meta: { login_require: true }
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
        component: () => import('../views/From'),
        meta: { login_require: true, title: 'from表单' }
      }
    ]
  },
  {
    path: '/Data',
    name: 'Data',
    component: Home,
    redirect: '/Data/Tree',
    meta: { title: '数据' },
    children: [
      {
        path: 'Table',
        name: 'Table',
        component: () => import('../views/Table'),
        meta: { login_require: true, title: 'table表格' }
      },
      {
        path: 'Tree',
        name: 'Tree',
        component: () => import('../views/Tree'),
        meta: { login_require: true, title: 'tree树形控件' }
      }
    ]
  },
  {
    path: '/error',
    component: Home,
    children: [
      {
        path: '404',
        component: () => import('../views/404'),
        meta: { login_require: true, title: '404' }
      }
    ]
  },
  {
    path: '/Icon',
    component: Home,
    children: [
      {
        path: 'index',
        component: () => import('../views/Icon'),
        meta: { login_require: true, title: 'icon图标' }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

const router = new VueRouter({
  routes
})

router.beforeEach(function (to, from, next) {
  // console.log(to.matched)
  if (to.meta.login_require) {
    if (sessionStorage.getItem('loginusername')) {
      next()
    } else {
      next('/Login')
    }
  } else {
    next()
  }
})
export default router
