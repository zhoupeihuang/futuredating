import { createApp } from "vue"
import "normalize.css/normalize.css" // CSS重置的现代替代方法
import './assets/css/layout.less'
import ElementPlus from "element-plus"
import "element-plus/lib/theme-chalk/index.css"

import App from "./App.vue"
import router from "./router"
import store from "./store"

createApp(App)
  .use(store)
  .use(ElementPlus)
  .use(router)
  .mount("#app")
