import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cookies from 'js-cookie'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path : '/Login',
    name : 'Login',
    component : () => import('../views/Login.vue')
  },
]

const router = new VueRouter({
  routes
})

router.beforeEach((to,from,next) =>{
  var isLogin = Cookies.get('isLogin')
  if(!isLogin&&(to.path !== '/Login')){
    return next({ path : '/Login'})
  }
  next()
})

export default router
