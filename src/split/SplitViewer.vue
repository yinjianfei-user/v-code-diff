<script setup lang="ts">
import type { SplitViewerChange } from '../types'
import SplitLine from './SplitLine.vue'

const props = defineProps<{
  diffChange: SplitViewerChange
}>()
</script>

<template>
  <table class="file-diff-split diff-table">
    <colgroup>
      <col width="44">
      <col>
      <col width="44">
      <col>
    </colgroup>
    <tbody>
      <SplitLine v-for="(item, index) in diffChange" :key="index" :split-line="item" />
    </tbody>
  </table>
</template>

<style scoped></style>
