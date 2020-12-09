import { createWebHistory, createRouter } from "vue-router"
import Home from "@/views/Home.vue";
import Favourites from "@/views/Favourites.vue"
import Strain from "@/views/Strain.vue"
import Chat from "@/views/Chat.vue"

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
        path: '/strain/:id',
        name: Strain,
        component: Strain,
    },
    {
        path: '/chat',
        name: Chat,
        component: Chat,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router