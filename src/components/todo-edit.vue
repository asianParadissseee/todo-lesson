<script setup>

import UiModal from "@/components/ui/ui-modal.vue";
import UiInput from "@/components/ui/ui-input.vue";
import UiButton from "@/components/ui/ui-button.vue";


const isOpenModal = defineModel('isOpenModal')

</script>

<template>
  <div>
    <UiModal v-model:is-open="isOpenModal">
      <p class="edit-title">
        Редактировать задачу номер № {{ 3 }}
      </p>
      <ui-input class="edit-input" placeholder="Введите заголовок"/>
      <ui-input class="edit-input" placeholder="Введите описание"/>
      <ui-button>
        Сохранить
      </ui-button>
    </UiModal>
  </div>
</template>

<style scoped>
.edit-title {
  font-size: 24px;
  font-weight: 500;
  font-family: sans-serif;
  font-style: normal;
}

.edit-input {
  width: 95%;
  margin-bottom: 10px;
}
</style>e