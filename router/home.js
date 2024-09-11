/**
 * @file 首页路由
 * 
 * @date 2021/05/22
 */
export default (resolve) => [
    {
        name: 'home',
        path: '',
        component: resolve(__dirname, '../pages/home/Index.vue')
    },
]