<template>
	<div id = "registration">
		<navb></navb>
		<div class="container-fluid">
			<div class="contt">
				<div class="input-group input-group-md">
				  <span class="input-group-addon"><span class = "text-danger">*</span>用户名：</span>
				  <input type="text" class="form-control" placeholder="请输入用户名" aria-describedby="sizing-addon3">
				  <span>呦吼吼</span>
				</div>
				<div class="input-group input-group-md">
				  <span class="input-group-addon"><span class = "text-danger">*</span>密码：</span>
				  <input type="text" class="form-control" placeholder="请输入8-16位非纯数字密码" aria-describedby="sizing-addon3">
				  <span>呦吼吼</span>
				</div>
				<div class="input-group input-group-md">
				  <span class="input-group-addon"><span class = "text-danger">*</span>确认密码：</span>
				  <input type="text" class="form-control" placeholder="请输入确认密码" aria-describedby="sizing-addon3">
				  <span>呦吼吼</span>
				</div>
				<div class="input-group input-group-md">
				  <span class="input-group-addon"><span class = "text-danger">*</span>电话：</span>
				  <input type="text" class="form-control" placeholder="请输入11位数字电话" aria-describedby="sizing-addon3">
				  <span>呦吼吼</span>
				</div>
				<div class="input-group input-group-md">
				  <span class="input-group-addon"><span class = "text-danger">*</span>邮箱：</span>
				  <input type="text" class="form-control" placeholder="请输入邮箱" aria-describedby="sizing-addon3">
				  <span>呦吼吼</span>
				</div>
				<div class="input-group input-group-md">
				  <span class="input-group-addon"><span class = "text-danger">*</span>验证码：</span>
				  <input type="text" class="form-control" placeholder="请输入验证码" aria-describedby="sizing-addon3">
				  <span>呦吼吼csdddddddddddddhhhhhhhhhhhhhhddddddd</span>
				</div>
			</div>
		</div>
		<div class="button-container">
			<input class="conf-button" type="submit" value="确 认">
		</div>
	</div>
</template>
<script type="text/javascript">
	import navb from './base/nav'
	export default {
		name:'registration',
		components: {
		  navb
		}
	}
</script>
<style scoped>
.input-group span,.input-group input{
  display: inline-block;
  border:none;
  box-shadow: none;
  background-color: #fff;
}
.input-group input{
  margin-right: 50px;
  border-bottom: 1px solid #0090ff;
}
.input-group .input-group-addon{
  width: 100px;
}
.input-group input{
	width: 200px;
}
.container-fluid {
	text-align: center;
}
.container-fluid .contt{
	display: inline-block;
}
.input-group .form-control {
	float: none;
}
.input-group{
	padding: 10px 0;
}
.button-container {
	padding-top: 50px;
}
.button-container .conf-button:hover{
	background-color: #00a2ff;
}
.button-container .conf-button{
	display: block;
	width: 150px;
	height: 36px;
	margin-bottom: 12px;
	border: 0;
	border-radius: 4px;
	font-size: 18px;
	color: #fff;
	background-color: #0090ff;
	cursor: pointer;
	margin: 0 auto;
}
.navbar{
	margin-bottom: 50px;
	box-shadow: 0px 10px 50px #eee;
}
</style>