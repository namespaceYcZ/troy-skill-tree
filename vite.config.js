import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()], /**
     * 在生产中服务时的基本公共路径。
     * @default '/'
     */
    base: './',
})
