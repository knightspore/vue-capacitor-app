import { createWebHistory, createRouter } from "vue-router"
import Home from "@/views/Home.vue";
import Favourites from "@/views/Favourites.vue"
import Profile from "@/views/Profile.vue"

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/favourites',
        name: Favourites,
        component: Favourites,
    },
    {
        path: '/profile',
        name: Profile,
        component: Profile,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router