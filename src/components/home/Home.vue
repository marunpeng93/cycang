<template>
	<div id="home">
		<v-search></v-search>
		<v-lunbo1></v-lunbo1>
		<v-homenav></v-homenav>
		<centerlunbo></centerlunbo>
		<special></special>
		<newproduct :newpros='newpros | cutOut(0,9)'></newproduct>
		<div id="goodsData" style="clear: both;">
			<h3>
		 		这里都是卖得棒棒哒
		 		<a class="fr" v-on:click="goodsclick">
		 			<span class="glyphicon glyphicon-refresh"></span>换一批 
		 		</a>
		 	</h3>
		</div>
		<goodsdata :goods="goods | cutOut(num,end)" ></goodsdata>
	</div>
</template>

<script>
	import Search from './search.vue'
	import HomeLunbo from './homeLunbo.vue'
	import HomeNav from './homeNav.vue'
	import HomeLunboCenter from './homeCenterLunbo.vue'
	import Special from './special'
	import Newproduct from './newproduct'
	import GoodsData from './goodsData'
	var OK_DATA = 200;
	export default {
		data () {
			return {
				newpros:{},
				goods:{},
				num:0,
				end:10
			}
		},
		components:{
			'v-search':Search,
			'v-lunbo1':HomeLunbo,
			'v-homenav':HomeNav,
			'centerlunbo':HomeLunboCenter,
			'special':Special,
			'newproduct':Newproduct,
			'goodsdata':GoodsData
		},
		methods:{
			goodsclick:function(){
				this.num +=10;
				this.end +=10
				if(this.end > this.goods.length){
					this.num =0;
					this.end =10
				}
			}
		},
		created:function(){
			 this.$http.get('/api/newproduct').then(response => {
			 	response = response.body
			 	if(response.code == OK_DATA){
			 		response = response.result.data.list
			 		this.newpros = response;
			 	}
			  }, response => {
				 console.log(response)
			  });
			  this.$http.get('/api/goods').then(response => {
			 	response = response.body
			 	if(response.code == OK_DATA){
			 		response = response.result
			 		this.goods = response;
			 	}
			  }, response => {
				 console.log(response)
			  });
		},
		filters:{
			cutOut:function(value,num,end){
				if(value instanceof Array){
					var arr = value.slice(num,end)
					return arr
				
				}
			}
		}

	}
</script>

<style lang="scss">
	#home{
		padding-bottom: 50px;
	}
	#goodsData{
	    margin-top: 20px;
	     h3{
	        line-height: 1rem;
	        font-size:0.5rem ;
	        text-indent: 1em;
	        background: #eee;
	        margin: 5px auto;
	        white-space: nowrap;
	        a{
	            margin-right: 5px;
	            color:red;
	        }
	        span{
	            margin-right: 10px;
	        }
	    }
	}
</style>