import { createApp } from "vue";
import App from "./App.vue";
import router from './router'
import "./assets/tailwind.css"

import { firestorePlugin } from 'vuefire'

createApp(App).use(router, firestorePlugin).mount("#app");
