<template>
  <code-diff
    :old-string="`const a = ['1','2','3']`"
    :new-string="`const a = ['1','2','3',4]`"
    file-name="aaa"
    output-format="side-by-side" />
  <code-diff
    :old-string="'12345'"
    :new-string="'3456'"
    file-name="test.txt"
    output-format="side-by-side" />
</template>

<script lang="ts">
import { defineComponent } from 'vue-demi'
import CodeDiff from './lib/v-code-diff/v-code-diff.ts'

export default defineComponent({
  name: 'App',
  components: { CodeDiff }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
