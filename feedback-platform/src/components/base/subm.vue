<template>
	<div id="subm">
		<el-card class="box-card">
		<el-form :rules="rules" ref="form" :inline="true" :model="form" class="demo-form-inline">
			<div class="classification">
				<el-form-item label="标题" prop="title">
					<el-input v-model="form.title"></el-input>
				</el-form-item>
			</div>
      <div class="classification">
				<el-form-item label="提交人邮箱" prop="s_email">
					<el-input v-model="form.s_email"></el-input>
				</el-form-item>
			</div>
			<div class="classification">
				<el-form-item label="问题类型" prop = "q_type">
					<el-select v-model="form.q_type" filterable clearable placeholder="请选择">
					<el-option
						v-for="(index, item) in options.q_type"
						:key="item"
						:label="index"
						:value="item">
					</el-option>
					</el-select>
				</el-form-item>
			</div>
			<div class="classification">
			<el-form-item label="反馈分类" prop = "classification">
				<el-select v-model="form.classification" filterable clearable placeholder="请选择">
				<el-option
					v-for="(index, item) in options.classification"
					:key="item"
					:label="index"
					:value="item">
				</el-option>
				</el-select>
			</el-form-item>
			</div>
			<div class="classification">
				<el-form-item label="问题描述"  prop = "q_detail">
					<el-input type="textarea" v-model="form.q_detail"></el-input>
				</el-form-item>
			</div>
		</el-form>
		<div class="classification">
		<div class="discribe-img">
			<p>上传图片：</p>
			<input id = "loadBox" type="file" name="" @change="updataFile">
		</div>
		</div>
		<div class="btnCantainer">
			<button type="button" class="btn btn-primary" @click="onSubmit('form')"> 提 交 </button>
		</div>
		</el-card>
	</div>
</template>
<script type="text/javascript">
export default {
  created() {
    var lightbox = new Lightbox({
      speed: "fast",
      maxWidth: 900,
      maxHeight: 600
    });
    this.form = {
      q_type: "",
      classification: "",
      q_detail: "",
      title: "",
      s_email: "",
      submit_name: "222"
    };
    if (this.$route.params.id) {
      console.log(this.$route.params.id);
      const _this = this;
      this.$http
        .get(
          "/api/sushuang/thinkphp/index.php/Home/detail/index?id=" +
            this.$route.params.id
        )
        .then(function(response) {
          _this.form = response.data.data;
          console.log(response.data.data);
        });
      // .catch(function(error) {
      //   console.log(error);
      // });
    }
  },
  watch: {
    '$route' (to, from) {
      alert(2);
      if (this.$route.params.id) {
      } else {
        alert(1);
      }
    }
  },
  name: "subm",
  data() {
    return {
      options: {
        q_type: {
          1: "宣传促销问题",
          2: "物流问题",
          3: "生产日期滞后",
          4: "产品包装问题",
          5: "产品质量问题"
        },
        classification: {
          1: "表扬",
          2: "建议",
          3: "抱怨",
          4: "投诉"
        }
      },
      form: {
        q_type: "",
        classification: "",
        q_detail: "",
        title: "",
        s_email: "",
        submit_name: "222"
      },
      rules: {
        q_type: [
          {
            type: "string",
            required: true,
            message: "请选择问题类型",
            trigger: "change"
          }
        ],
        s_email: [
          { type: "email", message: "请输入正确的邮箱地址", trigger: "blur" }
        ],
        classification: [
          {
            type: "string",
            required: true,
            message: "请选择反馈分类",
            trigger: "change"
          }
        ],
        q_detail: [
          {
            type: "string",
            required: true,
            message: "请输入问题描述",
            trigger: "blur"
          }
        ],
        title: [
          {
            type: "string",
            required: true,
            message: "请输入标题",
            trigger: "blur"
          }
        ],
        tellphone: [
          {
            type: "string",
            required: true,
            message: "请输入电话",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    postdata(params) {
      const _this = this;
      if (this.$route.params.id) {
        this.$http
          .post("/api/sushuang/thinkphp/index.php/Home/trans/index", {
            id: _this.form.id,
            title: _this.form.title,
            q_type: _this.form.q_type,
            q_detail: _this.form.q_detail,
            classification: _this.form.classification,
            s_email: _this.form.s_email
          })
          .then(function(response) {
            console.log(response);
            if (response.data.isSuccess) {
              _this.$message({
                showClose: true,
                message: "提交成功",
                type: "success"
              });
              _this.$router.push("/listpage");
            } else {
              _this.$message({
                showClose: true,
                message: "提交失败",
                type: "error"
              });
            }
          });
      } else {
        this.$http
          .post("/api/sushuang/thinkphp/index.php/Home/add/index", params)
          .then(function(response) {
            console.log(response);
            if (response.data.isSuccess) {
              _this.$message({
                showClose: true,
                message: "提交成功",
                type: "success"
              });
              _this.$router.push("/listpage");
            } else {
              _this.$message({
                showClose: true,
                message: "提交失败",
                type: "error"
              });
            }
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    },
    onSubmit(form) {
      this.$refs[form].validate(valid => {
        if (valid) {
          this.postdata(this.form);
        } else {
          return false;
        }
      });
    },
    addActive1(index) {
      $.each(this.items1, function(ind, obj) {
        obj.isMyActive = false;
      });
      this.items1[index].isMyActive = true;
    },
    addActive2(index) {
      $.each(this.items2, function(ind, obj) {
        obj.isMyActive = false;
      });
      this.items2[index].isMyActive = true;
    },
    // http://blog.csdn.net/qingyjl/article/details/52003567
    updataFile(e) {
      var file = e.target.files[0]; //获取File对象，这里是上传单张图片，[0]代表第一张图片。如果多张，就是一个var file = e.target.files;
      var type = file.type.split("/")[0]; //按照惯例，不应该由前端判断格式，因为这里是根据后缀名判断的，修改后缀名仍旧可以上传，理应由后端根据文件格式来判断。
      if (type != "image") {
        alert("请上传图片");
        return;
      }
      var size = Math.round(file.size / 1024 / 1024);
      if (size > 3) {
        alert("图片大小不得超过3M");
        return;
      }
      var d = new Date();
      var reader = new FileReader(); //新建FileReader对象
      reader.readAsDataURL(file); //读取为base64
      reader.onload = function(e) {
        var dataURL = reader.result,
          image =
            '<img  class = "js-lightbox img-thumbnail" data-role = "lightbox" data-source = "' +
            dataURL +
            '" data-group = "group-1" data-id = "' +
            d.getTime() +
            '" data-caption = "bdsghaudashdbas" style="width:140px;height:140px;" src="' +
            dataURL +
            '" alt="反馈图片"/>', //预览图片
          text = '<span>"' + dataURL + '"</span>';
        $(".discribe-img").append(image);
      };
    }
  }
};
</script>
<style scoped>
.classification {
  border-bottom: 1px solid #eee;
  padding: 15px 15%;
}
.discribe {
  padding: 5px 10%;
}
.classification p,
.discribe p,
.discribe-img p {
  padding: 10px;
}
.discribe textarea {
  width: 400px;
  height: 100px;
  display: inline-block;
  margin-left: 50px;
  resize: none;
  overflow: auto;
}
.classification p span {
  display: inline-block;
  padding: 5px 5px;
  border-radius: 4px;
  cursor: pointer;
}
.classification p span:hover {
  color: #fff;
  background-color: #509ee2;
}
.myActive {
  color: #fff;
  background-color: #509ee2;
}
.btnCantainer {
  padding-top: 30px;
  text-align: center;
}
</style>