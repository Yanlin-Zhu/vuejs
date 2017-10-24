const STORAGE_KEY = 'todos-vuejs'//ES6定义常量
export default{
	fetch(){
		return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "[]")
	},
	save(items){
		window.localStorage.setItem(STORAGE_KEY,JSON.stringify(items))
	}
}