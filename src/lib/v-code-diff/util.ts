import * as Diff2Html from 'diff2html'
import { createPatch } from 'diff'
import 'highlight.js/styles/googlecode.css'
import 'diff2html/bundles/css/diff2html.min.css'

export const createHtml = (oldString, newString, context, outputFormat, drawFileList, renderNothingWhenEmpty, fileName, isShowNoChange) => {
  function highlight (html) {
    return html.replace(/<span class="d2h-code-line-ctn">(.+?)<\/span>/g, '<span class="d2h-code-line-ctn"><code>$1</code></span>')
  }
  if (isShowNoChange) {
    oldString = 'File Without Change\tOldString: ======================== \n' + oldString
    newString = 'File Without Change\tNewString: ======================== \n' + newString
  }
  const dd = createPatch(fileName, oldString, newString, '', '', { context: context })
  const outStr = Diff2Html.parse(dd, {
    outputFormat: outputFormat,
    drawFileList: drawFileList,
    matching: 'lines',
    renderNothingWhenEmpty: renderNothingWhenEmpty
  })
  const html = Diff2Html.html(outStr, {
    outputFormat: outputFormat,
    drawFileList: drawFileList,
    matching: 'lines',
    renderNothingWhenEmpty: renderNothingWhenEmpty
  })
  return highlight(html)
}
