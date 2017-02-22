<template>
	<div id="percenter">
		<div class="percenter_main" v-if='logonbol'>
			<div class="main">
				<img src="../../assets/menu-model.png"/>
				<p>****,你好！</p>
			</div>
			<div class="my_indent">
				<h3>我的订单
					<a href="" class="fr">查看全部订单 <span class="glyphicon glyphicon-chevron-right"></span></a>
				</h3>
				<ul>
					<li>
						<img src="../../assets/need_pay2.png"/>
						代付款
					</li>
					<li>
						<img src="../../assets/need_deliver2.png"/>
						代发货
					</li>
					<li>
						<img src="../../assets/need_get2.png"/>
						代收货
					</li>
					<li>
						<img src="../../assets/has_complete.png"/>
						已完成
					</li>
					<li>
						<img src="../../assets/need_refund2.png"/>
						退款/售后
					</li>
				</ul>
			</div>
			<ul class="logon_list">
				<li>
					<p>
						<span>0</span>
						我的优惠卷
					</p>
				</li>
				<li>
					<p>
						<span>0</span>
						我的瓜子
					</p>
				</li>
				<li>
					<p>
						<span>0</span>
						我的收藏
					</p>
				</li>
				<li>
					<p>
						<img src="../../assets/ticket.png"/>
						我的电子票
					</p>
				</li>
				<li>
					<p>
						<img src="../../assets/prize.png"/>
						我的奖品
					</p>
				</li>
				<li>
					<p>
						<img src="../../assets/history.png"/>
						我的足迹
					</p>
				</li>
				<li>
					<p>
						<img src="../../assets/address.png"/>
						收货地址
					</p>
				</li>
				<li>
					<p>
						<img src="../../assets/mall.png"/>
						瓜子商城
					</p>
				</li>
				<li></li>
			</ul>
			<div style="height: 0.2rem;"></div>
			<ul class="logon_list">
				<li>
					<p><img src="../../assets/user_service2.png"/>
					客服中心</p>
				</li>
				<li>
					<p><img src="../../assets/icon_feedback.png"/>
					服务反馈</p>
				</li>
				<li></li>
			</ul>
			<button class="logon_button">退出登录</button>
		</div>
		<logon v-else="logonbol"></logon>
	</div>
</template>

<script>
	import Logon from './logon.vue'
	export default {
		computed:{
			logonbol:function(){
				return this.$store.state.userbol;
			}
		},
		components:{
			"logon":Logon
		}
	}
</script>

<style lang="scss">
	@import "./scss/percenter.scss";
</style>