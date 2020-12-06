<template>
<main class="bg-indigo-300 min-h-screen">
    
    <!-- Loading Spinner -->
    <transition name="fade">
      <div class="min-h-screen flex" v-if="loading">
        <svg class="animate-spin m-auto w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"></path></svg>
      </div>
    </transition>

    <div class="px-8 pt-6 flex items-center justify-between">
      <h1 class="text-xl uppercase font-bold">Strain Finder</h1>
      <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    </div>

    <!-- Product Feed -->
    <transition name="fade">
      <section id="product-feed" class="px-4 py-6 grid gap-6 overflow-y-hidden">
            <ProductCard 
              :v-if="!loading"
              v-for="product in apiProducts" 
              :key="product.id"
              :product="product"
            />

      </section>
    </transition>

<!-- Mobile Menu -->
    <nav class="z-50 sticky bottom-3">
      <MobileMenu/>
    </nav>

</main>
</template>

<script>
import MobileMenu from './components/MobileMenu'
import { getApiProducts } from './data/api'
import ProductCard from './components/ProductCard'

export default {
  name: "App",
  components: {
    MobileMenu,
    ProductCard
  },
  data () {
    return {
      apiProducts: null,
      loading: true
    }
  },
  async mounted () {
    this.loading = true
    const ref = await getApiProducts()
    this.apiProducts = ref.data
    this.loading = false
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>