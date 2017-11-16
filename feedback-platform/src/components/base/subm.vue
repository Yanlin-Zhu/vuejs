<template>
	<div id="subm">
		<div class="classification">
			<p>
				<i class = "text-danger">*</i>问题类型：
				<span class = "c1" v-for="(item , index) in items1" :class="{myActive:items1[index].isMyActive}" @click="addActive1(index)">{{item.message}}</span>
			</p>
			<p>
				<i class = "text-danger">*</i>反馈分类：
				<span class = "c2" v-for="(item , index) in items2" :class="{myActive:items2[index].isMyActive}" @click="addActive2(index)">{{item.message}}</span>
			</p>
		</div>
		<div class="discribe">
			<p><i class = "text-danger">*</i>问题描述：</p>
			<textarea></textarea>
		</div>
		<div class="discribe-img">
			<p>上传图片：</p>
			<input id = "loadBox" type="file" name="" @change="updataFile">
		</div>
		<div class="btnCantainer">
			<button type="button" class="btn btn-primary"> 提 交 </button>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		created(){
			var lightbox = new Lightbox({
				speed:"fast",
				maxWidth:900,
				maxHeight:600
			});
		},
		name:'subm',
		data(){
			return {
				items1:[
					{isMyActive:false,message:'产品功效问题'},
					{isMyActive:false,message:'产品质量问题'},
					{isMyActive:false,message:'产品包装问题'}
				],
				items2:[
					{isMyActive:false,message:'投诉'},
					{isMyActive:false,message:'抱怨'},
					{isMyActive:false,message:'建议'},
					{isMyActive:false,message:'表扬'}
				]
			}
		},
		methods:{
			addActive1(index){
				$.each(this.items1,function(ind,obj){
					obj.isMyActive = false;
				})
				this.items1[index].isMyActive = true;
			},
			addActive2(index){
				$.each(this.items2,function(ind,obj){
					obj.isMyActive = false;
				})
				this.items2[index].isMyActive = true;
			},
			// http://blog.csdn.net/qingyjl/article/details/52003567
			updataFile(e){
				var file = e.target.files[0];//获取File对象，这里是上传单张图片，[0]代表第一张图片。如果多张，就是一个var file = e.target.files;
			    var type = file.type.split('/')[0];//按照惯例，不应该由前端判断格式，因为这里是根据后缀名判断的，修改后缀名仍旧可以上传，理应由后端根据文件格式来判断。
			    if (type !='image') {
			        alert('请上传图片');
			        return;
			    }
			    var size = Math.round(file.size / 1024 / 1024);
			    if (size > 3) {
			        alert('图片大小不得超过3M');
			        return;
			    };
			    var d = new Date()
				var reader = new FileReader(); //新建FileReader对象
				reader.readAsDataURL(file); //读取为base64
				reader.onload = function (e) {
			        var dataURL = reader.result,
			            image = '<img  class = "js-lightbox img-thumbnail" data-role = "lightbox" data-source = "'+dataURL+'" data-group = "group-1" data-id = "'+d.getTime()+'" data-caption = "bdsghaudashdbas" style="width:140px;height:140px;" src="'+dataURL+'" alt="反馈图片"/>', //预览图片
			            text = '<span>"'+dataURL+'"</span>'; 
			     	$(".discribe-img").append(image);      
			    };
			}
		}
	}
</script>
<style scoped>
.classification{
	border-bottom: 1px solid #eee;
}
.classification,.discribe,.discribe-img{
	padding: 5px 10%;
}
.classification p,.discribe p,.discribe-img p{
	padding:10px;
}
.discribe textarea{
	width: 400px;
	height: 100px;
	display: inline-block;
	margin-left: 50px;
	resize:none;
	overflow:auto;
}
.classification p span{
	display: inline-block;
	padding: 5px 5px;
	border-radius: 4px;
	cursor:pointer;
}
.classification p span:hover{
	color: #fff;
	background-color: #509ee2;
}
.myActive{
	color: #fff;
	background-color: #509ee2;
}
.btnCantainer{
	padding-top: 30px;
	text-align: center;
}
</style>