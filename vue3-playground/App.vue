<script lang="ts" setup>
import { version } from 'vue-demi'
import { reactive } from 'vue'

const form = reactive({
  oldString: `
123
123
123
456
123
123
123
123
123
123
123
123
`,
  newString: `
123
123
123
452
123
123
123
123
123
123
123
`,
  language: 'javascript',
  diffStyle: 'word',
  outputFormat: 'side-by-side',
  context: 3,
})
</script>

<template>
  <p align="center">
    Vue version: {{ version }}
  </p>
  <textarea v-model="form.oldString" style="width: 48vw" :rows="20" />
  <textarea v-model="form.newString" style="width: 48vw; margin-left: 20px" :rows="20" />
  <CodeDiff
    :old-string="form.oldString"
    :new-string="form.newString"
    :language="form.language"
    :diff-style="form.diffStyle"
    :output-format="form.outputFormat"
    :context="form.context"
  />
</template>

<style>
body > div {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  position: relative;
  font-weight: normal;
}
</style>
