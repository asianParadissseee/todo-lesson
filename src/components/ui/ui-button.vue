<script setup>
import {computed} from "vue";

const props = defineProps({
  color: {
    type: String,
    default: 'primary' // secondary, danger
  },
  size: {
    type: String,
    default: "M",
    validator: (value) => ["S", "M", "L"].includes(value),
  },
  disabled: Boolean,
})

const classes = computed(() => [
  'ui-button',
  `size-${props.size}`,
  `color-${props.color}`,
])
</script>

<template>
  <button :class="classes" :disabled="props.disabled">
    <slot></slot>
  </button>
</template>

<style scoped>
.ui-button {
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: .3s ease-in-out;
  text-align: center;
}


.size_s {
  width: 80px;
  height: 32px;
  font-size: 12px;
}

.size-m {
  width: 120px;
  height: 40px;
  font-size: 14px;
}

.size-l {
  width: 160px;
  height: 48px;
  font-size: 16px;
}

.color-primary {
  background: #007bff;
  color: white;
}

.color-secondary {
  background: #6c757d;
  color: white;
}

.color-danger {
  background: #dc3545;
  color: white;
}

/* Стили для отключенной кнопки */
button:disabled {
  background: #ccc;
  cursor: not-allowed;
}
</style>