// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import axios from 'axios'

Vue.use(VueMaterial)
Vue.use(axios)

Vue.config.productionTip = false

const API = 'https://cuddly-robot-api.herokuapp.com/v1/cost_proposals'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
