/*
 * @Descripttion: 
 * @version: 
 * @Author: JnannJ
 * @Date: 2023-10-21 11:22:48
 * @LastEditors: JnannJ
 * @LastEditTime: 2023-10-21 11:32:33
 */
import { defineStore } from 'pinia';

export const useSidebar = defineStore("sidebar",{
    state: () => ({ collapse: false }),
    getters:{},
    actions:{
        handleCollapse() {
           
			this.collapse = !this.collapse;
            console.log('this.collapse :>> ', this.collapse);
		}
    }
})