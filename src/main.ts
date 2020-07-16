import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 以下为测试ts相关的代码
// import '@/ts/decorator3'

createApp(App).use(router).use(store).mount('#app')
