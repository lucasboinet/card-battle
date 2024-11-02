<template>
    <div class="relative h-96 bg-white rounded-lg shadow-inside border border-gray-400">
        <span class="text-xs absolute z-30 -top-2.5 bg-gray-700 text-white px-1.5 pb-1 rounded-md leading-none left-1/2 transition-transform ease-out transform -translate-x-1/2">{{ card.rarity }}</span>
        <span class="absolute -bottom-2 -right-2 h-10 w-10 border border-gray-500 rounded-full bg-gray-700 flex justify-center items-center">
            <EntityNature :card="card" />
        </span>
        <img :src="picture" class="pointer-events-none absolute left-1/2 top-1/2 h-[120%] transform -translate-x-1/2 -translate-y-1/2 z-20" />
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { EntityCard } from '../../../domain/models/EntityCard';
import EntityNature from './EntityNature.vue';

const props = defineProps<{
    card: EntityCard
}>();

const picture = computed(() => {
    return new URL(`../../../assets/${props.card.picture}`, import.meta.url).href;
})
</script>