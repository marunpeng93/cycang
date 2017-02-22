<template>
	<div id="cart">
		<div v-if="data.length">
			<div class="headercommon">
				<a class="glyphicon glyphicon-share" href="#/"></a>
				<span>购物车</span>
				<a class="">编辑</a>
			</div>
			<div id="cartdata">
				<h3><span class="cart_select " v-bind:class='{active:quanxuan}' v-on:click='quanxuanclick()'></span><p>次元仓-发货</p></h3>
				<ul>
					<li v-for = 'obj in data'>
						<span class="cart_select" v-bind:class='{active:obj.bol}' v-on:click="xuanze(obj)"></span>
						<div class="cart_list">
							<img :src="obj.figure"/>
							<div>
								<p class="cart_name">{{obj.name}}</p>
								<p class="cart_style">{{obj.brief}}</p>
								<div class="cart_price"><u>￥{{obj.cover_price}}</u>
									<p>
										<img src="../../assets/cart-decrease.png" v-on:click='conctjian(obj)' />
										<span>{{obj.conct}}</span>
										<img src="../../assets/cart-increase.png" v-on:click='conctja(obj)'/>
									</p>
								</div>
							</div>
						</div>
					</li>
				</ul>
				<p class="cart_total">
					<span>小计：￥{{close}}</span>
					<a>满129.0包邮</a>
				</p>
				<p class="cart_roll">未使用优惠券<span>选择用券 </span></p>
			</div>
		</div>
		<cartnull v-else="data.length"></cartnull>
	</div>
</template>

<script>
import Cartnull from './cartnull.vue'
	export default {
		components:{
			'cartnull':Cartnull,
		},
		computed:{
			data:function(){
				return this.$store.state.data
			},
			close:function(){
				var tolte = 0;
				for(var i = 0;i < this.$store.state.data.length;i++){
					if(this.$store.state.data[i].bol){
						tolte += this.$store.state.data[i]["conct"] * this.$store.state.data[i]['cover_price']
					}
				}
				return tolte;
			},
			quanxuan:function(){
				for(var i = 0;i < this.$store.state.data.length;i++){
					if(!this.$store.state.data[i].bol){
						return false;
					}
				}
				return true;
			}
		},
		methods:{
			conctja:function(obj){
				obj.conct++;
			},
			conctjian:function(obj){
				obj.conct--;
				if(obj.conct <= 0){
					for(var i = 0;i < this.$store.state.data.length;i++){
						if(this.$store.state.data[i]['product_id'] == obj['product_id']){
							this.$store.state.data.splice(i,1);
							break;
						}
					}
				}
			},
			xuanze:function(obj){
				obj.bol = obj.bol?false:true;
			},
			quanxuanclick:function(){
				var bolclick = this.quanxuan?false:true;
				for(var i = 0;i < this.$store.state.data.length;i++){
					this.$store.state.data[i].bol = bolclick
				}
			}
		}
	}
</script>

<style lang="scss">
	@import './scss/cart.scss';
</style>