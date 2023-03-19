<script setup lang="ts">
import type { UnifiedLineChange } from '../types'
import UnifiedLine from './UnifiedLine.vue'

const props = defineProps<{
  diffChange: UnifiedLineChange[]
}>()
</script>

<template>
  <table class="diff-table">
    <tbody>
      <UnifiedLine v-for="(item, index) in diffChange" :key="index" :line="item" />
    </tbody>
  </table>
</template>

<style scoped></style>
