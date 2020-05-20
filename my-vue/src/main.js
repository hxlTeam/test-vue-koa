import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false

Vue.prototype.$http = axios;

const isProduction = process.env.VUE_APP_MODE === 'production';
localStorage.baseURL = '/api'; // 默认本地
if (isProduction) {
  axios.get('serverConfig.json').then(e => {
    let baseURL = e.data.baseURL;
    localStorage.baseURL = baseURL;
  }).catch(err => {
    console.log(err.message);
  });
  axios.get('versions.json').then(e => {
    let versions = e.data.versions;
    localStorage.versions = versions;
  }).catch(err => {
    console.log(err.message);
  })
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
