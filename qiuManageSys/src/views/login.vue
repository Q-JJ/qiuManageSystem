<!--
 * @Descripttion: 
 * @version: 
 * @Author: JnannJ
 * @Date: 2023-10-25 17:29:36
 * @LastEditors: JnannJ
 * @LastEditTime: 2023-10-25 23:48:55
-->
<template>
  <div class="login_page" :style="bg+')no-repeat center center'">
    <section class="form_contianer">
      <div class="titleArea">
        <img class="logo" :src="logo" alt="湫的知识海洋" />
        <span class="title">湫的知识海洋</span>
      </div>
      <el-form
        ref="login"
        class="loginForm"
        :rules="rules"
        :model="param"
        status-icon
      >
        <el-form-item prop="username" class="login-item">
          <el-input
            v-model="param.username"
            class="area"
            type="text"
            placeholder="用户名"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password" class="login-item">
          <el-input
            v-model="param.password"
            class="area"
            type="password"
            placeholder="密码"
            @keyup.enter="submitForm(login)"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="submitForm(login)"
            class="submit_btn"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </section>
  </div>
</template>

<script setup lang="ts">


import logo from "@/assets/img/cat.png";
import { onMounted, reactive, ref } from "vue";
import { getUserInfo,getBingImg } from "@/api";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
 
import type { FormInstance, FormRules } from "element-plus";
const bg = ref()


onMounted(async()=>{
  await getBingImg().then((res: any) => {
     bg.value = "background:url("+"https://cn.bing.com/" +res.data.images[0].url
   })
   .catch((err: any) => console.log(err));

  console.log('aaa :>> ');

})



// 定义路由，路由跳转
const router = useRouter();
// 定义用户登录接口信息
interface loginInfo {
  username: string;
  password: string;
}

// param参数
const param = reactive<loginInfo>({
  username: "",
  password: "",
});

// 登录表单规则
const rules: FormRules = {
	username: [
		{
			required: true,
			message: '请输入用户名',
			trigger: 'blur'
		}
	],
	password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
};

const login = ref<FormInstance>();
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate(async (valid: boolean) => {
    if (valid) {
        const data = { username: param.username, password: param.password };
      const res = await getUserInfo(data);
      if (res.data && res.data.code == 200) {
        ElMessage.success("登录成功");
        localStorage.setItem("ms_username", param.username);
        router.push("/");
      } else {
        ElMessage.error("账号或密码错误~");
        return false;
      }
    } else {
      return false;
    }
  });
};



</script>

<style lang="scss" scoped>
.login_page {
  position: absolute;
  width: 100%;
  height: 100%;
 
  background-size: 100% 100%;
}
.form_contianer {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  width: 370px;
  border-radius: 5px;
  padding: 25px;
  text-align: center;
  .titleArea {
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-size: 22px;
    width: 100%;
    padding-bottom: 20px;
    .logo {
      width: 60px;
      margin-right: 10px;
    }
    .title {
      i {
        color: #2a8cc3;
      }
    }
  }

  .loginForm {
    .submit_btn {
      width: 100%;
      padding: 13px 0;
      font-size: 16px;
    }
  }
}

.loginForm {
  .el-button--primary {
    background-color: #2a8cc3;
    border: 1px solid #2a8cc3;
  }
}
</style>
