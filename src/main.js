import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// http
import http from './http';
Vue.prototype.$http = http;

// nor
import '../src/assets/normalize.css';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
