// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './common/scss/common.scss' 
import './common/scss/font.scss'
import './common/scss/swiper.scss'
import Swiper from '../static/swiper'
import App from './App'
import Resource from 'vue-resource'
import router from './router'
Vue.use(Resource)
/* eslint-disable no-new */
Vue.filter('sellsort',function(value,name){
	for(var i = 0;i < value.length;i++){
			if(value[i].name == name){
				return value[i].child
			}
	}
})
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
})
