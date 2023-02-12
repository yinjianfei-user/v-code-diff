<script lang="ts" setup>
import type { UnifiedLine } from '../types'
import { DiffType } from '../types'

const props = defineProps<{
  line: UnifiedLine
}>()

const getCodeMarker = (type: DiffType) => {
  if (type === DiffType.DELETE)
    return '-'
  if (type === DiffType.ADD)
    return '+'
  return ''
}
</script>

<template>
  <tr v-if="line.fold">
    <td class="blob-num blob-num-empty empty-cell">
      >
    </td>
    <td class="blob-num blob-num-empty empty-cell">
      >
    </td>
    <td class="blob-code blob-code-empty empty-cell" align="left">
      ⋯
    </td>
  </tr>
  <tr v-else>
    <td
      class="blob-num"
      :class="{
        'blob-num-deletion': line.type === DiffType.DELETE,
        'blob-num-addition': line.type === DiffType.ADD,
        'blob-num-context': line.type === DiffType.EQUAL,
      }"
    >
      {{ line.delNum }}
    </td>
    <td
      class="blob-num"
      :class="{
        'blob-num-deletion': line.type === DiffType.DELETE,
        'blob-num-addition': line.type === DiffType.ADD,
        'blob-num-context': line.type === DiffType.EQUAL,
      }"
    >
      {{ line.addNum }}
    </td>
    <td
      class="blob-code"
      :class="{
        'blob-code-deletion': line.type === DiffType.DELETE,
        'blob-code-addition': line.type === DiffType.ADD,
        'blob-code-context': line.type === DiffType.EQUAL,
      }"
    >
      <span class="blob-code-inner blob-code-marker" :data-code-marker="getCodeMarker(line.type)" v-html="line.code" />
    </td>
  </tr>
</template>
