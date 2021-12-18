/*
 * @Author: yuyongxing
 * @Date: 2021-10-18 11:40:35
 * @LastEditors: yuyongxing
 * @LastEditTime: 2021-12-18 18:14:14
 * @Description:
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { toast } from "./utils/utils"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './utils/permission' // 权限
import './utils/common.css'

Vue.use(ElementUI);

// 全局方法挂载
Vue.prototype.$toast = toast
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
