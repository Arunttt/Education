import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '../Views/HomeView.vue'
import AboutView from '../Views/AboutView'
import ContactView from '../Views/ContactView'
import ApplyView from '../Views/ApplyView'
import HeaderView from '../Views/HeaderView'

import Home from '../components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
	{
	  path: '/about',
      name: 'about',
      component: AboutView
	 },
	 {
	  path: '/contact',
      name: 'contact',
      component: ContactView
	 },
	 {
	  path: '/apply',
      name: 'apply',
      component: ApplyView
	 },
	 {
	  path: '/header',
      name: 'header',
      component: HeaderView
	 },
	 
  ]
})
