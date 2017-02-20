<template>
	 <div class="swiper-container" id="centerLunbo">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
            	<img src="../../assets/1486545863672.png"/>
            </div>
            <div class="swiper-slide">
            	<img src="../../assets/1486207715118.png"/>
            </div>
            <div class="swiper-slide">
            	<img src="../../assets/1486524317883.jpg"/>
            </div>
            <div class="swiper-slide">
            	<img src="../../assets/1486979918714.jpg"/>
            </div>
            <div class="swiper-slide">
            	<img src="../../assets/1487153307586.png"/>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
		mounted:function(){
			var homelunbo = new Swiper('#centerLunbo', {
					autoplay: 3000,
					loop : true,
					effect : 'coverflow',
					slidesPerView: 1.4,
					autoplayDisableOnInteraction : false,
					loopAdditionalSlides : 1,
					centeredSlides : true,
			}) 
		}
	}
</script>

<style lang="sass">
	@import './scss/centerLunbo.scss';
</style>