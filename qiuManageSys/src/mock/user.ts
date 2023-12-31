/*
 * @Descripttion: 
 * @version: 
 * @Author: JnannJ
 * @Date: 2023-10-25 15:23:04
 * @LastEditors: JnannJ
 * @LastEditTime: 2023-10-25 17:08:22
 */
//createUserList:次函数执行会返回一个数组
function createUserList() {
    return [
      {
        userId: 1,
        username: "admin",
        password: "123456",
        token: "ZHESHICESHITOKEN",
      }
    ]
  }
  export default [
    {
      url: "/api/user/login", 
      method: "post", 
      response: ({ body }: { body: any }) => {
        //获取请求体携带过来的用户名与密码
        const { username, password } = body;
        console.log('body :>> ', username);
        console.log('body :>> ', password);
        //调用获取用户信息函数,用于判断是否有此用户
        const checkUser = createUserList().find(
          (item) => item.username === username && item.password === password
        );
        //没有用户返回失败信息
        if (!checkUser) {
          return { code: 201, data: { message: "账号或者密码不正确" } };
        }
        //如果有返回成功信息
        const { token } = checkUser;
        return { code: 200, data: { token } };
      },
    }
  ]