<template>
	<div id = "registration">
		<navb></navb>
		<div class="container-fluid">
			<div class="contt">
				<el-form :rules="rules" ref="form"  :label-position="labelPosition" label-width="80px" :model="form">
					<el-form-item label="用户名" prop="account">
						<el-input v-model="form.account"></el-input>
					</el-form-item>
					<el-form-item label="密码" prop="pwd">
						<el-input v-model="form.pwd"></el-input>
					</el-form-item>
					<el-form-item label="确认密码" prop="repassworld">
						<el-input v-model="form.repassworld"></el-input>
					</el-form-item>
					<el-form-item label="电话" prop="tel">
						<el-input v-model="form.tel"></el-input>
					</el-form-item>
					<el-form-item label="邮箱" prop="email">
						<el-input v-model="form.email"></el-input>
					</el-form-item>
					<el-form-item label="是否为内部员工" prop="status">
						<el-radio-group v-model="form.status">
							<el-radio label="1">是</el-radio>
							<el-radio label="0">否</el-radio>
						</el-radio-group>
					</el-form-item>
					<el-form-item label="身份证号" prop="cardid">
						<el-input v-model="form.cardid"></el-input>
					</el-form-item>
				</el-form>
			</div>
		</div>
		<div class="button-container" @click="onSubmit('form')">
			<input class="conf-button" type="submit" value="确 认">
		</div>
	</div>
</template>
<script type="text/javascript">
import navb from "./base/nav";
export default {
  name: "registration",
  components: {
    navb
  },
  data() {
    var validatePass2 = (rule, value, callback) => {
      let a = value === this.form.pwd;
      if (a) {
        callback();
      } else {
        callback(new Error("两次输入密码不一致!"));
      }
    };
    return {
      labelPosition: "right",
      form: {
        account: "",
        pwd: "",
        repassworld: "",
        tel: "",
        email: "",
        status: "",
        cardid: ""
      },
      rules: {
        account: [
          {
            type: "string",
            required: true,
            message: "请输入用户名",
            trigger: "blur"
          }
        ],
        pwd: [
          {
            type: "string",
            required: true,
            message: "请输入密码",
            trigger: "blur"
          },
          { min: 8, max: 16, message: "长度在 8 到 16 个字符", trigger: "blur" }
        ],
        email: [
          {
            type: "string",
            required: true,
            message: "请输入邮箱",
            trigger: "blur"
          },
          { type: "email", message: "请输入正确的邮箱地址", trigger: "blur" }
        ],
        repassworld: [
          {
            type: "string",
            required: true,
            message: "请输入密码",
            trigger: "blur"
          },
          { validator: validatePass2, trigger: "blur" }
        ],
        tel: [
          {
            type: "string",
            required: true,
            message: "请输入电话",
            trigger: "blur"
          },
          { min: 11, max: 11, message: "长度为11个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    postdata(params) {
      const _this = this;
      this.$http
        .post("/api/sushuang/thinkphp/index.php/Home/register/register", params)
        .then(function(response) {
          console.log(response);
          if (response.data.isSuccess) {
            _this.$message({
              showClose: true,
              message: "注册成功",
              type: "success"
            });
            _this.$router.push("/");
          } else {
            _this.$message({
              showClose: true,
              message: "注册失败",
              type: "error"
            });
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    onSubmit(form) {
      this.$refs[form].validate(valid => {
        if (valid) {
          this.postdata(this.form);
        } else {
          return false;
        }
      });
    }
  }
};
</script>
<style scoped>
.input-group span,
.input-group input {
  display: inline-block;
  border: none;
  box-shadow: none;
  background-color: #fff;
}
.input-group .input-group-addon {
  width: 100px;
}
.input-group [type =" text"] {
  margin-right: 50px;
  border-bottom: 1px solid #0090ff;
  width: 200px;
}
.container-fluid {
  text-align: center;
}
.container-fluid .contt {
  display: inline-block;
}
.input-group .form-control {
  float: none;
}
.input-group {
  padding: 10px 0;
}
.button-container {
  padding-top: 50px;
}
.button-container .conf-button:hover {
  background-color: #00a2ff;
}
.button-container .conf-button {
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
.navbar {
  margin-bottom: 50px;
  box-shadow: 0px 10px 50px #eee;
}
.radioBox {
  display: inline-block;
  width: 250px;
}
</style>