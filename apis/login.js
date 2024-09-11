/**
 * @file 登录页面接口
 * 
 * @date 2021/05/25
 */
import config from '~/assets/js/config'

/**
 * 接口前缀
 * @const proxyApis
 * @type {Object}
 */
const { proxyApis } = config
 
const defaultPrefix = proxyApis.default

export default {
    login: `${defaultPrefix}users/login`
}