<template>
<div>
	<navb></navb>
	<div class="container-fluid" id = "contt">
	  <div class="banner">
	    <img src="../assets/images/banner.jpg">
	  </div>
	  <div class="cartoon"></div>
	  <div class="content">
	    <div class="login-shadow"></div>
	    <div class="login-content">
	      <p>登录</p>
	      <div class="input-group input-group-sm">
	        <span class="input-group-addon glyphicon glyphicon-user"></span>
	        <input type="text" class="form-control" placeholder="Username" aria-describedby="sizing-addon3">
	      </div>
	      <div class="input-group input-group-sm">
	        <span class="input-group-addon glyphicon glyphicon-lock"></span>
	        <input type="Password" class="form-control" placeholder="Password" aria-describedby="sizing-addon3">
	      </div>
	      <div class="button-container">
            <router-link class="login-button"  tag = "input" value="登 录":to = "{path:'functi'}"></router-link>
	          <span class="fr">
	              <router-link tag = "span" :to="{path:'registration'}">注册</router-link>
	              <span class="login-links split">|</span>
	              <span>忘记密码</span>
	          </span>
	      </div>
	    </div>
	  </div>
	</div>
</div>
</template>
<script type="text/javascript">
	import navb from './base/nav'
	export default {
		name:'Login',
		components: {
		  navb
		}
	}
</script>
<style scoped>
.navbar{
  background-color: #fff;
  border:none;
}
#app,.row{
  height:100%;
}
#contt{
  position: relative;
  height: 500px;
  overflow: hidden;
}
#contt .cartoon{
  animation: cartoon 5s;
  animation-iteration-count: infinite;
  position: absolute;
  top: 250px;
  left: 30%;
  width: 150px;
  height: 150px;
  background: url('../assets/images/tooth1.png') no-repeat 0 0;
  background-size: 100%;
}
#contt .banner{
  height:100%;
  position: absolute;
  top:0;
  left: 50%;
  margin-left: -1000px;
}
@keyframes cartoon
{
0%   {transform: rotate(30deg);}
25%  {transform: rotate(-30deg);}
50%  {transform: rotate(30deg);}
75%  {transform: rotate(-30deg);}
100% {transform: rotate(30deg);}
}
#contt .content{
  width:324px;
  height:328px;
  position: absolute;
  top: 80px;
  right:10%;
}
#contt .content .login-shadow{
  float: left;
  width: 14px;
  height: 328px;
  background: url('../assets/images/shadow.png');
}
#contt .content .login-content{
  float: right;
  width: 310px;
  height: 328px;
  background-color: #fff;
  border-radius: 5px; 
}
#contt p{
  color:#0090ff;
  padding:10px 15px;
  font-weight: bold;
}
.login-content .input-group{
  margin:20px;
}
.login-content .input-group span,.login-content .input-group input{
  border:none;
  box-shadow: none;
  background-color: #fff;
}
.login-content .input-group input{
  border-bottom: 1px solid #0090ff;
}
#contt .button-container{
  background-color: #dbe2ec;
  padding: 20px 20px 14px 20px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  min-height: 62px;
  position: absolute;
  bottom: 0;
}
#contt .button-container .login-button{
    display: block;
    width: 270px;
    height: 36px;
    margin-bottom: 12px;
    border: 0;
    border-radius: 4px;
    font-size: 18px;
    color: #fff;
    background-color: #0090ff;
    cursor: pointer;
    text-align: center;
}
#contt .button-container .login-button:hover{
    background-color: #00a2ff;
}
#contt .button-container .fr{
  float: right;
  font-size: 12px;
  color: #5aa9e6;
}
#contt .button-container .fr span{
  cursor:pointer;
}
</style>
