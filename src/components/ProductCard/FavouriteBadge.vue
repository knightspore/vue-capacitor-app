<template>
    <div class="my-4" @click="clickEventHandler(ID, isLiked)">
        <!-- Heart -->
        <div class="absolute top-0 left-0 p-4">
            <svg class="h-8" :class="[isLiked ? likedClass : '', unLikedClass]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
        </div>
    </div>
</template>

<script>
// import { processLikes } from '../../data/storage'

export default {
    props: [
        'ID',
        'isLiked'
    ],
    data () {
        return {
            likedClass: 'text-red-400 fill-current',
            unLikedClass: 'text-gray-300 fill-none'
        }
    },
    methods: {
        clickEventHandler (id, bool) {
            console.log(id, bool)
        }
    }
}
</script>