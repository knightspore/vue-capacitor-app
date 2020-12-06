<template>
<main class="min-h-screen bg-gradient-to-b from-gray-800 to-purple-900">

    <div class="px-6 pt-6 grid gap-4">
        <h1 class="text-3xl text-center uppercase font-bold  text-purple-50 leading-loose" style="text-shadow: 2px 2px 0px rgba(76, 29, 149)">Strain Finder</h1>
        <form class="flex items-center gap-2" @submit.prevent>
          <svg class="w-10 h-10 text-purple-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <input v-model="search" class="py-2 px-3 rounded-full flex-1 bg-purple-900 shadow-inner placeholder-purple-500 text-purple-200" type="text" placeholder="Search...">
        </form>
      </div>
    
    <!-- Loading Spinner -->
    <transition name="fade">
      <div class="h-96 mb-64 flex" v-if="loading">
        <svg class="animate-spin m-auto w-12 h-12 text-purple-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"></path></svg>
      </div>
    </transition>

    <!-- Product Feed -->
    <transition name="fade">
      <section id="product-feed" class="px-4 py-6 grid gap-6 overflow-y-hidden">
            <ProductCard 
              :v-if="!loading"
              v-for="product in apiProducts" 
              :key="product.id"
              :product="product"
              class="shadow-lg"
            />

      </section>
    </transition>

    <!-- Mobile Menu -->
    <nav class="absolute z-50 sticky bottom-3">
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
      search: '',
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
  methods: {
    filteredList(input) {
      return input.filter( product => {
        return product.title.toLowerCase().includes(this.search.toLowerCase())
    })
    }
  }
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