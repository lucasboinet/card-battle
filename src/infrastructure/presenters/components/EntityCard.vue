<template>
    <div class="card-size border rounded-lg" :style="{ borderColor: data.color }">
        <span>{{ data.name }}</span>
        <img :src="picture">
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { EntityCard } from '../../../domain/models/EntityCard';

const props = defineProps<{
    data: EntityCard
}>();

const picture = computed(() => {
    return new URL(`../../../assets/${props.data.picture}`, import.meta.url).href;
})
</script>

<style scoped>
.card-size {
    width: 238px;
    height: 332px;
}
</style>