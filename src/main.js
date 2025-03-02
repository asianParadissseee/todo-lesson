import {createApp} from 'vue'
import App from './App.vue'
import {routerConfig} from "@/router/router-config.js";
import "@/styles/style.css"

createApp(App)
    .use(routerConfig)
    .mount('#app')
