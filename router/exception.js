/**
 * @file 错误提示页面
 * 
 * @date 2021/05/22
 */
export default (resolve) => [
    {
        name: 'notFind',
        path: '*',
        component: resolve(__dirname, '../pages/exception/404.vue')
    }
]