<script setup>

const isOpen = defineModel('isOpen')
</script>

<template>
  <teleport to="body">
    <div class="modal-container" v-if="isOpen" @click="isOpen = false">
      <div class="modal-content" @click.stop>
      <span class="close-modal" @click="isOpen = false">
        &times;
      </span>
        <slot></slot>
      </div>
    </div>
  </teleport>
</template>

<style scoped>
.modal-container {
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
}

.modal-content {
  width: 30%;
  padding: 20px;
  background-color: #fefefe;
  margin: 10% auto;
  height: 220px;
  border-radius: 3px;
  position: relative;
}

.close-modal {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  cursor: pointer;
}
</style>