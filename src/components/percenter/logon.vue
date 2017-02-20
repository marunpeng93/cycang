<template>
	<div id="logon">
		<div class="headercommon">
			<a class="glyphicon glyphicon-share" href="#/"></a>
			<span>登录</span>
			<a class="glyphicon glyphicon-home" href="#/"></a>
		</div>
		<div class="logon_main">
			<img src="../../assets/login_img.png" class="logon_img"/>
				<input type="text" name="username" id="username" value="" placeholder="账号"/>
				<input type="password" name="password" id="password" value="" placeholder="密码"/>
				<button>登录</button>
			<p class="logon_p"><u>注册账号</u><span>忘记密码</span></p>
		</div>
	</div>
	
</template>

<script>
	export default {
		
	}
</script>

<style lang="scss">
	@import './scss/logon.scss';
</style>