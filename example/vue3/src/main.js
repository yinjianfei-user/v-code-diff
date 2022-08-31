import { createApp } from 'vue'
import App from '@/App.vue'
import CodeDiff from 'v-code-diff'

const app = createApp(App)
app
  .use(CodeDiff)
  .mount('#app')
