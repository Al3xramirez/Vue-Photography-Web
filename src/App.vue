<script setup>
  import {ref} from 'vue'
  const emoji = ref('✌🏻')
</script>

<template>
  <header>
    <span>{{emoji}}</span>
  </header>

  <main>
    <h1>Hello!</h1>
    <p>This is the beginning of my photography website demo!</p>
  </main>

  <footer>
    <p>&copy; 2025</p>
  </footer>
</template>

<style scoped>
  header span{
    font-size:3rem;
  }
  main h1{
      display:block;
  }
  main a{
      color: #e1e6de;
  }
  footer {
      position:fixed;
      bottom:0;
      padding-bottom:20px;
  }
</style>
