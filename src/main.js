import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios';
import ElementUI from 'element-ui';
import VueI18n from 'vue-i18n';
import {message} from './components/common/i18n';
import 'element-ui/lib/theme-chalk/index.css';// 默认主题
// import '../static/css/theme-green/index.css';// 浅绿色主题
import './assets/css/icon.css';
import './components/common/directives';
import 'babel-polyfill';

Vue.config.productionTip = false
Vue.use(VueI18n);
Vue.use(ElementUI, {
  size: 'small'
});
Vue.prototype.$axios = axios;

const i18n = new VueI18n({
  locale: 'zh',
  messages
});

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
