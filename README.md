# VCodeDiff

[![NPM version](https://img.shields.io/npm/v/v-code-diff.svg?style=flat)](https://www.npmjs.com/package/v-code-diff) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A code diff display plugin, available for Vue2 / Vue3. It is the vue3 version
of [vue-code-diff](https://github.com/ddchef/vue-code-diff), refer to a lot of code, thanks here.

> [🇨🇳 中文文档](./README-zh.md)

# Attention!

This plugin will be slower than [vue-code-diff](https://github.com/ddchef/vue-code-diff)
because [vue-code-diff](https://github.com/ddchef/vue-code-diff) uses
plugin [highlight.js](https://github.com/highlightjs/highlight.js) version 9, and this version has security issues. My
plugin uses version 10, but the test found that the performance is not as good as version 9

I am looking for a solution or mitigation, which may be to use highlighting as an option, or to use asynchronous tasks
to render (so that it does not block the ui), or to solve the problem in terms of performance. If you have a good idea,
you are also welcome to raise an issue or pr to help me.

# Installation

Install `v-code-diff`

```shell
# With NPM
npm i v-code-diff

# With Yarn
yarn add v-code-diff
```

Vue2 developers need install composition-api

```shell
yarn add @vue/composition-api
```

# Getting started

### `Vue3`

#### Register globally

```ts
import { createApp } from 'vue'
import CodeDiff from 'v-code-diff'

app
  .use(CodeDiff)
  .mount('#app')
```

Then

```vue

<template>
  <code-diff
    :old-string="'12345'"
    :new-string="'3456'"
    file-name="test.txt"
    output-format="side-by-side"/>
</template>
```

#### Register locally

in vue file

```vue

<template>
  <code-diff
    :old-string="'12345'"
    :new-string="'3456'"
    file-name="test.txt"
    output-format="side-by-side"/>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { CodeDiff } from 'v-code-diff'

export default defineComponent({
  components: {
    CodeDiff
  }
})
</script>

```

### `Vue2`

#### Register globally

```ts
import Vue from 'vue';
import CodeDiff from 'v-code-diff'

Vue.use(CodeDiff);
```

#### Register locally

```vue

<template>
  <code-diff
    :old-string="'12345'"
    :new-string="'3456'"
    file-name="test.txt"
    output-format="side-by-side"/>
</template>
<script>
import { CodeDiff } from 'v-code-diff'

export default {
  name: 'App',
  components: {
    CodeDiff
  }
}
</script>
```

# Props

| Prop      | Description    | Type      | Optional       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| highlight| control whether to highlight the code | boolean  |   —    |    true     |
| old-string| old string | string  |   —    |    —     |
| new-string| new string| string  |   —    |    —     |
| context| number of show context lines | number  |   —    |    —     |
| outputFormat| show method | string  |   line-by-line，side-by-side    |    line-by-line     |
| drawFileList | show files list | boolean | - | false |
| renderNothingWhenEmpty | render nothing when empty | boolean | - | false |
| fileName | file name | string | - |  |
| isShowNoChange | show raw when no change | boolean | - | false |

# Difference from [vue-code-diff](https://github.com/ddchef/vue-code-diff)

* Support `vue3`
* Smaller package size

# Todo

- [ ] faster render

# ChangeLog

### 0.1.0

1. Add prop `highlight` to control whether to highlight the code.

### 0.0.4

1. Fix the problem of abnormal rendering in some browsers (such as safari)

### 0.0.3

1. Prop: `context` default value changed from 5 to 10
2. fix possible line-height conflict(such as `antd.css` in [antd-vue](https://github.com/vueComponent/ant-design-vue))

### 0.0.1

First Version.

# LICENCE

MIT License

Copyright (c) 2021 Shimada666

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit
persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the
Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
