/**
 * @file 请求统一处理
 * 
 * @date 2021/05/22
 */
import { Toast } from 'vant'

export default function ({ $axios, store }, inject) {
    const { state } = store
    // 创建 axios 实例
    const service = $axios.create({
        $axios: 60 * 1000 // 请求超时时间
    })

    // 在发送请求之前做某件事(添加请求拦截器)
    service.interceptors.request.use(
        config => {
            const token = state.user.token || ''
            if (token) {
                config.headers = Object.assign(config.headers, {
                    'Authorization': token // 让每个请求携带自定义 token 请根据实际情况自行修改
                })
            }
            if (config.method === 'get') {
                config.params = {
                    _: Date.parse(new Date()) / 1000, //get方法加时间标识，防止缓存
                    ...config.params
                }
            }
            return config
        },
        error => {
            return Promise.reject(error)
        }
    )

    // 返回状态判断(添加响应拦截器)
    service.interceptors.response.use(
        response => {
            if (response.data.errorCode) {
                Toast.fail(response.data.errorMsg)
            }
            return response.data
        },
        error => {
            if (error.response) {
                let data = error.response.data

                switch (error.response.status) {
                    case 403:
                        Toast.fail('拒绝访问！')
                        break
                    case 500:
                        Toast.fail('网络似乎有点问题！')
                        break
                    case 404:
                        Toast.fail('很抱歉，资源未找到!')
                        break
                    case 504:
                        Toast.fail('网络超时！')
                        break
                    case 401:
                        Toast.fail('未授权，请重新登录！')
                        break
                    default:
                        Toast.fail(data.message)
                        break
                }
            }
            return Promise.reject(error)
        }
    )

    // Inject to context as $api
    inject('http', service)
}