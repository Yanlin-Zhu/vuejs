**vuejs三个特点**

1、响应式-双向绑定

2、组件化-模块化

3、单文件组件-js、css、html存在于一个文件内

**vuejs实例对象**

var my = new vue（{

​	el:'#app',//对象装载的位置

​	template:'<div>{{fruit}}</div>',//使用的模板

​	data:{

​		fruit:'apple'//被代理到生成的实例对象里

​	}

}）

my.fruit //'apple'

**vue实例的生命周期**

![lifecycle](C:\Users\Administrator\Desktop\lifecycle.png)

提供不同时期的钩子函数，在特定节点执行不同特定操作