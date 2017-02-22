<template>
  <div>
    <router-view></router-view>
    <footer style="clear: both;">
    	<a href="#/" v-on:click = 'num = 0' v-bind:class="{active:num==0}" class="fl"><span class="glyphicon glyphicon-home"></span>首页</a>
    	<a href="#/classify" v-on:click = 'num = 1' v-bind:class="{active:num==1}" class="fl"><span class="glyphicon glyphicon-list"></span>分类</a>
    	<a href="#/cart" v-on:click = 'num = 2' v-bind:class="{active:num==2}" class="fl"><span class="glyphicon glyphicon-shopping-cart"></span>购物车</a>
    	<a href="#/percenter" v-on:click = 'num = 3' v-bind:class="{active:num==3}" class="fl"><span class='glyphicon glyphicon-user'></span>个人中心</a>
    </footer>
    <cartgood v-if='cartgood'></cartgood>
  </div>
</template>

<script>
import Cartgood from './components/cart/cartgood.vue'
	export default {
		data:function(){
			return{
				num:0,
			}
		},
		computed:{
			cartgood:function(){
				return this.$store.state.cartgood
			}
		},
		components:{
			'cartgood':Cartgood
		}
		
	}
</script>

<style lang="scss">
	@import './common/scss/variable.scss' ;
	footer {
		position: fixed;
		z-index: 301;
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 100%;
		height: 50px;
		bottom: 0;
		font-size: 0.5rem;
		background: #eee;
		a{
			display:block ;
			width: 25%;
			text-align: center;
		}
		span{
			font-size: 20px;
			margin-bottom: 3px;
			display:block !important;
		}
		.active{
			color:$red;
		}
	}
</style>
