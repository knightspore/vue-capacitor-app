<template>
<article class="relative h-80 m-auto w-full flex flex-col justify-end text-purple-100 bg-gray-900 shadow rounded-lg bg-cover" style="background-image: url('https://img.sensiseeds.com/en/feminized-seeds/sensi-seeds/hindu-kush-xl.png');">

    <!-- SVG Background -->
    <svg class="z-0 absolute left-0 h-3/4 w-full text-purple-500 fill-current shadow-md rounded-bl-lg" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
        <path d="M438 285C150 285 268 152 0 0L-0.000152588 285H438Z"/>
    </svg>

    <div id="innder" class="z-20 p-4">

    <!-- Sale Badge -->
    <div v-if="rand" class="absolute m-2 -top-4 right-0 z-10 p-2 text-sm font-bold text-green-700 bg-green-300 rounded transform rotate-12 shadow-lg border-2 border-green-700">ON SALE!</div>
    
    <!-- Heart Badge -->
    <div v-if="!liked" @click="addToLikes()" class="absolute p-4 top-0 left-0">
        <svg class="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
    </div>

    <div v-if="liked" @click="removeFromLikes()" class="absolute m-4 top-0 left-0">
        <svg class="w-6 h-6 text-red-400" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
    </div>

    <!-- Strain Icon -->
    <div class="ml-1 flex items-center gap-2">
        <div class="h-4 w-4 rounded-full overflow-hidden transform rotate-45 ring ring-gray-700" :class="{ 'bg-green-400' : sativa, 'bg-purple-700' : indica}">
            <div class="h-2 w-4 bg-purple-700" v-if="!sativa"></div>
            <div class="h-2 w-4 bg-purple-700" v-if="indica"></div>
            <div class="h-2 w-4 bg-green-400" v-if="!indica"></div>
            <div class="h-2 w-4 bg-green-400" v-if="sativa"></div>
        </div>
        <h3 class="text-sm font-bold text-gray-200" v-if="sativa">Sativa</h3>
        <h3 class="text-sm font-bold text-gray-200" v-else-if="indica">Indica</h3>
        <h3 class="text-sm font-bold text-gray-200" v-else>Hybrid</h3>
    </div>

    <!-- Name -->
    <h2 class="mt-4 pr-10 text-3xl font-bold text-shadow-md" v-html="product.title"/>

    <!-- Info -->
    <div class="mt-2 flex items-center justify-between gap-4">
        <!-- Rating -->
        <div class="flex gap-1">
            <svg class="w-6 h-6 text-white text-shadow-sm fill-current" :class="{ 'text-yellow-500' : score >= 1 }" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
            <svg class="w-6 h-6 text-white text-shadow-sm fill-current" :class="{ 'text-yellow-500' : score >= 2 }" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
            <svg class="w-6 h-6 text-white text-shadow-sm fill-current" :class="{ 'text-yellow-500' : score >= 3 }" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
            <svg class="w-6 h-6 text-white text-shadow-sm fill-current" :class="{ 'text-yellow-500' : score >= 4 }" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
            <svg class="w-6 h-6 text-white text-shadow-sm fill-current" :class="{ 'text-yellow-500' : score >= 5 }" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
        </div>

        <!-- View Product -->
        <div>
            <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        </div>

    </div>

    </div>
</article>
</template>

<script>
export default {
    props: [
        'product'
    ],
    data () { 
        return {
            sativa: false,
            indica: false,
            liked: Boolean,
            rand: Math.round(Math.random()),
            score: Math.round(Math.random()*5),
        }
    },
    mounted () {
        if (this.product.description.includes('Sativa')  || this.product.description.includes('sativa')) {
            this.sativa = true;
        }
        if (this.product.description.includes('Indica')  || this.product.description.includes('indica')) {
            this.indica = true;
        }
        if (localStorage.products == null) {
            localStorage.products = []
        } else if (localStorage.products[this.product.id] == true) {
            this.liked = true;
        }
    },
    methods: {
        addToLikes() {
            localStorage[this.product.id].liked = true
            this.liked = true
            console.log(localStorage.[this.product.id])
        },

        removeFromLikes() {
            localStorage[this.product.id].liked = false
            this.liked = false
        },
    }
}
</script>