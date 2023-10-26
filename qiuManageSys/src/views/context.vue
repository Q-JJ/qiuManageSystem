<!--
 * @Descripttion: 
 * @version: 
 * @Author: JnannJ
 * @Date: 2023-10-22 19:27:20
 * @LastEditors: JnannJ
 * @LastEditTime: 2023-10-25 17:17:32
-->
<template>
  <div class="container">
    <div class="l-size content">123123</div>

    <button @click="onUserInfo">获取user信息</button>
  </div>
</template>

<script setup lang="ts" name="context">
import { TestApi, getUserInfo } from "../api";
import { ElMessage } from "element-plus";
TestApi()
  .then((res: any) => console.log(res))
  .catch((err: any) => console.log(err));

const onUserInfo = async () => {
  const data = { username: "admin", password: "123456" };
  let res = await getUserInfo(data);
  ElMessage({
    message: res.data,
    type: "warning",
  });
  console.log("res :>> ", res);
};
</script>

<style lang="scss" scoped>
.content {
  color: $color-red;
}
</style>
