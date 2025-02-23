<script setup>

import UiButton from "@/components/ui/ui-button.vue";
import UiInput from "@/components/ui/ui-input.vue";

const title = defineModel('title')
const description = defineModel('description')

const emit = defineEmits(['createTodo'])
const {errorMessage} = defineProps(['errorMessage'])
</script>

<template>
  <form class="todo-form">
    <ui-input placeholder="Введите заголовок" v-model:input-model="title"/>
    <textarea placeholder="Введите описание" v-model="description" type="text" rows="10" cols="4"></textarea>
    <p class="error-message">
      {{ errorMessage }}
    </p>
    <UiButton @click.prevent="emit('createTodo')">
      Создать
    </UiButton>
  </form>
</template>

<style scoped>
.todo-form {
  width: 40%;
  display: flex;
  flex-direction: column;
}

input, textarea {
  padding: 10px 15px;
  margin: 10px 0;
}

.error-message {
  color: red;
  font-weight: 700;
  font-size: 18px;
  font-family: sans-serif;
}
</style>