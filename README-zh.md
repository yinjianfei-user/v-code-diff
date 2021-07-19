# VCodeDiff

Vue2 / Vue3 可用的 code diff 插件  
是 [vue-code-diff](https://github.com/ddchef/vue-code-diff) 的 vue3 版本， 参考了大幅代码，在这里表示感谢

# 注意
这个插件会慢于 [vue-code-diff](https://github.com/ddchef/vue-code-diff) ，因为 [vue-code-diff](https://github.com/ddchef/vue-code-diff) 使用了 highlight.js 版本 9，而这个版本有安全问题。本插件使用版本 10，但测试发现性能不如版本 9

我正在寻找解决或缓解的办法，可能是将高亮作为一个可选项，或使用异步任务来渲染（这样不阻塞ui），亦或是从性能上解决问题。如果你有好想法，也欢迎提出 issue 或 pr 协助我。

# 如何安装？

安装 `v-code-diff`

```shell
# With NPM
npm i v-code-diff

# With Yarn
yarn add v-code-diff
```

Vue2 用户需要额外安装 composition-api

```shell
yarn add @vue/composition-api
```

# 开始使用

### `Vue3`

#### 注册为全局组件

```ts
import {createApp} from 'vue'
import CodeDiff from 'v-code-diff'

app
  .use(CodeDiff)
  .mount('#app')
```

然后

```vue
<template>
  <code-diff
    :old-string="'12345'"
    :new-string="'3456'"
    file-name="test.txt"
    output-format="side-by-side" />
</template>
```

#### 单独引入

在 vue 文件中

```vue

<template>
  <code-diff
    :old-string="'12345'"
    :new-string="'3456'"
    file-name="test.txt"
    output-format="side-by-side" />
</template>
<script lang="ts">
import {defineComponent} from 'vue'
import { CodeDiff } from 'v-code-diff'

export default defineComponent({
  components: {
    CodeDiff
  }
})
</script>

```

### `Vue2`

#### 注册为全局组件

```ts
import Vue from 'vue';
import CodeDiff from 'v-code-diff'

Vue.use(CodeDiff);
```

#### 单独引入

```vue
<template>
  <code-diff
    :old-string="'12345'"
    :new-string="'3456'"
    file-name="test.txt"
    output-format="side-by-side" />
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

# 参数说明

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| old-string| 陈旧的字符串| string  |   —    |    —     |
| new-string| 新的字符串| string  |   —    |    —     |
| context| 不同地方上下间隔多少行不隐藏 | number  |   —    |    —     |
| outputFormat| 展示的方式 | string  |   line-by-line，side-by-side    |    line-by-line     |
| drawFileList | 展示对比文件列表 | boolean | - | false |
| renderNothingWhenEmpty | 当无对比时不渲染 | boolean | - | false |
| fileName | 文件名 | string | - |  |
| isShowNoChange | 当无对比时展示源代码 | boolean | - | false |

# 与 vue-code-diff 的不同

* 支持 `vue3`
* 更小的打包体积

# Todo
-[ ] 更快的渲染速度

# 变更记录

### 0.0.4
1. 修复一些浏览器下渲染异常的问题（例如 safari）
### 0.0.3
1. Prop: `context` 默认值由 5 改为 10
2. 修复可能存在的 line-height 冲突 (如 [antd-vue](https://github.com/vueComponent/ant-design-vue) 的 `antd.css` )
### 0.0.1
第一个版本.


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
