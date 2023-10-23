<!--
 * @Descripttion: 
 * @version: 
 * @Author: JnannJ
 * @Date: 2023-07-11 11:09:20
 * @LastEditors: JnannJ
 * @LastEditTime: 2023-10-22 18:38:49
-->
<template>
	<v-header/>
	<v-sidebar/>
    <div class="content-box" :class="{ 'content-collapse': sidebar.collapse }" > 
		 
		<div class="content">
			<router-view v-slot="{ Component }">
				<transition name="move" mode="out-in">
					<keep-alive>
						<component :is="Component"></component>
					</keep-alive>
				</transition>
			</router-view>
		</div>
	</div>
</template>


<script setup lang="ts">
import { useSidebar } from "../store/sidebar";
import vHeader from "./header.vue";
import vSidebar from "./sidebar.vue"
// 组合式setup 使用 引入子组件，则无需使用components注册

const sidebar = useSidebar()

</script>


<style scoped>

</style>