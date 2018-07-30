<template>
      <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      :router="true"
      @open="handleOpen"
      @close="handleClose">
     <el-menu-item index="/home">
        <i class="el-icon-star-on"></i>
        <span slot="title">主页</span>
      </el-menu-item>
      <el-menu-item index="/functi">
        <i class="el-icon-edit"></i>
        <span slot="title">问题提交页</span>
      </el-menu-item>
      <el-menu-item index="/listpage">
        <i class="el-icon-document"></i>
        <span slot="title">列表页</span>
      </el-menu-item>
      <el-submenu index="/image">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>数据分析页</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/image/image1">饼图</el-menu-item>
          <el-menu-item index="/image/image2">折线图</el-menu-item>
				</el-menu-item-group>
      </el-submenu>
			<el-menu-item index="/management">
        <i class="el-icon-setting"></i>
        <span slot="title">权限管理页</span>
      </el-menu-item>
    </el-menu>
</template>
<script>
export default {
  name: "nav2",
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath, this.$route.path);
    }
  }
};
</script>
