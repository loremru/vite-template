import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// @ts-ignore
import path from 'path'
import eslintPlugin from 'vite-plugin-eslint'

const eslintOptions = {
  include: ['./**/*.vue', './**/*.js', './**/*.ts'],
  exclude: ['node_modules'],
}
// @ts-ignore

console.log('DI!!!RRR', path.resolve(__dirname, 'src'))

export default defineConfig({
  plugins: [vue(), eslintPlugin(eslintOptions)],
  resolve: {
    alias: [
      {
        find: '@',
        // @ts-ignore
        replacement: path.resolve(__dirname, 'src'),
      },
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/styles/_variables.scss";',
      },
    },
  },
})
