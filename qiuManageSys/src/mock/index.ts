/*
 * @Descripttion: 
 * @version: 
 * @Author: JnannJ
 * @Date: 2023-10-25 15:11:58
 * @LastEditors: JnannJ
 * @LastEditTime: 2023-10-25 15:12:06
 */
import { MockMethod } from "vite-plugin-mock"

const mock: Array<MockMethod> = [
    {
        // 接口路径
        url: '/api/test',
        
        // 接口方法
        method: 'get',

        // 返回数据
        response: () => {
            return {
                status: 200,
                message: 'success',
                data: 'Hello World'
            }
        }
    }
]

export default mock