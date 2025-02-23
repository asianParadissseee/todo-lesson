<template>
  <div>
    <TodoEdit v-model:is-open-modal="isOpenModal"/>
    <TodoForm
        :error-message="errorMessage"
        v-model:title="title"
        v-model:description="description"
        @create-todo="createTodo"
    />
    <div class="wrapper" v-if="todoCards.length">
      <TodoCard v-for="(todo, id) in todoCards"
                :todo="todo"
                :key="id"
                class="list"
                @removeTodo="removeTodo"
                @toggleEditModal="toggleEditModal"
      />
    </div>
    <p v-else>
      Список пуст
    </p>
  </div>
</template>

<script setup>
import {ref} from "vue";
import TodoCard from "@/components/todo-card.vue";
import TodoForm from "@/components/todo-form.vue";
import {todoCards} from "@/const/mock-data.js";
import TodoEdit from "@/components/todo-edit.vue";


const title = ref("")
const description = ref("")

const errorMessage = ref("")

const createTodo = () => {
  if (!title.value.length || !description.value.length) {
    errorMessage.value = "Заполните все поля"
    return;
  }
  todoCards.value.push({
    id: crypto.randomUUID(),
    title: title.value,
    description: description.value,
  })
  title.value = "";
  description.value = "";
  errorMessage.value = "";
}

const removeTodo = (id) => {
  todoCards.value = todoCards.value.filter((todo) => todo.id !== id)
}

const isOpenModal = ref(false);
const toggleEditModal = () => {
  isOpenModal.value = !isOpenModal.value;
}

</script>

<style scoped>
.wrapper {
  margin-top: 60px;
}
</style>