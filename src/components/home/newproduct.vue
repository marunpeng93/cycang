<template>
	<div id="newpro">
		<h3>
	 		新品推荐
	 		<a href="" class="fr">查看更多 <span class="glyphicon glyphicon-chevron-right"></span></a>
	 	</h3>
	 	<div class="new_main">
	 		<div class="new_main_data" v-for="newpro in newpros" v-on:click='setcartgood(newpro)' >
	 			<img :src="newpro.figure"/>
	 			<p>{{newpro.name}}</p>
	 			<span>￥{{newpro.cover_price}}</span>
	 		</div>
	 	</div>
	</div>
</template>

<script>
	export default {
		props:{
			newpros:{}
		},
		methods:{
			setcartgood:function(data){
				var cartdata = {};
				cartdata.product_id = data.product_id;
				cartdata.name = data.name;
				cartdata.cover_price = data.cover_price;
				cartdata.figure = data.figure;
				cartdata.brief = data.brief;
				cartdata.conct = 1;
				cartdata.bol = true;
				this.$store.state.cartgood = cartdata
			}
		}
	}
</script>

<style lang="scss">
	@import './scss/newpro.scss';
</style>