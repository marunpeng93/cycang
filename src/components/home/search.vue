<template>
	<div id="search">
		<!--进入搜索钮-->
		<div class='header'>
			<button class="bor" v-on:click="cl()"><span class="glyphicon glyphicon-search"></span>请输入搜索信息</button>
		</div>
		<!--搜索界面-->
		<div class='seach_main' v-if='bol'>
			<div class="header">
				<span class="glyphicon glyphicon-share" v-on:click="cl()"></span>
				<input type="text" name="" id="" value="" placeholder="请输入商品搜索名" class="bor"/>
				<span class="red">搜索</span>
			</div>
			<div class="search_lis">
				<div class="search_hot">
					<h4>热门搜索</h4>
					<div class="search_hot_span">
						<span>lolita</span><span>Honest</span><span>人</span><span>画影</span><span>风荷举</span><span>剑三</span><span>鹤归</span><span>烟宣冷</span><span>皎人歌lita</span><span>举</span><span>风荷</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				bol:false,
			}
		},
		methods:{
			cl:function(){
				this.bol = this.bol?false:true
			}
		}
	}
</script>

<style lang="scss">
	@import '../../common/scss/variable.scss';
	@import './scss/search.scss';
</style>