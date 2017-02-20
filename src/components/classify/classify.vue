<template>
	<div class="swiper-container swiper-container-horizontal swiper-scend" id="classify">
		<div class="swiper-wrapper">
			<div class="swiper-slide">
				<sell></sell>
			</div>
			<div class="swiper-slide">
				<production></production>
			</div>
			<div class="swiper-slide">
				<brand></brand>
			</div>
		</div>
	    <div class="swiper-pagination"></div>
	</div>
</template>	

<script>
import Sell from './sell.vue'
import Production from './production.vue'
import Brand from './brand.vue'
	export default {
		data:function(){
			return {
				num:0
			}
		},
		mounted:function(){
			var arr = ['分类',"作品","品牌"];
			var swiper = new Swiper('#classify', {
				pagination: '.swiper-pagination',
				paginationClickable: true,
				 paginationBulletRender: function (swiper, index,className) {
		            return '<span class="' + className + '">' + arr[index] + '</span>';
		        },
		        observer:true
			})
		},
		components:{
			'sell':Sell,
			'production':Production,
			'brand':Brand
		}
	}
</script>

<style lang="scss">
	@import './scss/classify.scss';
</style>