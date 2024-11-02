<template>
  <div>
    <Card :data="card" />
  </div>
</template>

<script setup lang="ts">
import { FireSpirit } from './domain/models/entitiesCards/FireSpirit';
import Card from './infrastructure/presenters/components/Card.vue';

const card = new FireSpirit();
</script>