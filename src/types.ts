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

export interface SplitLineChange {
  fold?: boolean
  left: DiffLine
  right: DiffLine
}

export interface UnifiedLineChange {
  fold?: boolean
  type: DiffType
  code: string
  delNum?: number
  addNum?: number
}

export interface DiffStat {
  additionsNum: number
  deletionsNum: number
}
export interface SplitViewerChange {
  changes: SplitLineChange[]
  stat: DiffStat
}

export interface UnifiedViewerChange {
  changes: UnifiedLineChange[]
  stat: DiffStat
}
