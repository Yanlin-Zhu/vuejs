import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login'
import registration from '@/components/registration'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/registration',
      name: 'registration',
      component: registration
    }
  ]
})
