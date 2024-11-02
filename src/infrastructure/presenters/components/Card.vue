<template>
        <div class="[perspective:800px]">
            <div 
                class="w-fit hover:[transform:rotateX(var(--x-rotation))_rotateY(var(--y-rotation))]"
                @mouseenter="handleMouseEnter" 
                @mouseleave="handleMouseLeave" 
                @mousemove="handleMouseMove" 
            >
                <EntityCard 
                    v-if="isEntityCard" 
                    :data="entityCardData" 
                />
            </div>
        </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { Card } from '../../../domain/models/Card';
import EntityCard from './EntityCard.vue';
import { EntityCard as EntityCardClass } from '../../../domain/models/EntityCard';

const props = defineProps<{
    data: Card,
    perspective?: boolean
}>();

const perspectiveRef = ref();

const isEntityCard = computed(() => props.data instanceof EntityCardClass);
const entityCardData = computed(() => props.data as EntityCardClass);

function handleMouseEnter(e) {
    if (!props.perspective) return;
    perspectiveRef.value = e.currentTarget.getBoundingClientRect();
}

function handleMouseLeave() {
    if (!props.perspective) return;
    perspectiveRef.value = undefined;
}

function handleMouseMove(e) {
    if (!perspectiveRef.value || !props.perspective) return;
    const x = e.clientX - perspectiveRef.value.left;
    const y = e.clientY - perspectiveRef.value.top;
    const xPercentage = x / perspectiveRef.value.width;
    const yPercentage = y / perspectiveRef.value.height;
    const xRotation = (0.5 - xPercentage) * 5;
    const yRotation = (yPercentage - 0.5) * 5;
    
    e.currentTarget.style.setProperty("--x-rotation", `${yRotation}deg`);
    e.currentTarget.style.setProperty("--y-rotation", `${xRotation}deg`);
}
</script>