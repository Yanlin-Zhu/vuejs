<template>
<el-card class="box-card">
	<el-form :inline="true" :model="form" class="demo-form-inline">
  <el-form-item label="问题类型">
    <el-select v-model.number="form.q_type" filterable clearable placeholder="请选择">
      <el-option
        v-for="(index, item) in options.q_type"
        :key="item"
        :label="index"
        :value="Number(item)">
      </el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="反馈分类">
    <el-select v-model.number="form.classification" filterable clearable placeholder="请选择">
      <el-option
        v-for="(index, item) in options.classification"
        :key="item"
        :label="index"
        :value="Number(item)">
      </el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="当前处理人">
    <el-select v-model="form.now_person" filterable clearable placeholder="请选择">
      <el-option
        v-for="(index, item) in options.now_person"
        :key="item"
        :label="index"
        :value="index">
      </el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="订单状态">
    <el-select v-model.number="form.status" filterable clearable placeholder="请选择">
      <el-option
        v-for="(index, item) in options.status"
        :key="item"
        :label="index"
        :value="Number(item)">
      </el-option>
    </el-select>
  </el-form-item>
	<el-form-item label="问题处理进度">
    <el-select v-model.number="form.process" filterable clearable placeholder="请选择">
      <el-option
        v-for="(index, item) in options.process"
        :key="item"
        :label="index"
        :value="Number(item)">
      </el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="标题">
    <el-input v-model="form.title" placeholder="请输入内容"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">搜索</el-button>
  </el-form-item>
	</el-form>

	<el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="id"
      label="id">
    </el-table-column>
    <el-table-column
      prop="title"
      label="标题">
    </el-table-column>
    <el-table-column prop="q_type" label="问题类型">
      <template slot-scope="scope">
        {{options.q_type[scope.row.q_type]}}
      </template>
    </el-table-column>
    <el-table-column prop="classification" label="反馈分类">
      <template slot-scope="scope">
        {{options.classification[scope.row.classification]}}
      </template>
    </el-table-column>
    <el-table-column
      prop="submit_time"
      label="提交时间">
    </el-table-column>
    <el-table-column
      prop="now_person"
      label="当前处理人">
    </el-table-column>
    <el-table-column prop="process" label="问题处理进度">
      <template slot-scope="scope">
        {{options.process[scope.row.process]}}
      </template>
    </el-table-column>
    <el-table-column prop="status" label="状态">
      <template slot-scope="scope">
        {{options.status[scope.row.status]}}
      </template>
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
      </template>
    </el-table-column>
  </el-table>

	<div class="block">
  <el-pagination
    @current-change = "onpagechange()"
    layout="prev, pager, next"
    :current-page.sync="form.page_number"
    :page-size="10"
    :total="total">
  </el-pagination>
  </div>
</el-card>
</template>
<script>
export default {
  name: "tablelist",
  data() {
    return {
      options: {
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
        now_person: {}
      },
      form: {
        classification: "",
        now_person: "",
        process: "",
        status: "",
        type: "",
        title: "",
        page_number: 1
      },
      tableData: [],
      total: 0
    };
  },
  mounted() {
    const _this = this;
    this.getlist();
    this.$http
      .get("/api/sushuang/thinkphp/index.php/Home/type/index")
      .then(function(response) {
        _this.options.now_person = response.data.data.now_person;
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  methods: {
    getlist(params) {
      const _this = this;
      this.$http
        .post("/api/sushuang/thinkphp/index.php/Home/list/index", params)
        .then(function(response) {
          _this.tableData = response.data.data.tabledata;
          _this.total = response.data.data.total;
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    handleClick(row) {
      this.$router.push("/detail/" + row.id);
      console.log(row);
    },
    onSubmit() {
      this.getlist(this.form);
    },
    onpagechange() {
      this.getlist(this.form);
    }
  }
};
</script>