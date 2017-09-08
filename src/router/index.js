import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Proposal from '@/components/Proposal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/proposals',
      name: 'Proposal',
      component: Proposal
    }
  ]
})
