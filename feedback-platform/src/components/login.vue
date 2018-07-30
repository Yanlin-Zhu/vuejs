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
	      <p calss="fangda">登录</p>
	      <div class="input-group input-group-sm">
	        <span class="input-group-addon glyphicon glyphicon-user"></span>
	        <input v-model="form.account" type="text" class="form-control" placeholder="Username" aria-describedby="sizing-addon3">
	      </div>
	      <div class="input-group input-group-sm">
	        <span class="input-group-addon glyphicon glyphicon-lock"></span>
	        <input v-model="form.pwd" type="Password" class="form-control" placeholder="Password" aria-describedby="sizing-addon3">
	      </div>
        <div class="input-group input-group-sm">
	        <img id = "vcode" @click = "newcode" src="http://www.weilongyun.cn/sushuang/thinkphp/index.php/Home/login/getcode" alt="" style ="width:100px;margin-left:20px;position:relative;top:5px;">
          <input v-model="form.code" type="text" placeholder="验证码" style ="outline:none;width:100px;margin-left:10px;padding-left:10px;">
	      </div>
	      <div class="button-container">
            <input @click = "onlogin" type="submit" class="login-button" value="登 录">
            <el-checkbox calss="fangda" v-model="form.Repasswd">记住密码</el-checkbox>
	          <span class="fr">
	              <router-link calss="fangda" tag = "span" :to="{path:'registration'}">注册</router-link>
	              <span class="login-links split">|</span>
	              <span calss="fangda">忘记密码</span>
	          </span>
	      </div>
	    </div>
	  </div>
	</div>
</div>
</template>
<script type="text/javascript">
import navb from "./base/nav";
export default {
  name: "Login",
  components: {
    navb
  },
  data() {
    return {
      form: {
        pwd: "",
        account: "",
        code: "",
        Repasswd: true
      }
    };
  },
  methods: {
    postdata(params) {
      // const _this = this;
      // this.$http
      //   .post("/api/sushuang/thinkphp/index.php/Home/Login/login", params)
      //   .then(function(response) {
      //     console.log(response);
      //     if (response.isSuccess) {
      //       _this.$message({
      //         showClose: true,
      //         message: "登录成功",
      //         type: "success"
      //       });
      //       window.$cookies.set("account", _this.form.account, "1m");
      //       _this.$router.push("/home");
      //     } else {
      //       _this.$message({
      //         showClose: true,
      //         message: "登录失败",
      //         type: "error"
      //       });
      //     }
      //   });
    },
    onlogin() {
      // this.postdata(this.form);
    },
    newcode(event) {
      //   event.target.src =
      //     "http://www.weilongyun.cn/sushuang/thinkphp/index.php/Home/login/getcode";
    }
  }
};
</script>
<style scoped>
.navbar {
  background-color: #fff;
  border: none;
}
#app,
.row {
  height: 100%;
}
#contt {
  position: relative;
  height: 500px;
  overflow: hidden;
}
#contt .cartoon {
  animation: cartoon 5s;
  animation-iteration-count: infinite;
  position: absolute;
  top: 250px;
  left: 30%;
  width: 150px;
  height: 150px;
  background: url("../assets/images/tooth1.png") no-repeat 0 0;
  background-size: 100%;
}
#contt .banner {
  height: 100%;
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -1000px;
}
@keyframes cartoon {
  0% {
    transform: rotate(30deg);
  }
  25% {
    transform: rotate(-30deg);
  }
  50% {
    transform: rotate(30deg);
  }
  75% {
    transform: rotate(-30deg);
  }
  100% {
    transform: rotate(30deg);
  }
}
#contt .content {
  width: 324px;
  height: 328px;
  position: absolute;
  top: 80px;
  right: 10%;
}
#contt .content .login-shadow {
  float: left;
  width: 14px;
  height: 328px;
  background: url("../assets/images/shadow.png");
}
#contt .content .login-content {
  float: right;
  width: 310px;
  height: 328px;
  background-color: #fff;
  border-radius: 5px;
}
#contt p {
  color: #0090ff;
  padding: 10px 15px;
  font-weight: bold;
}
.login-content .input-group {
  margin: 20px;
}
.login-content .input-group span,
.login-content .input-group input {
  border: none;
  box-shadow: none;
  background-color: #fff;
}
.login-content .input-group input {
  border-bottom: 1px solid #0090ff;
}
#contt .button-container {
  background-color: #dbe2ec;
  padding: 20px 20px 14px 20px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  min-height: 62px;
  position: absolute;
  bottom: 0;
}
#contt .button-container .login-button {
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
#contt .button-container .login-button:hover {
  background-color: #00a2ff;
}
#contt .button-container .fr {
  float: right;
  font-size: 14px;
  color: #449eff;
  line-height: 15px;
}
#contt .button-container .fr span {
  cursor: pointer;
}
#contt .fangda {
  font-size: 50px;
}
</style>
