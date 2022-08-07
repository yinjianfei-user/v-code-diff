<template>
  <div>
    123
    <CodeDiff
      old-string="112"
      new-string="444"
      output-format="side-by-side" />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import CodeDiff from 'v-code-diff'

export default defineComponent({
  components: {
    CodeDiff
  }
})
</script>
