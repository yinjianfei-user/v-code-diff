import fs from 'node:fs'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

const pkg = JSON.parse(fs.readFileSync('../package.json', 'utf-8'))

export default defineConfig({
  plugins: [Vue(), Components({ resolvers: [AntDesignVueResolver()], dts: false })],
  resolve: {
    alias: {
      'vue': 'vue3',
      'vue-demi': '../node_modules/vue-demi/lib/v3/index.mjs',
    },
  },
  define: {
    // 注入版本信息到全局变量
    __APP_VERSION__: JSON.stringify(pkg.version),
  },
})
