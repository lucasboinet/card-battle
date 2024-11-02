<template>
  <div class="flex flex-row gap-4 p-4">
    <Card :data="fireSpirit" perspective />
    <Card :data="trean" perspective />

    <button @click="handleAttack(fireSpirit.spells[0], fireSpirit, trean)">fire spirit attack trean</button>
    <button @click="handleAttack(trean.spells[0], trean, fireSpirit)">trean attack fire spirit</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { FireSpirit } from './domain/models/entitiesCards/FireSpirit';
import { Trean } from './domain/models/entitiesCards/Trean';
import { EntityCard, EntityCardSpell } from './domain/models/EntityCard';
import Card from './infrastructure/presenters/components/Card.vue';

const fireSpirit = ref(new FireSpirit());
const trean = ref(new Trean());

function handleAttack(spell: EntityCardSpell, self: EntityCard, target: EntityCard) {
  console.log(self, target)
  spell.effect.apply({ target: target, self })
}
</script>