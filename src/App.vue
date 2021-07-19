<template>
  <textarea v-model="oldString" style="width: 49%; height: 400px;" />
  <textarea v-model="newString" style="width: 49%; height: 400px;" />
  <code-diff
    :old-string="oldString"
    :new-string="newString"
    output-format="side-by-side" />
</template>

<script lang="ts">
import { defineComponent } from 'vue-demi'
import CodeDiff from './lib/v-code-diff/v-code-diff.ts'
import { newShortText } from './new-short-text'
import { oldShortText } from './old-short-text'

export default defineComponent({
  name: 'App',
  components: { CodeDiff },
  setup () {
    return {
      oldString: oldShortText,
      newString: newShortText
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
