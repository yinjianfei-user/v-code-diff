<script lang="ts" setup>
import { version } from 'vue-demi'
import { reactive } from 'vue'

// import { oldLongText } from '../demo/text/old-long-text'
// import { newLongText } from '../demo/text/new-long-text'

const form = reactive({
  // oldString: oldLongText,
  // newString: newLongText,
  oldString: '123\n123\n123\n456\n123\n123\n123\n123\n123\n123\n123\n',
  newString: '123\n123\n123\n123\n123\n123\n123\n123\n123\n123\n123\n',
  language: 'plaintext',
  diffStyle: 'word',
  outputFormat: 'line-by-line',
  context: 3,
})
</script>

<template>
  <p align="center">
    Vue version: {{ version }}
  </p>
  <div style="display: flex; justify-content: space-evenly">
    <textarea v-model="form.oldString" style="width: 48vw;" :rows="20" />
    <textarea v-model="form.newString" style="width: 48vw;" :rows="20" />
  </div>
  <CodeDiff
    :old-string="form.oldString"
    :new-string="form.newString"
    :language="form.language"
    output-format="side-by-side"
    :diff-style="form.diffStyle"
    :context="form.context"
  />
</template>

<style>
body > div {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  color: #2c3e50;
}
</style>
