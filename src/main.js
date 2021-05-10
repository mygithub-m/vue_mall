import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css';
import router from './router/index'
import 'assets/css/colorParm.css'
import 'assets/scss/element-variables.scss';


import store from './store/index'

import Toast from 'components/common/toast/Toast.vue'

Vue.use(ElementUI)

Vue.config.productionTip = false
//事件总线
Vue.prototype.$bus = new Vue()
Vue.prototype.$toast = Toast

new Vue({
  router,
  store,
  render: function (h) {
    return h(App)
  },
}).$mount('#app')
