<template>
    <router-link :to="href" class="p-2 rounded-full shadow-inner bg-purple-900">
       <slot/>
    </router-link>
</template>

<script>
export default {
    props: [
        'href'
    ],
}
</script>

<style scoped>
.router-link-exact-active {
    @apply text-purple-50;
}

svg {
    @apply transition-colors duration-100;
}
</style>