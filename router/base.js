/**
 * @file 路由基础
 * 
 * @date 2021/05/22
 */
import home from './home'
import login from './login'

export default (resolve) => [
    {
        path: '/',
        component: resolve(__dirname, '../components/layouts/Index.vue'),
        children: [
            ...home(resolve),
            ...login(resolve),
        ]
    }
]