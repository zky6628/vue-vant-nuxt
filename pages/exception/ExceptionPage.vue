<template>
    <div class="exception">
        <div class="img">
            <img :src="config[type].img" />
        </div>
        <div class="content">
            <h1>{{ config[type].title }}</h1>
            <div class="desc">{{ config[type].desc }}</div>
            <div class="action">
                <button class="primary" @click="handleToHome">返回首页</button>
            </div>
        </div>
    </div>
</template>

<script>

const types = {
  403: {
    img: 'https://gw.alipayobjects.com/zos/rmsportal/wZcnGqRDyhPOEYFcZDnb.svg',
    title: '403',
    desc: '抱歉，你无权访问该页面'
  },
  404: {
    img: 'https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg',
    title: '404',
    desc: '抱歉，你访问的页面不存在或仍在开发中'
  },
  500: {
    img: 'https://gw.alipayobjects.com/zos/rmsportal/RVRUAYdCGeYNBWoKiIwB.svg',
    title: '500',
    desc: '抱歉，服务器出错了'
  }
}

export default {
    name: "Exception",
    props: {
        type: {
            type: String,
            default: "404",
        },
    },
    data() {
        return {
            config: types,
        };
    },
    methods: {
        handleToHome() {
            this.$router.push({ name: "home" });
        },
    },
};
</script>

<style lang="less" scoped>
.exception {
    min-height: 500px;
    height: 80%;
    align-items: center;
    text-align: center;
    margin-top: 150px;
    .img {
        display: inline-block;
        padding-right: 52px;
        zoom: 1;
        img {
            width: 200px;
            max-width: 430px;
        }
    }
    .content {
        display: inline-block;
        flex: auto;
        h1 {
            color: #434e59;
            font-size: 72px;
            font-weight: 600;
            line-height: 72px;
            margin-bottom: 24px;
        }
        .desc {
            color: rgba(0, 0, 0, 0.45);
            font-size: 20px;
            line-height: 28px;
            margin-bottom: 16px;
        }

        .primary {
            border: none;
            padding: 5px 15px;
            color: #fff;
            border-radius: 4px;
            background: rgb(92, 184, 92);

            &:hover {
                background: rgba(92, 184, 92, 0.8);
            }
        }
    }
}
</style>
