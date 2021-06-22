import typescript from 'rollup-plugin-typescript2'
import vue from 'rollup-plugin-vue'
import { terser } from 'rollup-plugin-terser'
import styles from 'rollup-plugin-styles'

const tsconfigOverride = {
  compilerOptions: { declaration: true }, // 生成.d.ts的文件
  exclude: ['tests/**/*.ts', 'tests/**/*.tsx']
}

export default [{
  input: 'src/lib/index.ts',
  plugins: [typescript({ tsconfigOverride }), vue(), terser(), styles()],
  external: [
    'vue',
    'katex',
    'vue-demi'
  ],
  output: [
    {
      name: 'v-code-diff',
      file: 'dist/v-code-diff.cjs.js',
      format: 'cjs'
    },
    {
      name: 'v-code-diff',
      file: 'dist/v-code-diff.esm.js',
      format: 'esm'
    },
    {
      name: 'v-code-diff',
      file: 'dist/v-code-diff.umd.js',
      format: 'umd',
      globals: {
        'katex': 'katex',
        'vue': 'vue',
        'vue-demi': 'VueDemi'
      },
      exports: 'named'
    }
  ]
}]
