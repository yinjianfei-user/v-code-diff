import type { HLJSApi } from 'highlight.js'
import type { DefineComponent } from 'vue-demi'

declare const _default: {
  install: (app: any) => void
  hljs: HLJSApi
}

// eslint-disable-next-line
declare const CodeDiff: DefineComponent<{}, {}, any>
export {
  CodeDiff,
}

export default _default
