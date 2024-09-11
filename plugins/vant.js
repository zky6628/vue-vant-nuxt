/**
 * @file vant 按需引入
 * 
 * @date 2021/05/24
 */
import Vue from "vue"
import {
    Toast,
    Dialog,
    Form,
    Field,
    Button,
    Divider,
} from 'vant'

Vue.use(Toast)
Vue.prototype.$toast = Toast
Vue.use(Dialog)
Vue.prototype.$dialog = Dialog
Vue.use(Form)
Vue.use(Field)
Vue.use(Button)
Vue.use(Divider)
