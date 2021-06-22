import { App } from 'vue-demi'
import CodeDiff from './v-code-diff'

const components = [
  CodeDiff
]
const install = (app: App) => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

export {
  install,
  CodeDiff
}

export default { install }
