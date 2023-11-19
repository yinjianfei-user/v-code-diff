<script lang="ts" setup>
import { version } from 'vue-demi'
import { reactive, ref, watch } from 'vue'
import { newShortText } from './text/new-short-text'
import { oldShortText } from './text/old-short-text'

const formState = reactive({
  language: 'json',
  theme: 'light',
  diffStyle: 'word',
  outputFormat: 'side-by-side',
  context: 10,
  trim: false,
  noDiffLineFeed: false,
  filename: 'package.json',
  hideHeader: false,
  hideStat: false,
})

const oldString = ref(oldShortText.value)
const newString = ref(newShortText.value)
if (localStorage.getItem('oldString'))
  oldString.value = localStorage.getItem('oldString')

if (localStorage.getItem('newString'))
  newString.value = localStorage.getItem('newString')

function resetText() {
  localStorage.removeItem('oldString')
  localStorage.removeItem('newString')
  oldString.value = oldShortText.value
  newString.value = newShortText.value
}
function clearText() {
  localStorage.removeItem('oldString')
  localStorage.removeItem('newString')
  oldString.value = ''
  newString.value = ''
}
watch(oldString, () => localStorage.setItem('oldString', oldString.value))
watch(newString, () => localStorage.setItem('newString', newString.value))

function printEvent(e) {
  // eslint-disable-next-line no-console
  console.log('diff finished! below is data:')
  // eslint-disable-next-line no-console
  console.log(e)
}
</script>

<template>
  <p align="center">
    Vue version: {{ version }}. CodeDiff version: 1.7.1
  </p>
  <div style="display: flex; justify-content: space-evenly;">
    <textarea v-model="oldString" style="width: 48vw;" :rows="20" />
    <textarea v-model="newString" style="width: 48vw;" :rows="20" />
  </div>
  <a-form style="margin: 10px;" layout="inline" :model="formState">
    <a-row :gutter="16">
      <a-col :md="12" :sm="24">
        <a-form-item label="文件名(filename)">
          <a-input style="width: 16vw;" v-model:value="formState.filename" placeholder="请输入文件名" />
        </a-form-item>
      </a-col>
      <a-col :md="12" :sm="24">
        <a-form-item label="语言(langauge)">
          <a-select v-model:value="formState.language" style="width: 12vw;">
            <a-select-option
              v-for="item in ['plaintext', 'json', 'yaml', 'javascript', 'java', 'python', 'sql', 'xml', 'bash']"
              :key="item" :value="item">
              {{ item }}
            </a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
      <a-col :md="12" :sm="24">
        <a-form-item label="主题模式(theme)">
          <a-radio-group v-model:value="formState.theme">
            <a-radio value="light">
              日间模式(light)
            </a-radio>
            <a-radio value="dark">
              夜间模式(dark)
            </a-radio>
          </a-radio-group>
        </a-form-item>
      </a-col>
      <a-col :md="12" :sm="24">
        <a-form-item label="差异化范围(context)">
          <a-input-number v-model:value="formState.context" :min="0" style="width: 12vw;" />
        </a-form-item>
      </a-col>
      <a-col :md="12" :sm="24">
        <a-form-item label="显示方式(outputFormat)">
          <a-radio-group v-model:value="formState.outputFormat">
            <a-radio value="line-by-line">
              line-by-line
            </a-radio>
            <a-radio value="side-by-side">
              side-by-side
            </a-radio>
          </a-radio-group>
        </a-form-item>
      </a-col>
      <a-col :md="12" :sm="24">
        <a-form-item label="差异级别(diffStyle)">
          <a-radio-group v-model:value="formState.diffStyle">
            <a-radio value="word">
              word
            </a-radio>
            <a-radio value="char">
              char
            </a-radio>
          </a-radio-group>
        </a-form-item>
      </a-col>
      <a-col :md="12" :sm="24">
        <a-form-item label="移除字符串前后空白字符(trim)">
          <a-switch v-model:checked="formState.trim" />
        </a-form-item>
      </a-col>
      <a-col :md="12" :sm="24">
        <a-form-item label="不 diff 换行符(noDiffLineFeed)">
          <a-switch v-model:checked="formState.noDiffLineFeed" />
        </a-form-item>
      </a-col>
      <a-col :md="12" :sm="24">
        <a-form-item label="隐藏首部(hide Header)">
          <a-switch v-model:checked="formState.hideHeader" />
        </a-form-item>
      </a-col>
      <a-col :md="12" :sm="24">
        <a-form-item label="隐藏统计信息(hide Statistics)">
          <a-switch v-model:checked="formState.hideStat" />
        </a-form-item>
      </a-col>
      <a-col :md="12" :sm="24">
        <a-form-item>
          <a-button style="margin-right: 10px;" type="default" @click="resetText">
            重置文本(reset text)
          </a-button>
          <a-button type="default" @click="clearText">
            清空文本(clear text)
          </a-button>
        </a-form-item>
      </a-col>
    </a-row>
  </a-form>
  <CodeDiff
    :theme="formState.theme"
    :old-string="oldString"
    :new-string="newString"
    :language="formState.language"
    :diff-style="formState.diffStyle"
    :output-format="formState.outputFormat"
    :context="formState.context"
    :trim="formState.trim"
    :no-diff-line-feed="formState.noDiffLineFeed"
    :filename="formState.filename"
    :hide-header="formState.hideHeader"
    :hide-stat="formState.hideStat"
    @diff="printEvent"
  />
</template>

<style lang="scss">
body {
  margin: 0;
}
</style>
