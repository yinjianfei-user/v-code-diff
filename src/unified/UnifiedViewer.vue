<script setup lang="ts">
import type { UnifiedViewerChange } from '../types'
import UnifiedLine from './UnifiedLine.vue'

const props = defineProps<{
  diffChange: UnifiedViewerChange
}>()
</script>

<template>
  <div class="file">
    <table class="diff-table">
      <tbody>
        <UnifiedLine v-for="(item, index) in diffChange" :key="index" :line="item" />
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
