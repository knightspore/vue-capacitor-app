<template>
        <div class="w-4 h-4 overflow-hidden rounded-full transform rotate-45 ring ring-gray-700" :class="{ 'bg-green-400' : sativa, 'bg-purple-700' : indica}">
            <div class="w-4 h-2 bg-purple-700" v-if="!sativa"></div>
            <div class="w-4 h-2 bg-purple-700" v-if="indica"></div>
            <div class="w-4 h-2 bg-green-400" v-if="!indica"></div>
            <div class="w-4 h-2 bg-green-400" v-if="sativa"></div>
        </div>
        <h3 class="text-lg font-bold text-gray-200" v-if="sativa">Sativa</h3>
        <h3 class="text-lg font-bold text-gray-200" v-else-if="indica">Indica</h3>
        <h3 class="text-lg font-bold text-gray-200" v-else>Hybrid</h3>
</template>

<script>
export default {
    props: [
        'description'
    ],
    data () {
        return {
            sativa: false,
            indica: false,
        }
    },
    mounted () {
        if (this.description.includes('Sativa')  || this.description.includes('sativa')) {
            this.sativa = true;
        }
        if (this.description.includes('Indica')  || this.description.includes('indica')) {
            this.indica = true;
        }
    },
}
</script>