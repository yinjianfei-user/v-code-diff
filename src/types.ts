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

export interface DiffStat {
  additionsNum: number
  deletionsNum: number
}
export interface SplitViewerChange {
  changes: SplitDiffLine[]
  stat: DiffStat
}

export interface UnifiedViewerChange {
  changes: UnifiedLine[]
  stat: DiffStat
}
