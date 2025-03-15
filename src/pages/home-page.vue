<script setup>


import {provide, ref} from "vue";

const counter = ref(0)

provide('counter', counter)
</script>

<template>
  <div>
    {{ counter }}
    <button @click="counter++">INCREMENT</button>
    <button @click="counter--">DECREMENT</button>
  </div>
</template>

<style scoped>

</style>