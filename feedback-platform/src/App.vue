<template>
  <div id = "app">
    <!-- <router-view/>
    <router-link :to="{path:'/'}">to hello</router-link>
    <router-link :to="{path:'login'}">to login</router-link> -->
    <nav class="navbar">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <a class="navbar-brand" href="#">Brand</a>
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>
            <li><a href="#">Link</a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#">Link</a></li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
    <div class="container-fluid" id = "contt">
      <div class="banner">
        <img src="./assets/images/banner.jpg">
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
            <input type="text" class="form-control" placeholder="Password" aria-describedby="sizing-addon3">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
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
  background: url('./assets/images/tooth1.png') no-repeat 0 0;
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
  background: url('./assets/images/shadow.png');
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
</style>
