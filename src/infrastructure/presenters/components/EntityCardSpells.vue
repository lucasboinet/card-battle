<template>
    <div class="flex flex-col gap-6 px-2">
        <div v-for="(spell, index) in card.spells" :key="index" class="flex flex-col gap-0.5">
            <div class="flex flex-row justify-between items-center">
                <div class="flex flex-row items-center gap-2">
                    <span class="font-bold">{{ spell.name }}</span>
                    <span class="flex flex-row items-center bg-indigo-900 text-white px-1 rounded font-semibold text-sm gap-1">
                        {{ spell.cost }}
                        <MoonIcon class="size-3" />
                    </span>
                </div>
                <span>{{ spell.effect.damage }}</span>
            </div>
            <p v-if="spell.effect.subtitle" class="text-xs">{{ spell.effect.subtitle }}</p>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { EntityCard } from '../../../domain/models/EntityCard';
import { MoonIcon } from '@heroicons/vue/24/solid';

defineProps<{
    card: EntityCard
}>();
</script>