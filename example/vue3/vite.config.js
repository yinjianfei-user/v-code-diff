import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    exclude: ['vue-demi']
  },
  plugins: [
    vue()
  ],
  build: {
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
})
