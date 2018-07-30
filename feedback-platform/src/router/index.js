import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import functi from '@/components/functi'
import login from '@/components/login'
import registration from '@/components/registration'
import home from '@/components/home'
import listpage from '@/components/listpage'
import image from '@/components/image'
import image1 from '@/components/image1'
import image2 from '@/components/image2'
import detail from '@/components/detail'
import management from '@/components/management'

Vue.use(Router)

export default new Router({
  // mode:'history',
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/functi',
      name: 'functi',
      component: functi
    },
    {
      path: '/functi/:id',
      name: 'modefy',
      component: functi
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
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/listpage',
      name: 'listpage',
      component: listpage
    },
    {
      path: '/image',
      name: 'image',
      component: image,
      children: [
        {
          path: 'image1',
          component: image1
        },
        {
          path: 'image2',
          component: image2
        }
      ]
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: detail
    },
    {
      path: '/management',
      name: 'management',
      component: management
    }
  ]
})
