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
  diffStyle: 'word' | 'char'
} & {}>

export function useDebounceFn (fn, delay) {
  let timer
  return function () {
    const context = this
    const args = arguments
    clearTimeout(timer)
    timer = setTimeout(function () {
      fn.apply(context, args)
    }, delay)
  }
}

export const createHtml = (props: Props) => {
  let oldString = props.oldString
  let newString = props.newString
  if (props.isShowNoChange) {
    oldString = 'File Without Change\tOldString: ======================== \n' + oldString
    newString = 'File Without Change\tNewString: ======================== \n' + newString
  }
  const dd = createPatch(props.fileName, oldString, newString, '', '', { context: props.context })
  return d2h.html(dd, {
    outputFormat: props.outputFormat,
    drawFileList: props.drawFileList,
    matching: 'lines',
    diffStyle: props.diffStyle,
    renderNothingWhenEmpty: props.renderNothingWhenEmpty
  })
}

async function listElements (element: Element): Promise<Element[]> {
  return new Promise(resolve => {
    setTimeout(() => {
      const elements = element.querySelectorAll('.d2h-wrapper .d2h-code-line-ctn')
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

export async function highlightElements (element: Element, props, ctx: SetupContext<any>) {
  ctx.emit('before-render')
  const elements = await listElements(element)
  const promises = Array.from(elements).map(el => highlightElement(el))
  await Promise.all(promises)
  ctx.emit('after-render')
}
