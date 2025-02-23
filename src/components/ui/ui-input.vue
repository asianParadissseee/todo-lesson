<script setup>

const inputModel = defineModel('inputModel')

const {placeholder} = defineProps({
  placeholder: String,
})

</script>

<template>
  <div class="input-container">
    <input class="ui-input" type="text" v-model="inputModel" :placeholder="placeholder">
  </div>
</template>

<style scoped>

.input-container {
  width: 100%;
}
.ui-input {
  padding: 5px 10px;
  border-radius: 3px;
  width: 100%;
}
</style>