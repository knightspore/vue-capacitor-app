<template>
    <div>        
        <transition name="fade">
            <LoadingSpinner :loading="loading"/>
        </transition>
        
        <transition name="fade">
        <div class="m-6">


            <!-- Header -->
            <header v-if="product">
                <CardTitle v-if="product.title" :title="product.title"/>
                <div class="my-4 flex items-center justify-between">
                    <ProductRating/>
                    <section class="flex items-center gap-4">
                    <StrainIcon v-if="product.description" :description="product.description"/>
                    </section>
                </div>
            </header>

            <!-- Image -->
            <section v-if="product" class="relative sm:mt-2">
                <FavouriteBadge/>
                <OnSaleBadge v-if="rand" :onSale="rand"/>
                <img class="border-8 border-b-0 border-purple-900 rounded-t-2xl" :src="product.image" alt="">
            </section>

            <!-- Description -->
            <section v-if="product" class="p-3 bg-purple-400 border-8 border-purple-900 rounded-b-2xl">
                <p class="prose prose-sm prose-gray" v-html="product.description"/>                
            </section>
        </div>
        </transition>

    </div>
</template>

<script>
import { getApiProduct } from '../data/api'
import LoadingSpinner from '../components/LoadingSpinner'
import OnSaleBadge from '../components/ProductCard/OnSaleBadge'
import CardTitle from '../components/ProductCard/CardTitle'
import FavouriteBadge from '../components/ProductCard/FavouriteBadge'
import StrainIcon from '../components/ProductCard/StrainIcon'
import ProductRating from '../components/ProductCard/ProductRating'

export default {
    components: {
        LoadingSpinner,
        OnSaleBadge,
        CardTitle,
        FavouriteBadge,
        StrainIcon,
        ProductRating,
    },
    data () {
        return {
            product: null,
            loading: true,
            rand: Math.round(Math.random()),
        }
    },
    async mounted () {
        this.loading = true
        const ref = await getApiProduct(this.$route.params.id)
        this.product = ref.data
        this.loading = false
    },
}
</script>