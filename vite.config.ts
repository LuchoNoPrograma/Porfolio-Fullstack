import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from "vite-svg-loader";
import {fileURLToPath} from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader()],
  /*resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },*/
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/scss/_variables.scss";`
      }
    }
  }
})
