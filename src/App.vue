<template>
<div class="pt-4 min-h-screen text-purple-50">

    <BackButton v-if="$route.fullPath != '/'"/>

    <main>
        <router-view/>
    </main>
</div>
    <!-- Mobile Menu -->
    <nav class="absolute z-50 sticky bottom-3">
      <MobileMenu/>
    </nav>
</template>

<script>
import MobileMenu from './components/MobileMenu'
import BackButton from './components/BackButton'

export default {
  name: "App",
  components: {
    MobileMenu,
    BackButton
  },
  
};
</script>