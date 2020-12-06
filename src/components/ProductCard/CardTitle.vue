<template>
    <div v-if="title">
        <h2 class="mt-4 text-4xl font-black text-shadow-md" style="text-shadow: 4px 4px 0px rgba(76, 29, 149)">
            {{title}}
        </h2>
    </div>
</template>

<script>
export default {
    props: [
        'title'
    ]
}
</script>