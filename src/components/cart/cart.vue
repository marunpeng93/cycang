<template>
	<div id="cart">
		<div v-if="cartbol">
			<div class="headercommon">
				<a class="glyphicon glyphicon-share" href="#/"></a>
				<span>购物车</span>
				<a class="">编辑</a>
			</div>
			<div id="cartdata">
				<h3><span class="cart_select"></span><p>次元仓-发货</p></h3>
				<ul>
					<li>
						<span class="cart_select"></span>
						<div class="cart_list">
							<img src="../../assets/1487241529355.png"/>
							<div>
								<p class="cart_name">啊圣诞节啊实sadasda打实萨达上来打水晶</p>
								<p class="cart_style">撒；肯定；啊是肯定撒的撒打开撒打开撒旦撒 的撒大家看撒大家速度按时骄傲</p>
								<div class="cart_price"><u>45</u><p><img src="../../assets/cart-decrease.png"/><span>1</span><img src="../../assets/cart-increase.png"/></p></div>
							</div>
						</div>
					</li>
				</ul>
				<p class="cart_total">
					<span>小计：234</span>
					<a>满129.0包邮</a>
				</p>
				<p class="cart_roll">未使用优惠券<span>选择用券 </span></p>
			</div>
		</div>
		<cartnull v-else="cartbol"></cartnull>
	</div>
</template>

<script>
import Cartnull from './cartnull.vue'
import Cartgood from './cartgood.vue'
	export default {
		data (){
			return {
				cartbol:false,
			}
		},
		components:{
			'cartnull':Cartnull,
			'cartgood':Cartgood
		}
	}
</script>

<style lang="scss">
	@import './scss/cart.scss';
</style>