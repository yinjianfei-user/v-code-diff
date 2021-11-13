<template>
  <div style="display: flex; justify-content: space-around;">
    <textarea v-model="oldString" style="width: 49%; height: 400px;" />
    <textarea v-model="newString" style="width: 49%; height: 400px;" />
  </div>
  <a-form
    style="margin: 10px;"
    layout="inline"
    :model="formState">
    <a-form-item label="文件名(filename)">
      <a-input v-model:value="formState.filename" placeholder="请输入文件名" />
    </a-form-item>
    <a-form-item label="差异化范围(context)">
      <a-input-number
        v-model:value="formState.context"
        :min="0" />
    </a-form-item>
    <a-form-item label="显示方式(outputFormat)">
      <a-radio-group v-model:value="formState.outputFormat">
        <a-radio value="line-by-line">line-by-line</a-radio>
        <a-radio value="side-by-side">side-by-side</a-radio>
      </a-radio-group>
    </a-form-item>
    <a-form-item label="差异级别(diffStyle)">
      <a-radio-group v-model:value="formState.diffStyle">
        <a-radio value="word">word</a-radio>
        <a-radio value="char">char</a-radio>
      </a-radio-group>
    </a-form-item>
    <a-form-item label="显示文件列表(drawFileList)">
      <a-switch v-model:checked="formState.drawFileList" />
    </a-form-item>
    <a-form-item label="内容为空时不显示(renderNothingWhenEmpty)">
      <a-switch v-model:checked="formState.renderNothingWhenEmpty" />
    </a-form-item>
    <a-form-item label="内容无变化时显示源代码(isShowNoChange)">
      <a-switch v-model:checked="formState.isShowNoChange" />
    </a-form-item>
    <a-form-item label="移除字符串前后空白字符(trim)">
      <a-switch v-model:checked="formState.trim" />
    </a-form-item>
    <a-form-item>
      <a-button type="link" @click="resetText">重置文本(reset text)</a-button>
    </a-form-item>
    <a-form-item>
      <a-button type="link" @click="clearText">清空文本(clear text)</a-button>
    </a-form-item>
  </a-form>
  <code-diff
    :highlight="true"
    :old-string="oldString"
    :new-string="newString"
    :context="formState.context"
    :file-name="formState.filename"
    :diff-style="formState.diffStyle"
    :output-format="formState.outputFormat"
    :draw-file-list="formState.drawFileList"
    :render-nothing-when-empty="formState.renderNothingWhenEmpty"
    :is-show-no-change="formState.isShowNoChange"
    :trim="formState.trim"
    @before-render="renderStart"
    @after-render="renderEnd" />
</template>

<script lang="ts">
import { defineComponent, reactive, ref, watch } from 'vue-demi'
import CodeDiff from './lib/v-code-diff/v-code-diff.ts'
import { newShortText } from './new-short-text'
import { oldShortText } from './old-short-text'

export default defineComponent({
  name: 'App',
  components: { CodeDiff },
  setup () {
    const oldString = ref(oldShortText.value)
    const newString = ref(newShortText.value)
    if (localStorage.getItem('oldString')) {
      oldString.value = localStorage.getItem('oldString')
    }
    if (localStorage.getItem('newString')) {
      newString.value = localStorage.getItem('newString')
    }
    const formState = reactive({
      filename: 'package.json',
      context: 10,
      outputFormat: 'side-by-side',
      diffStyle: 'word',
      drawFileList: true,
      renderNothingWhenEmpty: false,
      isShowNoChange: false,
      trim: false
    })
    const renderStart = () => {
      console.log('render start: ' + new Date().toLocaleString())
    }
    const renderEnd = () => {
      console.log('render end: ' + new Date().toLocaleString())
    }
    const resetText = () => {
      localStorage.removeItem('oldString')
      localStorage.removeItem('newString')
      oldString.value = oldShortText.value
      newString.value = newShortText.value
    }
    const clearText = () => {
      localStorage.removeItem('oldString')
      localStorage.removeItem('newString')
      oldString.value = ''
      newString.value = ''
    }
    watch(oldString, () => localStorage.setItem('oldString', oldString.value))
    watch(newString, () => localStorage.setItem('newString', newString.value))
    return {
      formState,
      oldString,
      newString,
      renderStart,
      renderEnd,
      resetText,
      clearText
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
