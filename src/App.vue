<template>
<div class="min-h-screen">

    <div class="px-6 pt-6 grid gap-4">
        <h1 class="text-3xl text-center uppercase font-bold  text-purple-50 leading-loose" style="text-shadow: 2px 2px 0px rgba(76, 29, 149)">Strain Finder</h1>
    </div>

    <main>
      <transition name="slide">
        <router-view/>
      </transition>
    </main>
</div>
    <!-- Mobile Menu -->
    <nav class="absolute z-50 sticky bottom-3">
      <MobileMenu/>
    </nav>
</template>

<script>
import MobileMenu from './components/MobileMenu'

export default {
  name: "App",
  components: {
    MobileMenu,
  },
};
</script>

<style>
.slide-enter-active, .slide-leave-active {
  transition: opacity .5s
}

.slide-enter-from, .slide-leave-to {
  opacity: 0
}
</style>