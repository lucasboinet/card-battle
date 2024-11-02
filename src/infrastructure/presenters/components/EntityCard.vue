<template>
    <div
        class="card-size bg-[#f5f7f6] outline outline-1 outline-gray-200 p-3 rounded-xl shadow-lg" 
    >
        <div class="flex flex-col h-full p-3 rounded-lg shadow-inside-lg" :style="{ background: data.color }">
            <div class="flex flex-row items-center justify-between mb-2">
                <span class="w-full font-bold">{{ data.name }}</span>
                <span class="font-bold">{{ data.lp }}HP</span>
            </div>
            
            <EntityCardHero :card="data" />

            <div class="h-full mt-8 flex flex-col justify-between">
                <EntityCardSpells :card="data" />

                <div class="flex flex-row justify-end gap-3 w-full">
                    <el-tooltip content="Dark energy" placement="top">
                        <div class="bg-indigo-800 font-bold text-white rounded px-2 py-1 text-center flex flex-row items-center gap-1">
                            {{ data.mana }}
                            <MoonIcon class="size-3" />
                        </div>
                    </el-tooltip>
                    <el-tooltip content="Action point" placement="top">
                        <div class="bg-amber-600 font-bold text-white rounded px-2 py-1 text-center flex flex-row items-center gap-1">
                            {{ data.pa }}
                            <HandRaisedIcon class="size-3" />
                        </div>
                    </el-tooltip>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { EntityCard } from '../../../domain/models/EntityCard';
import EntityCardHero from './EntityCardHero.vue';
import EntityCardSpells from './EntityCardSpells.vue';
import { MoonIcon, HandRaisedIcon } from '@heroicons/vue/24/solid';

defineProps<{
    data: EntityCard
}>();
</script>

<style scoped>
.card-size {
    width: 300px;
    height: 410px;
}

.shadow-inside-lg {
    -webkit-box-shadow: inset 0px 0px 19px -9px rgba(0,0,0,0.75);
    -moz-box-shadow: inset 0px 0px 19px -9px rgba(0,0,0,0.75);
    box-shadow: inset 0px 0px 19px -9px rgba(0,0,0,0.75);
}

.shadow-inside {
    -webkit-box-shadow: inset 0px 0px 12px -8px rgba(0,0,0,0.75);
    -moz-box-shadow: inset 0px 0px 12px -8px rgba(0,0,0,0.75);
    box-shadow: inset 0px 0px 12px -8px rgba(0,0,0,0.75);
}
</style>