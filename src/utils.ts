import * as Diff from 'diff'
import type { Change } from 'diff'
import hljs from './highlight'
import { DiffType } from './types'
import type { DiffLine, SplitViewerChange, UnifiedViewerChange } from './types'

const MODIFIED_START_TAG = '<code-diff-modified>'
const MODIFIED_CLOSE_TAG = '</code-diff-modified>'

const startEntity = MODIFIED_START_TAG.replace('<', '&lt;').replace('>', '&gt;')
const closeEntity = MODIFIED_CLOSE_TAG.replace('<', '&lt;').replace('>', '&gt;')

const lineType = (diff: Diff.Change): DiffType => {
  if (diff === undefined)
    return DiffType.EQUAL
  if (diff.added)
    return DiffType.ADD
  if (diff.removed)
    return DiffType.DELETE
  return DiffType.EQUAL
}

const renderWords = (prev?: string, current?: string, diffStyle = 'word'): string => {
  if (typeof prev === 'undefined')
    return current!
  if (typeof current === 'undefined')
    return prev!

  type RenderFunctionType = (prev: string, old: string) => Change[]
  const func: RenderFunctionType = diffStyle === 'char' ? Diff.diffChars : Diff.diffWords
  return func(prev, current)
    .filter(word => lineType(word) !== DiffType.DELETE)
    .map(word =>
      lineType(word) === DiffType.ADD ? `${MODIFIED_START_TAG}${word.value}${MODIFIED_CLOSE_TAG}` : word.value,
    )
    .join('')
}

const getHighlightCode = (language: string, code: string) => {
  const hasModifiedTags = code.match(new RegExp(`(${MODIFIED_START_TAG}|${MODIFIED_CLOSE_TAG})`, 'g'))

  if (!hasModifiedTags)
    return hljs.highlight(code, { language }).value

  /**
   * Explore highlight DOM extracted from pure code and compare the text with the original code to generate the highlight code
   */
  let originalCode = code // original code with modified tags
  const pureCode = code.replace(new RegExp(`(${MODIFIED_START_TAG}|${MODIFIED_CLOSE_TAG})`, 'g'), '') // Without modified tags
  const pureElement = document.createElement('div')
  pureElement.innerHTML = hljs.highlight(pureCode, { language }).value // Highlight DOM without modified tags

  // Modified span is created per highlight operator and causes it to continue
  let innerModifiedTag = false

  const diffElements = (node: HTMLElement) => {
    node.childNodes.forEach((child) => {
      if (child.nodeType === Node.ELEMENT_NODE)
        diffElements(child as HTMLElement)

      // Compare text nodes and check changed text
      if (child.nodeType === Node.TEXT_NODE) {
        if (!child.textContent)
          return

        let oldContent = child.textContent
        let newContent = ''

        if (innerModifiedTag) {
          // If it continues within the modified range
          newContent = newContent + MODIFIED_START_TAG
        }

        while (oldContent.length) {
          if (originalCode.startsWith(MODIFIED_START_TAG)) {
            // Add modified start tag
            originalCode = originalCode.slice(MODIFIED_START_TAG.length)
            newContent = newContent + MODIFIED_START_TAG
            innerModifiedTag = true // Start modified
            continue
          }
          if (originalCode.startsWith(MODIFIED_CLOSE_TAG)) {
            // Add modified close tag
            originalCode = originalCode.slice(MODIFIED_CLOSE_TAG.length)
            newContent = newContent + MODIFIED_CLOSE_TAG
            innerModifiedTag = false // End modified
            continue
          }

          // Add words before modified tag
          const hasModifiedTag = originalCode.match(new RegExp(`(${MODIFIED_START_TAG}|${MODIFIED_CLOSE_TAG})`))
          const originalCodeDiffLength = (hasModifiedTag && hasModifiedTag.index) ? hasModifiedTag.index : originalCode.length
          const nextDiffsLength = Math.min(originalCodeDiffLength, oldContent.length)

          newContent = newContent + originalCode.substring(0, nextDiffsLength)
          originalCode = originalCode.slice(nextDiffsLength)
          oldContent = oldContent.slice(nextDiffsLength)
        }

        if (innerModifiedTag) {
          // If the loop is finished without a modified close, it is still within the modified range.
          newContent = newContent + MODIFIED_CLOSE_TAG
        }

        child.textContent = newContent // put as entity code because change textContent
      }
    })
  }
  diffElements(pureElement)

  return pureElement.innerHTML
    .replace(new RegExp(startEntity, 'g'), '<span class="x">')
    .replace(new RegExp(closeEntity, 'g'), '</span>')
}

export function createSplitDiff(
  oldString: string,
  newString: string,
  language = 'plaintext',
  diffStyle = 'word',
  context = 10,
) {
  const newEmptySplitDiff = (): DiffLine => ({ type: DiffType.EMPTY })
  const newSplitDiff = (type: DiffType, num: number, code: string): DiffLine => ({ type, num, code })

  const changes = Diff.diffLines(oldString, newString)

  let delNum = 0
  let addNum = 0
  let skip = false

  const result: SplitViewerChange = []
  for (let i = 0; i < changes.length; i++) {
    if (skip) {
      skip = false
      continue
    }

    const [cur, next] = [changes[i], changes[i + 1]]
    const [curType, nextType] = [lineType(cur), lineType(next)]

    const curLines = cur.value.replace(/\n$/, '').split('\n')

    // 最后一处 diff 的特殊处理
    if (next === undefined) {
      for (const line of curLines) {
        let left: DiffLine = newEmptySplitDiff()
        let right: DiffLine = newEmptySplitDiff()

        const highlightCode = getHighlightCode(language, line)
        if (curType === DiffType.EQUAL) {
          delNum++
          addNum++

          left = newSplitDiff(DiffType.EQUAL, delNum, highlightCode)
          right = newSplitDiff(DiffType.EQUAL, addNum, highlightCode)
        }
        if (curType === DiffType.DELETE) {
          delNum++

          left = newSplitDiff(DiffType.DELETE, delNum, highlightCode)
          right = newEmptySplitDiff()
        }
        if (curType === DiffType.ADD) {
          addNum++

          left = newEmptySplitDiff()
          right = newSplitDiff(DiffType.ADD, addNum, highlightCode)
        }

        result.push({ left, right })
      }
      break
    }

    // 正常逻辑
    // 处理当前 diff 为相等的情况
    if (curType === DiffType.EQUAL) {
      for (const line of curLines) {
        delNum++
        addNum++

        const highlightCode = getHighlightCode(language, line)
        result.push({
          left: newSplitDiff(DiffType.EQUAL, delNum, highlightCode),
          right: newSplitDiff(DiffType.EQUAL, addNum, highlightCode),
        })
      }
    }

    const nextLines = next.value.replace(/\n$/, '').split('\n')
    // 处理当前 diff 为删除的情况
    if (curType === DiffType.DELETE) {
      if (nextType === DiffType.EQUAL) {
        for (const line of curLines) {
          delNum++

          result.push({
            left: newSplitDiff(DiffType.DELETE, delNum, getHighlightCode(language, line)),
            right: newEmptySplitDiff(),
          })
        }
      }
      if (nextType === DiffType.ADD) {
        skip = true
        const maxCount = Math.max(cur.count!, next.count!)
        for (let j = 0; j < maxCount; j++) {
          if (j < cur.count!)
            delNum++

          if (j < next.count!)
            addNum++

          const [curLine, nextLine] = [curLines[j], nextLines[j]]

          const leftLine = curLines.length === nextLines.length ? renderWords(nextLine, curLine, diffStyle) : curLine
          const rightLine = curLines.length === nextLines.length ? renderWords(curLine, nextLine, diffStyle) : nextLine

          const left
            = j < cur.count!
              ? newSplitDiff(DiffType.DELETE, delNum, getHighlightCode(language, leftLine))
              : newEmptySplitDiff()
          const right
            = j < next.count!
              ? newSplitDiff(DiffType.ADD, addNum, getHighlightCode(language, rightLine))
              : newEmptySplitDiff()

          result.push({ left, right })
        }
      }
    }
    // 处理当前 diff 为添加的情况
    if (curType === DiffType.ADD) {
      for (const line of curLines) {
        addNum++
        result.push({
          left: newEmptySplitDiff(),
          right: newSplitDiff(DiffType.ADD, addNum, getHighlightCode(language, line)),
        })
      }
    }
  }

  if (oldString === newString) {
    for (let i = 0; i < result.length; i++)
      result[i].fold = false

    return result
  }

  for (let i = 0; i < result.length; i++) {
    const line = result[i]
    if (line.left.type === DiffType.DELETE || line.right.type === DiffType.ADD) {
      const [start, end] = [Math.max(i - context, 0), Math.min(i + context + 1, result.length)]
      for (let j = start; j < end; j++)
        result[j].fold = false
    }
    if (line.fold === undefined)
      line.fold = true
  }

  const realResult = []
  for (let i = 0; i < result.length; i++) {
    const line = result[i]
    if (line.fold === false) {
      realResult.push(line)
      continue
    }
    if (line.fold === true) {
      if (realResult[realResult.length - 1]?.fold !== true)
        realResult.push(line)
    }
  }

  return realResult
}

export function createUnifiedDiff(
  oldString: string,
  newString: string,
  language = 'plaintext',
  diffStyle = 'word',
  context = 2,
) {
  const changes = Diff.diffLines(oldString, newString)

  let delNum = 0
  let addNum = 0
  let skip = false

  const result: UnifiedViewerChange = []
  for (let i = 0; i < changes.length; i++) {
    if (skip) {
      skip = false
      continue
    }

    const [cur, next] = [changes[i], changes[i + 1]]
    const [curType, nextType] = [lineType(cur), lineType(next)]

    const curLines = cur.value.replace(/\n$/, '').split('\n')

    // 最后一行的特殊处理
    if (next === undefined) {
      for (const line of curLines) {
        if (curType === DiffType.EQUAL) {
          delNum++
          addNum++
        }
        if (curType === DiffType.DELETE)
          delNum++

        if (curType === DiffType.ADD)
          addNum++

        const code = getHighlightCode(language, line)

        result.push({
          type: curType,
          code,
          addNum: curType === DiffType.DELETE ? undefined : addNum,
          delNum: curType === DiffType.ADD ? undefined : delNum,
        })
      }
      break
    }

    // 正常逻辑
    // 处理当前 diff 为相等的情况
    if (curType === DiffType.EQUAL) {
      for (const line of curLines) {
        delNum++
        addNum++
        const code = getHighlightCode(language, line)

        result.push({ type: DiffType.EQUAL, code, delNum, addNum })
      }
    }

    const nextLines = next.value.replace(/\n$/, '').split('\n')
    // 处理当前 diff 为删除的情况
    if (curType === DiffType.DELETE) {
      // 下一处差异为新增，且删除与新增行数相同时，对每行依次 diff
      if (nextType === DiffType.ADD && curLines.length === nextLines.length) {
        for (let j = 0; j < curLines.length; j++) {
          const curLine = curLines[j]
          const nextLine = nextLines[j]
          delNum++

          const code = getHighlightCode(language, renderWords(nextLine, curLine, diffStyle))
          result.push({ type: DiffType.DELETE, code, delNum })
        }

        for (let j = 0; j < nextLines.length; j++) {
          const curLine = curLines[j]
          const nextLine = nextLines[j]
          addNum++

          const code = getHighlightCode(language, renderWords(curLine, nextLine, diffStyle))
          result.push({ type: DiffType.ADD, code, addNum })
        }

        skip = true
      }
      else {
        // 否则单独渲染每行
        for (const line of curLines) {
          delNum++

          const code = getHighlightCode(language, line)
          result.push({ type: DiffType.DELETE, code, delNum })
        }
      }
    }
    // 处理当前 diff 为添加的情况
    if (curType === DiffType.ADD) {
      for (const line of curLines) {
        addNum++
        const code = getHighlightCode(language, line)

        result.push({ type: DiffType.ADD, code, addNum })
      }
    }
  }

  for (let i = 0; i < result.length; i++) {
    const line = result[i]
    if (line.type === DiffType.DELETE || line.type === DiffType.ADD) {
      const [start, end] = [Math.max(i - context, 0), Math.min(i + context + 1, result.length)]
      for (let j = start; j < end; j++)
        result[j].fold = false
    }
    if (line.fold === undefined)
      line.fold = true
  }

  if (oldString === newString) {
    for (let i = 0; i < result.length; i++)
      result[i].fold = false

    return result
  }

  const realResult = []
  for (let i = 0; i < result.length; i++) {
    const line = result[i]
    if (line.fold === false) {
      realResult.push(line)
      continue
    }
    if (line.fold === true) {
      if (i === 0 || realResult[realResult.length - 1]?.fold !== true)
        realResult.push(line)
    }
  }

  return realResult
}
