<template>

  <h1 class="mx-6 mt-6">Liked Products</h1>

  <!-- Loading Spinner -->
  <transition name="fade">
    <LoadingSpinner :loading="loading"/>
  </transition>

  <!-- Product Feed -->
    <section id="product-feed" class="px-4 py-6 grid gap-6 overflow-y-hidden">
          <ProductFeed :products="filteredList"/>
    </section>
</template>

<script>
import LoadingSpinner from '../components/LoadingSpinner'
import { getApiProducts } from '../data/api'
import ProductFeed from '../components/ProductFeed'

export default {
    components: {
      LoadingSpinner,
      ProductFeed,
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
    computed: {
        filteredList() {
        if (this.apiProducts) {
            return this.apiProducts.filter( async product => {
              return product.title.toLowerCase().includes(this.search.toLowerCase())
            })
        } else {
            return false
          }
        }
    }
}
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
