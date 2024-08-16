
// 全局注册Antd组件
import './assets/main.css'
import 'ant-design-vue/dist/reset.css';
import Antd from 'ant-design-vue';

import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'  // 引入 Vue Router 配置

const app = createApp(App)

app.use(store)       // 使用 Vuex 状态管理
app.use(router)      // 使用 Vue Router
app.use(Antd)        // 全局注册 Ant Design Vue 组件

app.mount('#app');   // 挂载应用程序
