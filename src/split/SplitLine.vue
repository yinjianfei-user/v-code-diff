<script setup lang="ts">
import { DiffType } from '../types'
import type { SplitLineChange } from '../types'

const props = defineProps<{
  splitLine: SplitLineChange
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
  <tr v-if="splitLine.fold">
    <td class="blob-num blob-num-hunk" colspan="1">
      >
    </td>
    <td class="blob-code blob-code-inner blob-code-hunk" colspan="3" align="left">
      ⋯
    </td>
  </tr>
  <tr v-else>
    <template v-for="line in [splitLine.left, splitLine.right]">
      <!-- eslint-disable -->
      <template v-if="line.type === DiffType.EMPTY">
        <td class="blob-num blob-num-empty empty-cell" />
        <td class="blob-code blob-code-empty empty-cell" />
      </template>
      <template v-else>
        <td
          class="blob-num"
          :class="{
            'blob-num-deletion': line.type === DiffType.DELETE,
            'blob-num-addition': line.type === DiffType.ADD,
            'blob-num-context': line.type === DiffType.EQUAL,
          }"
        >
          {{ line.num }}
        </td>
        <td
          class="blob-code"
          :class="{
            'blob-code-deletion': line.type === DiffType.DELETE,
            'blob-code-addition': line.type === DiffType.ADD,
            'blob-code-context': line.type === DiffType.EQUAL,
          }"
        >
          <span
            class="blob-code-inner blob-code-marker"
            :data-code-marker="getCodeMarker(line.type)"
            v-html="line.code"
          />
        </td>
      </template>
      <!-- eslint-enable -->
    </template>
  </tr>
</template>

<style lang="scss">
</style>
