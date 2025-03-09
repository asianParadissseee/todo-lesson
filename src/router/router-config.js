import {createRouter, createWebHistory} from "vue-router";
import HomePage from "@/pages/home-page.vue";

export const routerConfig = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: "Home",
            path: "/",
            component: HomePage
        },
        {
            name: "Todo",
            path: "/todo",
            component: () => import("@/pages/todo-page.vue")
        },
        {
            name: "About",
            path: "/about",
            component: () => import("@/pages/about-page.vue")
        }
    ]
})