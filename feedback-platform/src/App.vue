<template>
  <div id = "app">
    <router-view></router-view>
    <!-- <router-view name = "login"></router-view> -->
    <!-- <router-link :to="{path:'/'}">to hello</router-link>
    <router-link :to="{path:'login'}">to login</router-link> -->
  </div>
</template>
<script>
export default {
  // mounted() {
  //   const s = document.createElement('script');
  //   s.type = 'text/javascript';
  //   s.src = 'https://g.alicdn.com/dingding/dinglogin/0.0.2/ddLogin.js';
  //   document.body.appendChild(s);
  //   var hash = md5("111111");
  // },
  name: "app"
};
</script>


