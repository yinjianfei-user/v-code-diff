import { createPatch } from 'diff'
import * as d2h from 'diff2html'

export const createHtml = (oldString, newString, context, outputFormat, drawFileList, renderNothingWhenEmpty, fileName, isShowNoChange) => {
  function wrapCode (html) {
    return html.replace(/<span class="d2h-code-line-ctn">(.+?)<\/span>/g, '<span class="d2h-code-line-ctn"><pre><code>$1</code></pre></span>')
  }
  if (isShowNoChange) {
    oldString = 'File Without Change\tOldString: ======================== \n' + oldString
    newString = 'File Without Change\tNewString: ======================== \n' + newString
  }
  const dd = createPatch(fileName, oldString, newString, '', '', { context: context })
  const html = d2h.html(dd, {
    outputFormat: outputFormat,
    drawFileList: drawFileList,
    matching: 'lines',
    renderNothingWhenEmpty: renderNothingWhenEmpty
  })
  return wrapCode(html)
}
