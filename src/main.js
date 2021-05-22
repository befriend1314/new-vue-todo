import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import mock from './mock'
mock.start()

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
