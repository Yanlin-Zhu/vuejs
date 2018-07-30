<template>
<div id="detail">
    <el-header style = "border-bottom: 1px solid #409eff;">
	<nav class="navbar" >
	  <div class="container-fluid">
	    <!-- Brand and toggle get grouped for better mobile display -->
	    <div class="navbar-header">
	      <img src="../assets/images/logo.jpg" style = "height:50px;">
	    </div>
	    <!-- Collect the nav links, forms, and other content for toggling -->
	    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
	      <ul class="nav navbar-nav">
	        <li class="active"><a href="#">涑爽官网<span class="sr-only">(current)</span></a></li>
	      </ul>
	      <ul class="nav navbar-nav navbar-right">
	        <li><router-link :to="{path:'registration'}">你好管理员</router-link></li>
	        <li><router-link :to="{path:'/'}">退出</router-link></li>
	      </ul>
	    </div><!-- /.navbar-collapse -->
	  </div><!-- /.container-fluid -->
	</nav>
    </el-header>
    <el-container>
        <el-aside width="220px"  style="height:100%; border-right: 2px solid #409eff;">
            <nav2></nav2>
        </el-aside>
        <el-container style="height:100%; overflow:auto;">
            <el-main>
                <detailcenter></detailcenter>
            </el-main>
        </el-container>
    </el-container>
</div>
</template>
<script>
import nav2 from "./base/nav2.vue";
import detailcenter from "./base/detailcenter.vue";
export default {
  created() {},
  name: "detail",
  components: {
    nav2,
    detailcenter
  }
};
</script>

<style scoped>
#detail {
  height: 100%;
}
.el-header {
  height: 5%;
}
.el-container {
  height: 90%;
}
h1 {
  margin-top: 200px;
  font-size: 40px;
  text-align: center;
}
</style>