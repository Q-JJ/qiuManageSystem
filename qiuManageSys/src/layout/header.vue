<!--
 * @Descripttion: 
 * @version: 
 * @Author: JnannJ
 * @Date: 2023-10-20 18:48:39
 * @LastEditors: JnannJ
 * @LastEditTime: 2023-10-22 21:26:14
-->
<!--
 * @Descripttion: 
 * @version: 
 * @Author: JnannJ
 * @Date: 2023-10-20 18:48:39
 * @LastEditors: JnannJ
 * @LastEditTime: 2023-10-21 11:41:08
-->
<template>
  <div class="header">
    <div class="collapse-btn" @click="chageCollapse">
      <el-icon v-if="sidebar.collapse"><Expand /></el-icon>
      <el-icon v-else><Fold /></el-icon>
    </div>
    <div class="logo" >湫的知识海洋</div>
    <div class="header-right">
      <div class="user">
       
        <el-dropdown @command="handleCommand" trigger="click" class="username">
          <span class="text">
            {{username}}
           
          </span>
          <template #dropdown>
            <el-dropdown-menu>
							<el-dropdown-item command="user"><el-icon ><UserFilled /></el-icon>个人中心</el-dropdown-item>
							<el-dropdown-item   command="loginout"><el-icon ><SwitchButton
 /></el-icon>退出登录</el-dropdown-item>
						</el-dropdown-menu>
          </template>
        </el-dropdown>
        <el-avatar shape="square" class="user-avator" :size="40" :src="imgurl" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import imgurl from "../assets/img/img.jpg";
import { ElMessage } from "element-plus";

import { useSidebar } from "../store/sidebar";
import { onMounted } from "vue";


const username: string | null = (localStorage.getItem('ms_username'))?"admin":"QJJ";

const sidebar = useSidebar()
const chageCollapse=()=>{
  sidebar.handleCollapse()
}
onMounted(()=>{
  if (document.body.clientWidth < 1500) {
		chageCollapse();
	}
})


const handleCommand = (command: string | number | object) => {
  ElMessage(`click on item ${command}`);
};
</script>

<style scoped>
.header {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  font-size: 22px;
  color: #161824;
  user-select: none;
  .logo {
    float: left;
    width: 250px;
    line-height: 70px;
    cursor:default;
    font-family: "cat";
    font-size: 26px;
  }
}
.collapse-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  float: left;
  padding: 0 21px;
  cursor: pointer;
}
.header-right {
  float: right;
  padding-right: 50px;
}
.user {
  display: flex;
  height: 70px;
  align-items: center;
}
.username{
    color:#161824;
    margin-left: 10px;
   
    .text{
        cursor: pointer;
        display: flex;
       
    } 
    .text:hover{
      color: #89FBFE;
    }
}
.user-avator {
  margin-left: 20px;
  
}
 
</style>
