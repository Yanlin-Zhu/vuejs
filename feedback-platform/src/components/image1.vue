<template>
<div id="image1">
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
              <el-card class="box-card">
                <div id="myChart" :style="{width: '400px', height: '400px'}"></div>
                <div id="myChart2" :style="{width: '400px', height: '400px'}"></div>
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
        title: {
          text: "问题分类饼状图",
          left: "center",
          top: 20,
          textStyle: {
            color: "#000"
          }
        },

        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },

        visualMap: {
          show: false,
          min: 80,
          max: 600,
          inRange: {
            colorLightness: [0, 1]
          }
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "50%"],
            data: [
              { value: 250, name: "宣传促销问题" },
              { value: 310, name: "物流问题" },
              { value: 212, name: "生产日期滞后" },
              { value: 335, name: "产品包装问题" },
              { value: 180, name: "产品质量问题" }
            ].sort(function(a, b) {
              return a.value - b.value;
            }),
            roseType: "radius",
            label: {
              normal: {
                textStyle: {
                  color: "rgba(255, 255, 255)"
                }
              }
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: "rgba(255, 255, 255)"
                },
                smooth: 0.2,
                length: 10,
                length2: 20
              }
            },
            itemStyle: {
              normal: {
                color: "#c23531",
                shadowBlur: 200,
                shadowColor: "rgba(0, 0, 0, 0)"
              }
            },

            animationType: "scale",
            animationEasing: "elasticOut",
            animationDelay: function(idx) {
              return Math.random() * 200;
            }
          }
        ]
      });
      myChart2.setOption({
        title: {
          text: "反馈分类饼状图",
          left: "center",
          top: 20,
          textStyle: {
            color: "#000"
          }
        },

        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },

        visualMap: {
          show: false,
          min: 80,
          max: 600,
          inRange: {
            colorLightness: [0, 1]
          }
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "50%"],
            data: [
              { value: 150, name: "表扬" },
              { value: 274, name: "建议" },
              { value: 335, name: "抱怨" },
              { value: 300, name: "投诉" }
            ].sort(function(a, b) {
              return a.value - b.value;
            }),
            roseType: "radius",
            label: {
              normal: {
                textStyle: {
                  color: "rgba(255, 255, 255)"
                }
              }
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: "rgba(255, 255, 255)"
                },
                smooth: 0.2,
                length: 10,
                length2: 20
              }
            },
            itemStyle: {
              normal: {
                color: "#c23531",
                shadowBlur: 200,
                shadowColor: "rgba(0, 0, 0, 0)"
              }
            },

            animationType: "scale",
            animationEasing: "elasticOut",
            animationDelay: function(idx) {
              return Math.random() * 200;
            }
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
#image1 {
  height: 100%;
}
#myChart,
#myChart2 {
  display: inline-block;
  margin: 20px 60px;
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