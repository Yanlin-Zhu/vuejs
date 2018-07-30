// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.min'
import './assets/js/lightbox'
import './assets/css/lightbox.css'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vuex from 'vuex'
import echarts from 'echarts'
import Qs from 'qs'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
// axios.defaults.baseURL = 'http://www.weilongyun.cn/';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// 创建一个axios实例
var instance = axios.create({
  // #config里面有这个transformRquest，这个选项会在发送参数前进行处理。
  // #这时候我们通过Qs.stringify转换为表单查询参数
  transformRequest: [function (data) {
    data = Qs.stringify(data);
    return data;
  }],
  // #设置Content-Type
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
})

Vue.prototype.$http = instance
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Vuex);



var store = new Vuex.Store({
  state: {
    NewMsg: {
      Msgs: [
        {
          title: '暂无消息',
          content: '暂无消息！',
          url: '#no_msg',
          id: 'no_msg'
        }
      ]
    },
  },
  mutations: {
    modifyMsg(state, Obj) {
      if (state.NewMsg.Msgs[0].id === 'no_msg') {
        state.NewMsg.Msgs.shift();
      }
      var obj = {
        title: Obj.title,
        content: Obj.content
      };
      obj.id = 'Msg_' + Obj.id;
      obj.url = '#' + obj.id;
      state.NewMsg.Msgs.push(obj);
    }
  },
  actions: {
    fetchMsg(context) {
      $.ajax({
        url: 'PHP/GetMsgs.php',
        type: 'GET',
        data: {},
        dataType: 'json',

        success: function (response) {
          if (typeof response === 'string') {
            response = JSON.parse(response);
          }
          console.log(response);
          $(response).each(function (k, v) {
            // console.log(v.id+v.title+v.content);
            context.commit('modifyMsg', v);
          });
        }
      });
    }
  }
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
