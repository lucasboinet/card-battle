<template>
    <EntityCard v-if="isEntityCard" :data="entityCardData" />
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { Card } from '../../../domain/models/Card';
import EntityCard from './EntityCard.vue';
import { EntityCard as EntityCardClass } from '../../../domain/models/EntityCard';

const props = defineProps<{
    data: Card
}>();

const isEntityCard = computed(() => props.data instanceof EntityCardClass);
const entityCardData = computed(() => props.data as EntityCardClass);
</script>