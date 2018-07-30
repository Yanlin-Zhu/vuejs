<template>
<div id="image">
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
    <el-container style="height:100%; overflow:auto;">
        <el-aside width="220px"  style="height:100%; border-right: 2px solid #409eff;">
            <nav2></nav2>
        </el-aside>
        <el-container style="height:100%; overflow:auto;">
            <el-main>
              <el-card class="box-card">
                <p class="h1">解决率堆叠折线图（问题类型分类）</p>
                <div id="myChart" :style="{width: '700px', height: '700px'}"></div>
                <p class="h1">解决率堆叠折线图（反馈类型分类）</p>
                <div id="myChart2" :style="{width: '700px', height: '600px'}"></div>
              </el-card>
            </el-main>
        </el-container>
    </el-container>
</div>
</template>
<script>
import nav2 from "./base/nav2.vue";
export default {
  name: "image1",
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      let myChart2 = this.$echarts.init(document.getElementById("myChart2"));
      // 绘制图表
      myChart.setOption({
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: [
            "宣传促销问题",
            "物流问题",
            "生产日期滞后",
            "产品包装问题",
            "产品质量问题"
          ]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "2107年9月",
            "2107年10月",
            "2107年11月",
            "2107年12月",
            "2108年1月",
            "2108年2月"
          ]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "宣传促销问题",
            type: "line",
            stack: "总量",
            data: [0.89, 0.91, 0.95, 0.94, 0.98, 0.96]
          },
          {
            name: "物流问题",
            type: "line",
            stack: "总量",
            data: [0.91, 0.95, 0.92, 0.99, 0.97, 0.95]
          },
          {
            name: "生产日期滞后",
            type: "line",
            stack: "总量",
            data: [0.85, 0.87, 0.88, 0.92, 0.9, 0.91]
          },
          {
            name: "产品包装问题",
            type: "line",
            stack: "总量",
            data: [0.94, 0.92, 0.96, 0.97, 0.98, 0.98]
          },
          {
            name: "产品质量问题",
            type: "line",
            stack: "总量",
            data: [0.88, 0.88, 0.95, 0.91, 0.95, 0.96]
          }
        ]
      });
      myChart2.setOption({
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["表扬", "建议", "抱怨", "投诉"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "2107年9月",
            "2107年10月",
            "2107年11月",
            "2107年12月",
            "2108年1月",
            "2108年2月"
          ]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "表扬",
            type: "line",
            stack: "总量",
            data: [1, 1, 1, 1, 1, 1]
          },
          {
            name: "建议",
            type: "line",
            stack: "总量",
            data: [0.85, 0.86, 0.87, 0.86, 0.9, 0.92]
          },
          {
            name: "抱怨",
            type: "line",
            stack: "总量",
            data: [0.87, 0.9, 0.95, 0.92, 0.93, 0.93]
          },
          {
            name: "投诉",
            type: "line",
            stack: "总量",
            data: [0.94, 0.92, 0.95, 0.99, 0.98, 0.98]
          }
        ]
      });
    }
  },
  components: {
    nav2
  }
};
</script>

<style scoped>
#image {
  height: 100%;
}
#myChart,
#myChart2 {
  display: inline-block;
  margin: 20px 66px;
}
.el-header {
  height: 5%;
}
.el-container {
  height: 90%;
}
.h1 {
  font-size: 20px;
  padding-left: 50px;
  color: #409eff;
}
</style>