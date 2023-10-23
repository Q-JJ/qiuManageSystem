/*
 * @Descripttion: 
 * @version: 
 * @Author: JnannJ
 * @Date: 2023-10-20 16:06:56
 * @LastEditors: JnannJ
 * @LastEditTime: 2023-10-23 11:38:34
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

import App from './App.vue'
import router from './router';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/font/font.css'
import '@/styles/index.scss'
import '@/styles/NormalTheme.scss' // 普通主题


const app = createApp(App)
app.use(createPinia());
app.use(router);
app.use(ElementPlus)



// 注册elementplus图标 https://element-plus.org/zh-CN/component/icon.html#%E6%B3%A8%E5%86%8C%E6%89%80%E6%9C%89%E5%9B%BE%E6%A0%87
// 使用 el-icon 为 SVG 图标提供属性或者直接使用svg
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}

app.mount('#app')