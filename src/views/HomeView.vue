<script setup>
/**--------------------------------------------
 *               imports
 *---------------------------------------------**/
import { useCounterStore } from '@/store/counter';
import { storeToRefs } from 'pinia';

const counter = useCounterStore();

const { increment } = counter;
// Para poder modificar: `state`, `getters`, necesitaremos `storeToRefs`
const {double, count} = storeToRefs(counter);
</script>

<template>
  <h1>Home counter: {{ count }}</h1>
  <h2>Double: {{ double }}</h2>
  <button @click="increment">Increment</button>
</template>
