import { App } from 'vue-demi'
import CodeDiff from './v-code-diff.js'

CodeDiff.install = (app: App) => {
  app.component(CodeDiff.name, CodeDiff)
}

export default CodeDiff
