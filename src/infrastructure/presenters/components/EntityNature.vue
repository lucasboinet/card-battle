<template>
    <FireIcon v-if="card.nature === EEntityCardNature.FIRE" class="size-8 text-white" />
    <img v-else-if="card.nature === EEntityCardNature.PLANT" :src="plantIcon" class="size-7 text-white" />
</template>

<script lang="ts" setup>
import { FireIcon } from '@heroicons/vue/24/solid';
import { EntityCard, EEntityCardNature } from '../../../domain/models/EntityCard'
import { computed } from 'vue';

defineProps<{
    card: EntityCard
}>();

const plantIcon = computed(() => {
    return new URL(`../../../assets/plant_icon.svg`, import.meta.url).href;
})
</script>