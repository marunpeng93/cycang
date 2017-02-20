<template>
	 <div class="swiper-container" id="spearch">
	 	<h3>
	 		闪购-距 结束
	 		<span class="spearch_time bor">{{special}}</span>
	 		<a href="" class="fr">查看更多 <span class="glyphicon glyphicon-chevron-right"></span></a>
	 	</h3>
        <div class="swiper-wrapper">
            <div class="swiper-slide">
            	<img src="../../assets/1487240549225.png"/>
            	<p>￥5.00</p>
            	<s>￥5.00</s>
            </div>
            <div class="swiper-slide">
            	<img src="../../assets/1487241197667.png"/>
            	<p>￥10.00</p>
            	<s>￥10.00</s>
            </div>
            <div class="swiper-slide">
            	<img src="../../assets/1487241529355.png"/>
            	<p>￥10.00</p>
            	<s>￥10.00</p>
            </div>
            <div class="swiper-slide">
            	<img src="../../assets/1487240549225.png"/>
            	<p>￥5.00</p>
            	<s>￥5.00</s>
            </div>
            <div class="swiper-slide">
            	<img src="../../assets/1487241197667.png"/>
            	<p>￥10.00</p>
            	<s>￥10.00</s>
            </div>
            <div class="swiper-slide">
            	<img src="../../assets/1487241529355.png"/>
            	<p>￥10.00</p>
            	<s>￥10.00</p>
            </div>
            <div class="swiper-slide">
            	<img src="../../assets/1487240549225.png"/>
            	<p>￥5.00</p>
            	<s>￥5.00</s>
            </div>
            <div class="swiper-slide">
            	<img src="../../assets/1487241197667.png"/>
            	<p>￥10.00</p>
            	<s>￥10.00</s>
            </div>
            <div class="swiper-slide">
            	<img src="../../assets/1487241529355.png"/>
            	<p>￥10.00</p>
            	<s>￥10.00</p>
            </div>
            <div class="swiper-slide">
            	<img src="../../assets/1487240549225.png"/>
            	<p>￥5.00</p>
            	<s>￥5.00</s>
            </div>
            <div class="swiper-slide">
            	<img src="../../assets/1487241197667.png"/>
            	<p>￥10.00</p>
            	<s>￥10.00</s>
            </div>
            <div class="swiper-slide">
            	<img src="../../assets/1487241529355.png"/>
            	<p>￥10.00</p>
            	<s>￥10.00</p>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
		data:function(){
			return {
				special:'00:00:00'
			}
		},
		mounted:function(){
			var spearch = new Swiper('#spearch', {
				slidesPerView: 4,
			})
		},
		created:function(){
			 var _this = this;
        setInterval(function(){
             var time = new Date();
             var Hours = 24-time.getHours();
             var Minutes = 60-time.getMinutes();
             var Seconds = 60-time.getSeconds();
             Hours = Hours < 10 ? '0'+Hours : Hours;
             Minutes = Minutes < 10 ? '0'+Minutes : Minutes;
             Seconds = Seconds < 10 ? '0'+Seconds : Seconds;
        	_this.special =Hours+':'+Minutes+':'+Seconds
        },1000)
		}
		
	}
</script>

<style lang="scss">
	@import './scss/special.scss';
</style>