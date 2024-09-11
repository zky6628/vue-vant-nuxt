/**
 * @file 接口封装的公用出口
 * 
 * @date 2021/05/25
 */
import login from './login'
import home from './home'

/**
 * 登录页面接口
 */
export const loginApis = login

/**
 * 登录页面接口
 */
export const homeApis = home

export default {
    loginApis,
    homeApis,
}
