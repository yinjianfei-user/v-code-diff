import { Plugin } from 'vue-demi'
import CodeDiff from './v-code-diff'

const install = (app) => {
  app.component(CodeDiff.name, CodeDiff)
}

export {
  install,
  CodeDiff
}

export default { install } as Plugin
