// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import './common/scss/common.scss' 
import './common/scss/font.scss'
import './common/scss/swiper.scss'
import Swiper from '../static/swiper'
import App from './App'
import Resource from 'vue-resource'
import store from '../static/store.js'
import imgsrc from '../static/img.js'
import router from './router'
Vue.use(Resource)
Vue.use(Vuex)
/* eslint-disable no-new */
window.imgsrc = imgsrc.imgsrc
window.srcload = function(data){
	var that = data;
	if(that.src != that.getAttribute('data')){
		console.log('a')
		that.src = window.imgsrc
		console.log(that.src)
	}
var img = new Image();
img.src = that.getAttribute('data')
	img.onload = function(){
		that.src = this.src
	}
}
var vue = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
})

