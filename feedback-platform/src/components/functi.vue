<template>
<div id="functi">
	<ul class="nav nav-tabs">
	  <li role="presentation" class="dropdown">
	    <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
	    你好xxx <span class="caret"></span>
	    </a>
	    <ul class="dropdown-menu">
	      <li><a href="#" @click.prevent = "">更换账号</a></li>
	      <li><a href="#">退出</a></li>
	    </ul>
	  </li>
	  <li role="presentation" class="active"><a href="#" @click.prevent = "" >提交页</a></li>
	  <li role="presentation"><a href="#" @click.prevent = "">列表页</a></li>
	  <li role="presentation" class = "disabled"><a href="#" @click.prevent = "">详情页</a></li>
	  <li role="presentation"><a href="#" @click.prevent = "">分析页</a></li>
	</ul>
	<subm></subm>
</div>
</template>
<script>
	import subm from './base/subm.vue'
	export default {
		name:'functi',
		components:{
			subm
		}
	}
</script>