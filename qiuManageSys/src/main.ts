/*
 * @Descripttion: 
 * @version: 
 * @Author: JnannJ
 * @Date: 2023-10-20 16:06:56
 * @LastEditors: JnannJ
 * @LastEditTime: 2023-10-20 16:27:51
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')