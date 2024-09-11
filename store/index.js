/**
 * @file vuex store
 * 
 * @date 2021/05/25
 */
// 服务端用于解析请求头里的cookie
const cookieparser = process.server ? require('cookieparser') : undefined;

export const state = () => ({
    // 用户信息
    user: {},
})

export const mutations = {
    /**
     * 设置state里的用户信息
     * @param {Object} state 
     * @param {Object} data 用户信息数据
     */
    setUser(state, data) {
        state.user = data
    }
}

export const actions = {
    /**
     * 服务端初始化方法，仅在服务端调用
     * @param {Object} param0 
     * @param {Object} param1 
     */
    nuxtServerInit({ commit }, { req }) {
        let user = {}
        // 如果请求头里有cookie
        if (req.headers.cookie) {
            // 把cookie解析成对象
            const parsed = cookieparser.parse(req.headers.cookie)
            // 解析出用户信息
            try {
                user = JSON.parse(parsed.user)
            } catch (err) {
                // No valid cookie found
            }
        }
        // 把用户信息设置到state里
        commit('setUser', user)
    }
}
