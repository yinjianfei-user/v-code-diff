import Vue from 'vue'
import App from './App.vue'

import CodeDiff from 'v-code-diff'
Vue.use(CodeDiff)

new Vue({
  render: (h) => h(App)
}).$mount('#app')
