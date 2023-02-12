<script setup lang="ts">
import { computed } from 'vue-demi'
import { createSplitDiff, createUnifiedDiff } from './utils'
import UnifiedViewer from './unified/UnifiedViewer.vue'
import SplitViewer from './split/SplitViewer.vue'

import './style.scss'
import 'highlight.js/scss/vs.scss'

interface Props {
  newString: string
  oldString: string
  language?: string
  context?: number
  diffStyle?: 'word' | 'char'
  outputFormat?: 'line-by-line' | 'side-by-side'
  trim?: boolean
  noDiffLineFeed?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  language: 'plaintext',
  context: 10,
  diffStyle: 'word',
  outputFormat: 'line-by-line',
  trim: false,
  noDiffLineFeed: false,
})

const isUnifiedViewer = computed(() => props.outputFormat === 'line-by-line')

const oldString = computed(() => {
  const value = props.trim ? props.oldString.trim() : props.oldString
  return props.noDiffLineFeed ? value.replace(/(\r\n)/g, '\n') : value
})
const newString = computed(() => {
  const value = props.trim ? props.newString.trim() : props.newString
  return props.noDiffLineFeed ? value.replace(/(\r\n)/g, '\n') : value
})

const diffChange = computed(() =>
  isUnifiedViewer.value
    ? createUnifiedDiff(oldString.value, newString.value, props.language, props.diffStyle, props.context)
    : createSplitDiff(oldString.value, newString.value, props.language, props.diffStyle, props.context),
)
</script>

<template>
  <div class="code-diff-view">
    <UnifiedViewer v-if="isUnifiedViewer" :diff-change="diffChange" />
    <SplitViewer v-else :diff-change="diffChange" />
  </div>
</template>

<style lang="scss">

</style>
