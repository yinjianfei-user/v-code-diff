import { createPatch } from 'diff'
import * as d2h from 'diff2html'
import hljs from 'highlight.js'
import { SetupContext } from 'vue-demi'

type Props = Readonly<{
  highlight: boolean
  oldString: string
  newString: string
  context: number
  outputFormat: 'side-by-side' | 'line-by-line'
  drawFileList: boolean
  renderNothingWhenEmpty: boolean
  fileName: string
  isShowNoChange: boolean
} & {}>

export const createHtml = (props: Props) => {
  function wrapCode (html) {
    return html.replace(/<span class="d2h-code-line-ctn">(.+?)<\/span>/g, '<span class="d2h-code-line-ctn"><code>$1</code></span>')
  }
  let oldString = props.oldString
  let newString = props.newString
  if (props.isShowNoChange) {
    oldString = 'File Without Change\tOldString: ======================== \n' + oldString
    newString = 'File Without Change\tNewString: ======================== \n' + newString
  }
  const dd = createPatch(props.fileName, oldString, newString, '', '', { context: props.context })
  const html = d2h.html(dd, {
    outputFormat: props.outputFormat,
    drawFileList: props.drawFileList,
    matching: 'lines',
    renderNothingWhenEmpty: props.renderNothingWhenEmpty
  })
  return wrapCode(html)
}

async function listElements (): Promise<Element[]> {
  return new Promise(resolve => {
    setTimeout(() => {
      const elements = document.querySelectorAll('.d2h-wrapper .d2h-code-line-ctn')
      resolve(Array.from(elements))
    }, 0)
  })
}

async function highlightElement (el: Element): Promise<boolean> {
  return new Promise(resolve => {
    setTimeout(() => {
      hljs.highlightElement(<HTMLElement>el)
      resolve(true)
    }, 0)
  })
}

export async function highlightElements (props, ctx: SetupContext<any>) {
  ctx.emit('before-render')
  const elements = await listElements()
  const promises = Array.from(elements).map(el => highlightElement(el))
  await Promise.all(promises)
  ctx.emit('after-render')
}
