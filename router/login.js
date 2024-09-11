/**
 * @file 登录路由
 * 
 * @date 2021/05/24
 */
 export default (resolve) => [
    {
        name: 'login',
        path: '/login',
        component: resolve(__dirname, '../pages/login/Index.vue')
    },
]