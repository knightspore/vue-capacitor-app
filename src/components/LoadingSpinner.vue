<template>
<div class="h-96 mb-96 flex" v-if="loading">
    <svg class="m-auto w-12 h-12 animate-spin" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
    <circle cx="50" cy="50" fill="none" stroke="#f5f3ff" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138">
    </circle>
    </svg>
</div>
</template>

<script>
export default {
    props: [
        'loading'
    ]
}
</script>