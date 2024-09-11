/**
 * @file 接口连接环境
 * 
 * @date 2021/05/25
 */

// API_ENV 分类如下：
// IDES：Internet Demonstration and Evaluation System 交互式演示与评估系统
// DEV：Development System，开发系统
// QAS：Quality Assurance System，质量保证系统
// UAT：User Acceptance Test 用户验收测试 PRE
// PRD：Production System，生产系统
export default {
    DEV: {
        '/side/': { target: 'http://localhost:3000', pathRewrite: { '^/side/': '' } }
    },
    QAS: {
        '/side/': { target: 'http://localhost:3000', pathRewrite: { '^/side/': '' } }
    },
    UAT: {
        '/side/': { target: 'http://localhost:3000', pathRewrite: { '^/side/': '' } }
    },
    PRD: {
        '/side/': { target: 'http://localhost:3000', pathRewrite: { '^/side/': '' } }
    },
}
