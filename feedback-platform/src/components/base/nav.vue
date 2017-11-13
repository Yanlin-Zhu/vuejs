<template>
	<nav class="navbar">
	  <div class="container-fluid">
	    <!-- Brand and toggle get grouped for better mobile display -->
	    <div class="navbar-header">
	      <img src="../../assets/images/logo.jpg">
	    </div>
	    <!-- Collect the nav links, forms, and other content for toggling -->
	    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
	      <ul class="nav navbar-nav">
	        <li class="active"><a href="#">涑爽官网<span class="sr-only">(current)</span></a></li>
	      </ul>
	      <ul class="nav navbar-nav navbar-right">
	        <li><router-link :to="{path:'registration'}">注册</router-link></li>
	        <li><router-link :to="{path:'/'}">登录</router-link></li>
	      </ul>
	    </div><!-- /.navbar-collapse -->
	  </div><!-- /.container-fluid -->
	</nav>
</template>
<script type="text/javascript">
	export default {
		name:'navBar'
	}
</script>
<style scoped>
.navbar-header img{
	height:50px;
}
.navbar{
	margin-bottom: 50px;
	box-shadow: 0px 10px 50px #eee;
}
</style>