<script setup>

import WidgetNavbar from "@/components/widget-navbar.vue";
import WidgetFooter from "@/components/widget-footer.vue";
</script>

<template>
  <widget-navbar/>
  <slot></slot>
  <widget-footer/>
</template>

<style scoped>

</style>