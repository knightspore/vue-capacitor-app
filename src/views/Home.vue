<template>

  <form class="px-4 flex items-center gap-2" @submit.prevent>
    <svg class="w-10 h-10 text-purple-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    <input v-model="search" class="py-2 px-3 rounded-full flex-1 bg-purple-900 shadow-inner placeholder-purple-500 text-purple-200" type="text" placeholder="Search...">
  </form>

  <!-- Loading Spinner -->
  <transition name="fade">
    <LoadingSpinner :loading="loading"/>
  </transition>

  <!-- Product Feed -->
  <div>
        <ProductFeed :products="filteredList"/>
  </div>

</template>

<script>
import LoadingSpinner from '../components/LoadingSpinner'
import ProductFeed from '../components/ProductFeed'
import { getApiProducts } from '../data/api'

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
            return this.apiProducts.filter( product => {
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
