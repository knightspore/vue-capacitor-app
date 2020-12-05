<template>
<main class="bg-gradient from-gray-200 to-blue-400 min-h-screen">
    <section id="product-feed" class="px-4 py-6 grid gap-6">
        <ProductCard 
          v-for="product in apiProducts" 
          :key="product.id"
          :product="product"
        />
    </section>
</main>
</template>

<script>
import ProductCard from './components/ProductCard'
import { getApiProducts } from './data/api'

export default {
  name: "App",
  components: {
    ProductCard
  },
  data () {
    return {
      apiProducts: null
    }
  },
  async mounted () {
  const ref = await getApiProducts()
  this.apiProducts = ref.data
  },
};
</script>
