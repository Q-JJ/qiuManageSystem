/*
 * @Descripttion: 
 * @version: 
 * @Author: JnannJ
 * @Date: 2023-10-20 17:23:19
 * @LastEditors: JnannJ
 * @LastEditTime: 2023-10-25 22:32:53
 */
import request from "@/utils/request";

export const TestApi = () => {
  return request({
    url: "/api/test",
    method: "get",
  });
};

export async function getUserInfo(data: any) {
  return await request({
    url: "/api/user/login",
    method: "post",
    data:data
  });
}



export async function getBingImg() {
  return await request({
    url: "/out",
    method: "get",
  });
}
