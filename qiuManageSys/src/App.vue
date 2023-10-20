<!--
 * @Descripttion: 
 * @version: 
 * @Author: JnannJ
 * @Date: 2023-10-20 16:06:56
 * @LastEditors: JnannJ
 * @LastEditTime: 2023-10-20 18:12:26
-->
<template>
  <el-config-provider :locale="zhCn">
        <router-view />
    </el-config-provider>
</template>

<script setup lang="ts">
import { ElConfigProvider } from 'element-plus';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
</script>

<style>
@import './assets/css/main.css';
@import './assets/css/color-dark.css';
</style>
