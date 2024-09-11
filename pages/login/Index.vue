<!--
 * @file 登录页面
 * 
 * @date 2021/05/24
-->
<template>
    <div class="login-page">
        <div class="container">
            <van-divider class="divider"> 登录 </van-divider>
            <van-form @submit="onSubmit">
                <van-field
                    class="field-item"
                    v-model="username"
                    name="username"
                    label="用户名"
                    placeholder="用户名"
                    :rules="[{ required: true, message: '请填写用户名' }]"
                    size="large"
                />
                <van-field
                    class="field-item"
                    v-model="password"
                    type="password"
                    name="password"
                    label="密码"
                    placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]"
                    size="large"
                />
                <div class="field-item">
                    <van-button
                        round
                        block
                        type="info"
                        native-type="submit"
                        size="large"
                    >
                        提交
                    </van-button>
                </div>
            </van-form>
        </div>
    </div>
</template>

<script>
const Cookie = process.client ? require("js-cookie") : undefined
import { loginApis } from "@/apis"

export default {
    name: "LoginIndex",
    data() {
        return {
            username: "",
            password: "",
        };
    },
    methods: {
        /**
         * 提交表单
         * @param { Object } values 表单值
         */
        async onSubmit(values) {
            const { data } = await this.$http.post(loginApis.login, values)

            Cookie && Cookie.remove("user")
            // 保存用户登录状态
            Cookie && Cookie.set("user", data)
            this.$store.commit("setUser", data)
            this.$router.push({name: 'home'})
        },
    },
};
</script>

<style scoped lang="less">
@import url(../../assets/less/var.less);

.login-page {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 100vw;
    height: 100vh;

    .container {
        width: 90%;
    }

    .divider {
        color: @blue;
        border-color: @blue;
        padding: 0 16px;
        font-size: 40px / @d;
    }

    .field-item {
        margin: 16px 0;
    }
}
</style>
