<script setup>

import UiButton from "@/components/ui/ui-button.vue";

const {todo} = defineProps(['todo']);

const emits = defineEmits(['removeTodo', 'toggleEditModal'])
</script>

<template>
  <div class="todo_card">
    <p>
      {{ todo?.title }}
    </p>
    <span>
    {{ todo?.description }}
    </span>
    <div>
      <ui-button color="danger" @click="emits('toggleEditModal')">
        Изменить
      </ui-button>
      <ui-button @click="emits('removeTodo', todo?.id)">
        Удалить
      </ui-button>
    </div>
  </div>
</template>

<style scoped>
.todo_card {
  width: 50%;
  border: 1px solid gray;
  border-radius: 10px;
  padding: 5px 10px;
  color: white;
  background: slategray;
  font-family: Inter, sans-serif;
  margin-top: 10px;
}

.todo_card p {
  font-size: 24px;
  font-weight: 700;
}

.todo_card span {
  color: lightgray;
  font-size: 14px;
  display: block;
}

.todo_card button {
  margin-top: 12px;
}
</style>