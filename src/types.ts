export const enum DiffType {
  EQUAL = 'equal',
  DELETE = 'removed',
  ADD = 'added',
  EMPTY = 'empty',
}

export interface DiffLine {
  type: DiffType
  code?: string
  num?: number
}

export interface SplitDiffLine {
  fold?: boolean
  left: DiffLine
  right: DiffLine
}

export interface UnifiedLine {
  fold?: boolean
  type: DiffType
  code: string
  delNum?: number
  addNum?: number
}

export type SplitViewerChange = SplitDiffLine[]
export type UnifiedViewerChange = UnifiedLine[]
