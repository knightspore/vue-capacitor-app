<template>
    <div class="px-4 py-6 grid gap-6 overflow-y-hidden">
        <ProductCard 
                v-for="product in products" 
                :key="product.id"
                :product="product"
                class="shadow-lg"
        />
    </div>
</template>

<script>
import ProductCard from './ProductCard'

export default {
    components: {
        ProductCard
    },
    props: [
        'products'
    ]
}
</script>