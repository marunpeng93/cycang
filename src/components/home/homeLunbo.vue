<template>
	<div class="swiper-container" id="lunbo">
	  <div class="swiper-wrapper">
	  	<img src="../../assets/1482573936817.png" class="swiper-slide"/>
	    <img src="../../assets/1485251576106.jpg" class="swiper-slide"/>
	    <img src="../../assets/1486448656390.jpg" class="swiper-slide"/>
	    <img src="../../assets/1486524317883.jpg" class="swiper-slide"/>
	    <img src="../../assets/1486954822822.jpg" class="swiper-slide"/>
    </div>
    <div class="swiper-pagination"></div>
	</div>
</template>

<script>
	export default {
		mounted:function(){
			var homelunbo = new Swiper('#lunbo', {
					autoplay: 2000,//可选选项，自动滑动
					loop : true,
					pagination : '.swiper-pagination',
					autoplayDisableOnInteraction : false,
					observer:true,
					observeParents:true,
			}) 
		}
	}
</script>

<style lang="scss">
	@import '../../common/scss/variable.scss';
	@import './scss/homeLunbo.scss'
</style>