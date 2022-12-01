// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import header from './components/Header'
import footer from './components/Footer'
import router from './router'
import {BootstrapVue} from 'bootstrap-vue'
Vue.config.productionTip = false

Vue.component('myHeader', header)
Vue.use(BootstrapVue)
Vue.component('myFooter', footer)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
