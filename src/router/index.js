import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Store from '@/components/store'
import VuexTest from '@/components/vuexTest'
import VuexMap from '@/components/lastDay'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    // {
    //   path: '/',
    //   name: 'Store',
    //   component: Store
    // },
    // {
    //   path: '/',
    //   name: 'VuexTest',
    //   component: VuexTest
    // },
    {
      path: '/',
      name: 'VuexMap',
      component: VuexMap
    },
  ]
})
