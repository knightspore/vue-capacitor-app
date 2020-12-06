<template>
<div v-if="onSale" class="absolute right-0 z-10 p-2 m-2 text-sm font-bold text-green-700 bg-green-300 border-2 border-green-700 rounded shadow-lg animate-pulse -top-4 transform rotate-12">ON SALE!</div>
</template>

<script>
export default {
    props: [
        'onSale'
    ]
}
</script>