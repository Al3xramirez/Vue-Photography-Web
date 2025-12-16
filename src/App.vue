<script setup>
  import {ref} from 'vue'
  const name = ref('Alex')
  const emoji = ref('✌🏻')
</script>

<template>
  <header>
    <span>{{emoji}}</span>
  </header>

  <main>
    <h1>Hello, {{name}}!</h1>
    <p>This is the beginning of my photogrhapy website demo!</p>
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
      color: #42B883;
  }
  footer {
      position:fixed;
      bottom:0;
      padding-bottom:20px;
  }
</style>
