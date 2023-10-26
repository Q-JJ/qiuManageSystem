/*
 * @Descripttion:
 * @version:
 * @Author: JnannJ
 * @Date: 2023-10-20 16:06:56
 * @LastEditors: JnannJ
 * @LastEditTime: 2023-10-25 22:48:28
 */
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { resolve } from "path";
// https://vitejs.dev/config/

import { viteMockServe } from "vite-plugin-mock";

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    viteMockServe({
      supportTs: false,
      logger: false,
      mockPath: "./src/mock/",
    }),
  ],
  resolve: {
    // 设置路径别名
    alias: {
      "@": resolve(__dirname, "./src"),
      "*": resolve(""),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/constant.scss";',
      },
    },
  },
  server: {
    open: true, // 是否自动打开浏览器
    port: 3000, // 端口号

    // 代理解决跨域
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000',  // 接口源地址
        changeOrigin: true,   // 开启跨域
        rewrite: (path => path.replace('/^\/api/', ''))
      },
      '/out':{
        target: 'https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN',  // 接口源地址
        changeOrigin: true,   // 开启跨域
        rewrite: (path => path.replace('/^\/api/', ''))
      }
    }
  }
});
