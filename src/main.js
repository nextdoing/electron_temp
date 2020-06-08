import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'

import './style/index.less'
import components from "./components"

if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.config.productionTip = false

// 全局注册自有组件
Object.keys(components).forEach(key => {
  var name = key.replace(/(\w)/, v => v.toUpperCase());
  Vue.component(`s${name}`, components[key]);
});

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
