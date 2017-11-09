<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-12 col-md-12">aaa</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container-fluid{
  /*margin-top: 50%;*/
  padding: 5px;
  border-top: 2px solid #5da5eb;
  border-bottom: 2px solid #1e31a3;
  overflow: hidden;
}
.col-lg-12{
  padding:0;
  height:50%;
  min-height:400px;
  background:url('../assets/images/bgc.jpg') no-repeat fixed 0 0;
  background-size:100% 100%;
  background-origin:content-box;
}
</style>
