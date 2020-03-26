import Vue from 'vue'
import App from './App.vue'
import { modalPlugin } from './plugins/modal'

Vue.config.productionTip = false

Vue.use(modalPlugin)

new Vue({
  render: h => h(App)
}).$mount('#app')
