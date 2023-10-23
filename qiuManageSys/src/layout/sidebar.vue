<!--
 * @Descripttion: 
 * @version: 
 * @Author: JnannJ
 * @Date: 2023-10-22 17:52:03
 * @LastEditors: JnannJ
 * @LastEditTime: 2023-10-23 10:39:25
-->
<template>
  <div class="sidebar">
    <el-menu
      :default-active="onRoutes"
      router
      class="el-menu-vertical-demo"
      :collapse="sidedbar.collapse"
      active-text-color="#89FBFE"
      background-color="#202442"
      text-color="#fff"
    >
      <template v-for="item in routerItems">
        <template v-if="item.subs">
          <el-sub-menu :index="item.index" :key="item.index">
            <template #title>
              <span>
                {{ item.title }}
              </span>
            </template>
            <template v-for="subItem in item.subs">
              <el-sub-menu
                v-if="subItem.subs"
                :index="subItem.index"
                :key="subItem.index"
              >
                <template #title>{{ subItem.title }}</template>
                <el-menu-item
                  v-for="(threeItem, i) in subItem.subs"
                  :key="i"
                  :index="threeItem.index"
                >
                  {{ threeItem.title }}
                </el-menu-item>
              </el-sub-menu>
              <el-menu-item v-else :index="subItem.index">
                {{ subItem.title }}
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <el-icon>
              <component :is="item.icon"></component>
            </el-icon>
            <template #title>{{ item.title }}</template>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { useSidebar } from "../store/sidebar";
import { computed } from "vue";
import { useRoute } from "vue-router";
const routerItems = [
  {
    icon: "Odometer",
    index: "/dashboard",
    title: "首页",
  },
  {
    icon: "Calendar",
    index: "1",
    title: "空页面",
    subs: [
      {
        index: "/context",
        title: "常用表格",
      },
      {
        index: "2",
        title: "三级菜单",
        subs: [
          {
            index: "/context",
            title: "空页面",
          },
        ],
      },
    ],
  },
];
const route = useRoute();
const onRoutes = computed(() => {
  console.log("route :>> ", route.path);
  return route.path;
});

const sidedbar = useSidebar();
</script>

<style scoped>
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 250px;
  font-family: "alibb";
  font-weight: 500;
}

.sidebar > ul {
  height: 100%;
 
}


.el-menu-item {
 
  font-size: 16px !important;
 
 
}
 .el-sub-menu__title{
  font-size: 16px !important;
}

</style>
