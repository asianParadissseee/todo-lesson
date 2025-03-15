<script setup>

import WidgetNavbar from "@/components/widget-navbar.vue";
import WidgetFooter from "@/components/widget-footer.vue";
import WidgetSidebar from "@/components/widget-sidebar.vue";
import {provide, ref} from "vue";

const isOpenSidebar = ref(false)

provide("isOpenSidebar", isOpenSidebar)
</script>

<template>
  <widget-navbar/>
  <widget-sidebar/>
  <main class="container">
    <slot></slot>
  </main>
  <widget-footer/>
</template>

<style scoped>
.container {
  width: 80%;
  margin: 0 auto;
  padding: 0 20px;
}
</style>