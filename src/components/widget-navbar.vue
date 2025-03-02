<script setup>


import {useRouter} from "vue-router";

const links = [
  {
    name: "Todos",
    path: "/todo"
  },
  {
    name: "About",
    path: "/about"
  }
]

const router = useRouter()
</script>

<template>
  <header class="navbar">
    <div class="container">
      <div class="logo" @click="router.push('/')">
        Todo App
      </div>
      <nav class="navigation">
        <ul>
          <li v-for="link in links" :key="link.path">
            <router-link :to="link.path">{{ link.name }}</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  background: lightgray;
  color: white;
}

.logo {
  font-family: sans-serif;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
}

.container {
  max-width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navigation ul {
  display: flex;
  align-items: center;
  gap: 50px;
}

.navigation ul li a {
  color: white;
  font-weight: 600;
  font-size: 18px;
  font-family: sans-serif;
}
</style>