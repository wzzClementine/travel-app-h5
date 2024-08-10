
// 全局注册Antd组件
import './assets/main.css'
import 'ant-design-vue/dist/reset.css';
import Antd from 'ant-design-vue';

import { createApp } from 'vue'
import App from './App.vue'
import store from './store'


const app = createApp(App)

app.use(store)

app.use(Antd).mount('#app');  // 全局注册Antd
