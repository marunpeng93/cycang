<template>
	<div id="sell" class="heightauto">
		<ul>
			<li v-for='(sell,data,index) in sells' v-on:click = "name = sell.name" :class="{active:name == sell.name}">{{sell.name}}</li>
		</ul>
		<div class="sell_main">
			<h3>热卖推荐</h3>
			<div class="sell_hot_data">
				<div class="swiper-container" id="sell_hot_data">
					<div class="swiper-wrapper">
						<div class="swiper-slide" v-for="hotdata in sellhotdata()">
							<img :src="hotdata.figure"/>
							￥{{hotdata.origin_price}}
						</div>
					</div>
				</div>
			</div>
			<h3>常用分类</h3>
			<div class="sell_data" >
				<div v-for = 'data in selldata()'>
					<img :src="data.pic"/>
					{{data.name}}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
var OK_DATA = 200;
	export default {
		data:function(){
			return {
				sells:{},
				name:'小裙子'
			}
		},
		created:function(){
			this.$http.get('/api/sort').then(response => {
			 	response = response.body
			 	if(response.code == OK_DATA){
			 		response = response.result
			 		this.sells = response;
			 	}
			  }, response => {
				 console.log(response)
			  });
		},
		methods:{
			selldata:function(){
				for(var i = 0;i < this.sells.length;i++){
					if(this.sells[i].name == this.name){
						return this.sells[i].child
					}
				}
			},
			sellhotdata:function(){
				for(var i = 0;i < this.sells.length;i++){
					if(this.sells[i].name == this.name){
						return this.sells[i].hot_product_list
					}
				}
			}
		},
		mounted:function(){
			var spearch = new Swiper('#sell_hot_data', {
				slidesPerView: 3,
				observer:true,
				observeParents:true,
			})
		}
	}
</script>

<style lang="scss">
	@import './scss/sell.scss';
</style>