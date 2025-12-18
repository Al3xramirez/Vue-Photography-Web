<script>
export default {
  name: "Header"
};
</script>

<template>
  <header class="header">
    <h1>Al3Visualz</h1>
    <nav>
      <a href="#">Home</a>
      <a href="#">Gallery</a>
      <a href="#">Contact</a>
    </nav>
  </header>
</template>

<style>
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
