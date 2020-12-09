<template>
    <div>
        <button @click="signInWithGoogle">Sign In</button>
        <button @click="signOut">Sign Out</button>
    </div>
</template>

<script>
import { auth } from '../data/firebase'
export default {
    methods: {
        signInWithGoogle() {
            const provider = new auth.GoogleAuthProvider()
            auth.signInWithPopup(provider)
        },
        signOut() {
            auth.signOut()
        }
    }
}
</script>