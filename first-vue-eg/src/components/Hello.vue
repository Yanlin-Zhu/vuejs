<template>
  <div class="hello">
    <h1>{{title}}</h1>
    <input type="text" v-model="newItem" v-on:keyup.enter="addNew">
    <ul>
      <li v-for="item in items" v-bind:class="{finished:item.isFinished}" v-on:click="toggleFinish(item)">{{item.label}}</li>
    </ul>
  </div>
</template>

<script>
import Store from '../store'
export default {
  name: 'hello',
  data () {
    return {
      title: 'this is a todo list',
      items:Store.fetch(),
      newItem:''
    }
  },
  watch:{
    items:{
      handler:function(items){
        Store.save(this.items)
      },
      deep:true
    }
  },
  methods: {
    toggleFinish:function(item){
      item.isFinished = !item.isFinished
    },
    addNew:function(){
      this.items.push({
        label:this.newItem,
        isFinished:false
      })
      this.newItem = ""
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.finished{
  text-decoration: underline;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
}

li {
  cursor: pointer;
}

a {
  color: #42b983;
}
</style>
