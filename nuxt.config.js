/**
 * @file nuxt配置文件
 * 
 * @date 2021/05/22
 */

// API_ENV 分类如下：
// IDES：Internet Demonstration and Evaluation System 交互式演示与评估系统
// DEV：Development System，开发系统
// QAS：Quality Assurance System，质量保证系统
// UAT：User Acceptance Test 用户验收测试
// PRD：Production System，生产系统

import router from './router'
import proxy from './proxy'

const path = require("path")
const resolve = (dir) => path.join(__dirname, dir)
/**
 * 获取接口连接的环境，默认是开发环境
 * @const API_ENV
 * @type {string='DEV'}
 */
const API_ENV = process.env.API_ENV || 'DEV'

export default {
    server: {
        port: 8080, // default: 3000
        host: '0.0.0.0', // default: localhost,
    },
    router,
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'vue-vant-nuxt',
        htmlAttrs: {
            lang: 'zh-CN'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        'vant/lib/index.css'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '@/plugins/vant',
        '~/plugins/axios'
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        proxy: true
    },

    proxy: proxy[API_ENV],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        // 添加这个是关键，添加后babel才会处理依赖包vant里面的代码
        transpile: [/vant.*?less/],

        babel: {
            plugins: [
                ['import', {
                    libraryName: 'vant',
                    "style": (name) => {
                        return `${name}/style/less.js`
                    }
                }, 'vant']
            ],
        },

        extend(config) {
            config.module.rules.push({
                test: /\.less$/,
                use: [{
                    loader: "less-loader",
                    options: {
                        modifyVars: {
                            // 直接覆盖变量
                            hack: `true; @import "${resolve(
                                "./assets/less/var.less"
                            )}";`
                        }
                    }
                }]
            });
        },

        postcss: {
            plugins: {
                'autoprefixer': {},
                'postcss-px-to-viewport': {
                    unitToConvert: "px", // 要转化的单位
                    viewportWidth: 375, // UI设计稿的宽度
                    unitPrecision: 6, // 转换后的精度，即小数点位数
                    propList: ["*"], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
                    viewportUnit: "vw", // 指定需要转换成的视窗单位，默认vw
                    fontViewportUnit: "vw", // 指定字体需要转换成的视窗单位，默认vw
                    selectorBlackList: [], // 指定不转换为视窗单位的类名，
                    minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
                    mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
                    // replace: true, // 是否转换后直接更换属性值
                    exclude: [], // 设置忽略文件，用正则做目录名匹配
                    landscape: false // 是否处理横屏情况
                },
            }
        },
    },
}
