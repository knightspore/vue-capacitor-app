import { createWebHistory, createRouter } from "vue-router"
import Home from "@/views/Home.vue";
import Favourites from "@/views/Favourites.vue"
import Profile from "@/views/Profile.vue"
import Strain from "@/views/Strain.vue"

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
    },
    {
        path: '/strain/:id',
        name: Strain,
        component: Strain,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router