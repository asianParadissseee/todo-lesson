<script setup>
import {inject} from "vue";

const isOpenSidebar = inject('isOpenSidebar')
</script>

<template>
  <div @click="isOpenSidebar = false" class="shadow" :class="{
      'visible': isOpenSidebar,
    }">
    <aside class="sidebar" @click.stop>
        <div class="content">
              <div class="close-btn">
                &#10799;
              </div>
        </div>
    </aside>
  </div>
</template>

<style scoped>
.shadow {
  position: fixed;
  z-index: -10;
  left: 0;
  top: 0;
  opacity: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}
.visible {
  opacity: 10;
  z-index: 1;
}
.sidebar {
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  width: 300px;
  background-color: lightgray;
  color: white;
  z-index: 20 !important;
}

.content {
  padding: 40px;
  position: relative;
}

.close-btn {
  position: absolute;
  top: 0;
  right: 30px;
  font-size: 48px;
}
</style>