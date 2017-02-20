import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/home/Home'
import Classify from 'components/classify/classify'
import Cart from 'components/cart/cart'
import Percenter from 'components/percenter/percenter'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
    	path: '/classify',
      component: Classify
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/percenter',
      component: Percenter
    }
  ]
})
