<template>
<router-link  @click="$scrollToTop" :to="'/strain/' + product.id" class="relative flex flex-col justify-end w-full h-auto m-auto text-purple-100 bg-purple-900 bg-cover border-8 border-purple-500 rounded-lg shadow" :style="`background-image: url('${product.image}');`">

    <!-- SVG Background -->
    <svg class="absolute left-0 z-0 w-full text-purple-500 shadow-md fill-current h-3/4" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
        <path d="M438 285C150 285 268 152 0 0L-0.000152588 285H438Z"/>
    </svg>

    <div id="inner" class="z-20 flex flex-col justify-end h-full p-4 bg-purple-700 bg-opacity-30">

    <!-- Sale Badge -->
    <OnSaleBadge v-if="rand" :onSale="rand"/>
    
    <!-- Heart Badge -->
    <FavouriteBadge v-if="liked || !liked" :liked="liked"/>

    <!-- Name -->
    <CardTitle v-if="product.title" :title="product.title"/>

    <!-- Strain Icon -->
    <section class="flex items-center mt-4 ml-1 gap-4">
        <StrainIcon v-if="product.description" :description="product.description"/>
    </section>

    <!-- Info -->
    <div class="flex items-center justify-between mt-2 gap-4">
        <!-- Rating -->
        <section>
            <ProductRating v-if="true" :score="product.score"/>
        </section>

        <!-- View Product -->
        <div>
            <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        </div>

    </div>

    </div>
</router-link>
</template>

<script>
import OnSaleBadge from './ProductCard/OnSaleBadge'
import CardTitle from './ProductCard/CardTitle'
import FavouriteBadge from './ProductCard/FavouriteBadge'
import StrainIcon from './ProductCard/StrainIcon'
import ProductRating from './ProductCard/ProductRating'

export default {
    components: {
        OnSaleBadge,
        CardTitle,
        FavouriteBadge,
        StrainIcon,
        ProductRating,
    },
    props: [
        'product'
    ],
    data () { 
        return {
            liked: false,
            rand: Math.round(Math.random()),
        }
    },
}
</script>
