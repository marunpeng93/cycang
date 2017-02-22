<template>
	 	<div class="home_goods_data">
	 		<div class="home_goods_list fl" v-for = "good in goods">
	 			<img  v-bind:data ='good.figure' onload="window.srcload(this)" src="../../assets/loading.jpg"/>
	 			<!--onload="this.src=good.figure"-->
	 			<p>{{good.name}}</p>
	 			<span>${{good.cover_price}}</span>
	 		</div>
	 	</div>
</template>

<script>
	export default {
		props:{
			goods:{}
		},
	}
</script>

<style lang="scss">
	@import './scss/goodsData.scss';
</style>