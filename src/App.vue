<template>
  <div id="app">
      <my-header></my-header>

	<router-view />
	<my-footer></my-footer>
<!--	
	  <boot />
  
   <about />
   <contact />
-->   
  </div>
</template>

<script>

import boot from './components/boot.vue';
import about from './components/about.vue';
import contact from './components/contact.vue';
import header from './components/Header';
import footer from './components/Footer'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { RouterLink, RouterView } from 'vue-router'

export default {
  name: 'App',
  components:{
  
  contact,
  boot,
  about,
//testi  
 },
 mounted(){

}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
