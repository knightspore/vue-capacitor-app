import { createApp } from "vue";
import App from "./App.vue";
import router from './router'
import "./assets/tailwind.css"
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDC_W0PtZvhIQ4EZ5YzT4xIYsPoznB9Brk",
    authDomain: "products-api-e6dfd.firebaseapp.com",
    databaseURL: "https://products-api-e6dfd-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "products-api-e6dfd",
    storageBucket: "products-api-e6dfd.appspot.com",
    messagingSenderId: "27822088324",
    appId: "1:27822088324:web:64b2ff7d8ddd277ed4a2d1"
};

firebase.initializeApp(firebaseConfig)

createApp(App).use(router).mount("#app");
