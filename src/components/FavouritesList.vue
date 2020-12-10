<template>
<div v-if="allProducts">
    <h2 v-for="product in allProducts" :key="product.id" v-html="product.title"/>       
</div>
</template>

<script>
export default { 
    props: [
        'allProducts'
    ],

}
</script>