import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import Home from 'components/home/Home'
import Classify from 'components/classify/classify'
import Cart from 'components/cart/cart'
import Percenter from 'components/percenter/percenter'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
    	path: '/classify',
      name: 'Classify',
      component: Classify
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/percenter',
      name: 'Percenter',
      component: Percenter
    }
  ]
})
