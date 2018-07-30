<template>
    <div>
    <el-card class="box-card">
        <p class = "h1">标题：</p>
        <p>{{details.title}}</p>
        <p class = "h1">问题类型：</p>
        <p>{{options.q_type[details.q_type]}}</p>
        <p class = "h1">反馈分类：</p>
        <p>{{options.classification[details.classification]}}</p>
        <p class = "h1">问题描述：</p>
        <p>{{details.q_detail}}</p>
        <p class = "h1">图片：</p>
        <p>未上传</p>
        <p class = "h1">当前处理人:</p>
        <p>{{details.now_person}}</p>
        <p class = "h1">问题提交时间：</p>
        <p>{{details.submit_time}}</p>
        <p class = "h1">当前状态：</p>
        <p>{{options.status[details.status]}}</p>
        <p class = "h1">问题处理进度：</p>
        <el-steps :active="Number(details.process)+1" align-center style>
        <el-step title="未处理" description="问题未开启未分配"></el-step>
        <el-step title="处理中" description="工作人员正在进行处理"></el-step>
        <el-step title="已解决" description="问题已处理，在详情页中可看到处理方式"></el-step>
        </el-steps>
        <p class = "h1">问题解决方案：</p>
        <p>{{details.solv_question}}</p>
        <div class="bu">
            <el-button type="primary" @click="modify">修改</el-button>
            <el-button type="primary" @click="solv_question">解答</el-button>
            <el-button type="primary" @click="liuzhuan">流转</el-button>
            <el-button type="primary" @click="changestatus">{{options.status2[details.status]}}问题</el-button>
        </div>
    </el-card>
    <el-dialog title="流转" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <!-- <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item> -->
        <el-form-item label="流转到" :label-width="formLabelWidth">
          <el-select v-model="form.now_person" placeholder="请选择流转人">
            <el-option
                v-for="(index, item) in options.now_person"
                :key="item"
                :label="index"
                :value="index">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="conf">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="解答" :visible.sync="dialogFormVisible2">
      <el-form :model="form">
        <el-form-item label="请输入解决方式" :label-width="formLabelWidth">
          <el-input v-model="form.solv_question" auto-complete="off"></el-input>
        </el-form-item>
        <!-- <el-form-item label="流转到" :label-width="formLabelWidth">
          <el-select v-model="form.name" placeholder="请选择流转人">
            <el-option
                v-for="(index, item) in options.now_person"
                :key="item"
                :label="index"
                :value="index">
            </el-option>
          </el-select>
        </el-form-item> -->
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible2 = false">取 消</el-button>
        <el-button type="primary" @click="save">保 存</el-button>
      </div>
    </el-dialog>
    </div>
</template>
<script>
export default {
  name: "detailcenter",
  created() {
    console.log(this.$route.params.id);
    const _this = this;
    this.$http
      .get(
        "/api/sushuang/thinkphp/index.php/Home/detail/index?id=" +
          this.$route.params.id
      )
      .then(function(response) {
        _this.details = response.data.data;
        console.log(response.data.data);
      });
    // .catch(function(error) {
    //   console.log(error);
    // });
  },
  data() {
    return {
      details: {
        title: "",
        q_detail: "",
        process: "",
        status: "",
        classification: "",
        q_type: "",
        submit_time: "",
        now_person: "",
        solv_question: ""
      },
      dialogFormVisible: false,
      dialogFormVisible2: false,
      form: {
        id: this.$route.params.id,
        now_person: "",
        solv_question: "",
        status: ""
      },
      formLabelWidth: "120px",
      options: {
        now_person: {},
        process: {
          0: "未处理",
          1: "处理中",
          2: "已解决"
        },
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
        },
        status: {
          0: "关闭",
          1: "开启"
        },
        status2: {
          0: "开启",
          1: "关闭"
        }
      }
    };
  },
  methods: {
    modify() {
      this.$router.push("/functi/" + this.$route.params.id);
    },
    async changestatus() {
      const _this = this;
      if (this.details.status == 0) {
        this.form.status = 1;
      } else {
        this.form.status = 0;
      }
      await this.$http
        .post("/api/sushuang/thinkphp/index.php/Home/trans/index", {
          id: _this.form.id,
          status: _this.form.status
        })
        .then(function(response) {
          _this.details.status = _this.form.status;
          console.log(response);
        });
    },
    save() {
      this.dialogFormVisible2 = false;
      const _this = this;
      this.$http
        .post("/api/sushuang/thinkphp/index.php/Home/trans/index", {
          id: _this.form.id,
          solv_question: _this.form.solv_question
        })
        .then(function(response) {
          _this.details.solv_question = _this.form.solv_question;
          _this.form.solv_question = "";
          console.log(response);
        });
    },
    liuzhuan() {
      this.dialogFormVisible = true;
      const _this = this;
      this.$http
        .get("/api/sushuang/thinkphp/index.php/Home/type/index")
        .then(function(response) {
          _this.options.now_person = response.data.data.now_person;
          console.log(response);
        });
    },
    solv_question() {
      this.dialogFormVisible2 = true;
    },
    conf() {
      this.dialogFormVisible = false;
      const _this = this;
      this.$http
        .post("/api/sushuang/thinkphp/index.php/Home/trans/index", {
          id: _this.form.id,
          now_person: _this.form.now_person
        })
        .then(function(response) {
          _this.details.now_person = _this.form.now_person;
          _this.form.now_person = "";
          console.log(response);
        });
    }
  }
};
</script>
<style scoped>
p {
  padding-left: 200px;
}
.h1 {
  font-size: 20px;
  padding-left: 100px;
  color: #409eff;
}
.bu {
  padding: 20px 300px;
}
</style>