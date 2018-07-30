<template>
    <el-card class="box-card">
    <el-form  :inline="true" :model="form">
        <p class = "h1">角色权限管理</p>
        <el-form-item label="管理员权限">
        <el-checkbox-group v-model="checkList1">
            <el-checkbox label="问题提交"></el-checkbox>
            <el-checkbox label="问题修改"></el-checkbox>
            <el-checkbox label="问题答复"></el-checkbox>
            <el-checkbox label="问题流转"></el-checkbox>
            <el-checkbox label="查看问题详情"></el-checkbox>
            <el-checkbox label="问题开启"></el-checkbox>
            <el-checkbox label="问题分配"></el-checkbox>
            <el-checkbox label="查看数据分析"></el-checkbox>
            <el-checkbox label="权限管理" disabled></el-checkbox>
        </el-checkbox-group>
        </el-form-item>
        <el-form-item label="经理权限">
        <el-checkbox-group v-model="checkList2">
            <el-checkbox label="问题提交"></el-checkbox>
            <el-checkbox label="问题修改"></el-checkbox>
            <el-checkbox label="问题答复"></el-checkbox>
            <el-checkbox label="问题流转"></el-checkbox>
            <el-checkbox label="查看问题详情"></el-checkbox>
            <el-checkbox label="问题开启"></el-checkbox>
            <el-checkbox label="问题分配"></el-checkbox>
            <el-checkbox label="查看数据分析"></el-checkbox>
            <el-checkbox label="权限管理" disabled></el-checkbox>
        </el-checkbox-group>
        </el-form-item>
        <el-form-item label="技术权限">
        <el-checkbox-group v-model="checkList3">
            <el-checkbox label="问题提交"></el-checkbox>
            <el-checkbox label="问题修改"></el-checkbox>
            <el-checkbox label="问题答复"></el-checkbox>
            <el-checkbox label="问题流转"></el-checkbox>
            <el-checkbox label="查看问题详情"></el-checkbox>
            <el-checkbox label="问题开启"></el-checkbox>
            <el-checkbox label="问题分配"></el-checkbox>
            <el-checkbox label="查看数据分析"></el-checkbox>
            <el-checkbox label="权限管理" disabled></el-checkbox>
        </el-checkbox-group>
        </el-form-item>
        <el-form-item label="客服权限">
        <el-checkbox-group v-model="checkList4">
            <el-checkbox label="问题提交"></el-checkbox>
            <el-checkbox label="问题修改"></el-checkbox>
            <el-checkbox label="问题答复"></el-checkbox>
            <el-checkbox label="问题流转"></el-checkbox>
            <el-checkbox label="问题开启"></el-checkbox>
            <el-checkbox label="查看问题详情"></el-checkbox>
            <el-checkbox label="问题分配"></el-checkbox>
            <el-checkbox label="查看数据分析"></el-checkbox>
            <el-checkbox label="权限管理" disabled></el-checkbox>
        </el-checkbox-group>
        </el-form-item>
        <el-form-item label="客户权限">
        <el-checkbox-group v-model="checkList5">
            <el-checkbox label="问题提交"></el-checkbox>
            <el-checkbox label="问题修改"></el-checkbox>
            <el-checkbox label="问题答复"></el-checkbox>
            <el-checkbox label="问题流转"></el-checkbox>
            <el-checkbox label="查看问题详情"></el-checkbox>
            <el-checkbox label="问题开启"></el-checkbox>
            <el-checkbox label="问题分配"></el-checkbox>
            <el-checkbox label="查看数据分析"></el-checkbox>
            <el-checkbox label="权限管理" disabled></el-checkbox>
        </el-checkbox-group>
        </el-form-item>
        <p class="h1">用户角色管理</p>
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
        <el-form-item label="角色选择">
            <el-select v-model="form.role" filterable clearable placeholder="请选择">
            <el-option
                v-for="(index, item) in options.role"
                :key="item"
                :label="index"
                :value="index">
            </el-option>
            </el-select>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click = "onsave()">保存</el-button>
        </el-form-item>
    </el-form>
    </el-card>
</template>
<script>
export default {
  name: "managementcenter",
  data() {
    return {
      checkList1: [
        "问题提交",
        "问题修改",
        "问题答复",
        "查看问题详情",
        "问题分配",
        "查看数据分析",
        "问题流转",
        "问题开启",
        "权限管理"
      ],
      checkList2: [
        "问题提交",
        "问题修改",
        "问题答复",
        "查看问题详情",
        "问题分配",
        "查看数据分析"
      ],
      checkList3: [
        "问题提交",
        "问题修改",
        "问题答复",
        "查看问题详情",
        "问题流转"
      ],
      checkList4: [
        "问题提交",
        "问题开启",
        "问题修改",
        "问题答复",
        "查看问题详情",
        "问题流转"
      ],
      checkList5: ["问题提交", "问题修改", "查看问题详情"],
      form: {
        now_person: "",
        role: ""
      },
      options: {
        now_person: {},
        role: {
          0: "管理员",
          1: "经理",
          2: "技术",
          3: "客服",
          4: "客户"
        }
      }
    };
  },
  mounted() {
    const _this = this;
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
    onsave() {
      this.$message({
        message: "保存成功！",
        type: "success"
      });
    }
  }
};
</script>
<style scoped>
.h1 {
  font-size: 20px;
  padding: 20px 50px;
  color: #409eff;
}
.box-card {
  padding: 13px !important;
}
</style>