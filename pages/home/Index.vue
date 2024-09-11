<template>
    <div class="container">
        <div>
            <logo />
            <div>ajax请求的数据：{{ ajaxData }}</div>
            <div>服务端渲染的数据：{{ serverData }}</div>
            <div class="links">
                <van-button
                    type="primary"
                    target="_blank"
                    rel="noopener noreferrer"
                    to="https://nuxtjs.org/"
                >
                    Documentation
                </van-button>
            </div>
        </div>
    </div>
</template>

<script>
import Logo from "~/components/logo/Logo.vue";
import { homeApis } from "@/apis"

export default {
    components: {
        Logo,
    },
    data() {
        return {
            ajaxData: "",
            serverData: "",
        };
    },
    async asyncData({ $http }) {
        const serverData = await $http.$get(homeApis.users);
        return { serverData };
    },
    methods: {
        getData() {
            this.$http.get(homeApis.users).then((res) => {
                this.ajaxData = res.data;
            });
        },
    },
    created() {
        this.getData();
    },
};
</script>

<style>
.container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system,
        BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
        sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
}

.subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
}

.links {
    padding-top: 15px;
}
</style>
