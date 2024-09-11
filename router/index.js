/**
 * @file 路由出口，把路由拆出来的目的是为了在页面比较多的时候减少协同开发的代码耦合
 * 
 * @date 2021/05/22
 */
import exception from './exception'
import base from './base'

export default {
    extendRoutes(routes, resolve) {
        // 不用自动生成的路由，因为不方便管理
        // 删除数组里的所有数据，不能用赋值清空
        routes.splice(0)
        routes.push(...[
            ...base(resolve),
            // exception 放最后
            ...exception(resolve)
        ])
    }
}