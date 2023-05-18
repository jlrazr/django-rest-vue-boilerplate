<script setup>
import { ref } from 'vue'
import { useExampleStore } from '../stores/exampleStore'

defineProps({
  msg: String,
})

const exampleStore = useExampleStore()

</script>

<template>
  <h1>{{ msg }}</h1>
  <div class="card">
    <h2>{{ exampleStore.counter }}</h2>
    <button type="button" @click="exampleStore.incrementBy(1)">Increase by 1</button>
    <button type="button" @click="exampleStore.incrementBy(3)">Increase by 3</button>
    <button type="button" @click="exampleStore.incrementBy(5)">Increase by 5</button>
  </div>
</template>

<style scoped lang="scss">

</style>
