<script setup>
import { ref } from "vue";
const title = ref("Al3Visualz");
</script>

<template>
  <header class="header">
    <h1>{{ title }} <img class="logo" src="../assets/Logo.png" alt="Logo"></h1>
    <nav>
      <a href="Home">Home</a>
      <a href="Gallery">Gallery</a>
      <a href="Contact">Contact</a>
    </nav>
  </header>
</template>

<style scoped>
    /* --------------------
   Header
--------------------- */
.header {
  padding: 2rem 3rem;
  background-color: #ffffff;
  border-bottom: 5px solid #e5e5e5;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header .logo {
  width: 40px;
  height: 40px;
  margin-left: 10px;
  vertical-align: middle;
}

.header h1 {
  font-size: 1.4rem;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.header nav {
  display: flex;
  gap: 2rem;
}

.header a,
.header .router-link-active {
  text-decoration: none;
  color: #1a1a1a;
  font-size: 0.95rem;
  position: relative;
}

/* Hover underline animation */
.header a::after {
  content: "";
  position: absolute;
  width: 0;
  height: 1px;
  bottom: -4px;
  left: 0;
  background-color: #1a1a1a;
  transition: width 0.3s ease;
}

.header a:hover::after {
  width: 100%;
}
</style>
