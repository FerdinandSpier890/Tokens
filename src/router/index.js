import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

import Login from '../views/LoginView.vue'
import Register from '../views/RegisterView.vue'
import List from '../views/UsuariosView.vue'
import Busqueda from '../views/BusquedaView.vue'

import Cookies from 'js-cookie'
// import auth from '@/logic/auth.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },
  {
    path: '/login',
    component: Login,
    name: 'login'
  },
  {
    path: '/register',
    component: Register,
    name: 'register'
  },
  {
    path: '/list',
    component: List,
    name: 'list'
  },
  {
    path: '/busqueda',
    component: Busqueda,
    name: 'busqueda',
    meta: { requireAuth: true }
  }
]
const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  const protectedRoute = to.matched.some(record => record.meta.requireAuth)
  if (protectedRoute && { headers: { Authorization: 'Bearer ' + Cookies.get('token') } } === null) {
    next({ name: 'home' })
  } else {
    next()
  }
})

export default router
