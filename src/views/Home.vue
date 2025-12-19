<script>


import photo1 from "../assets/HomePhotos/Car1V.jpg";
import photo2 from "../assets/HomePhotos/Car2V.jpg";
import photo3 from "../assets/HomePhotos/Car3V.jpg";
import photo4 from "../assets/HomePhotos/Car4H.jpg";
import photo5 from "../assets/HomePhotos/Car5V.jpg";
import photo6 from "../assets/HomePhotos/Car6H.jpg";
import photo7 from "../assets/HomePhotos/Tony1V.jpg";
import photo8 from "../assets/HomePhotos/Tony2V.jpg";
import photo9 from "../assets/HomePhotos/Tony3V.jpg";
import photo10 from "../assets/HomePhotos/Tony4V.jpg";

export default {
  name: "Main",
  data() {
    return {
      title: "Recent Work",
      photos: [
        { src: photo1, alt: "MainPage sample 1", vertical: true },
        { src: photo4, alt: "MainPage sample 4", vertical: false },
        { src: photo2, alt: "MainPage sample 2", vertical: true }, 
        { src: photo5, alt: "MainPage sample 5", vertical: true },  
        { src: photo3, alt: "MainPage sample 3", vertical: true },
        { src: photo6, alt: "MainPage sample 6", vertical: false },
        { src: photo7, alt: "MainPage sample 7", vertical: true },
        { src: photo8, alt: "MainPage sample 8", vertical: true }, 
        { src: photo9, alt: "MainPage sample 9", vertical: true },  
        { src: photo10, alt: "MainPage sample 10", vertical: true },

      ]
    };
  }
};
</script>


<template>
  <main class="main">

    <section class = "title">
      <h2>{{ title }}</h2>
    </section>

    <section class="gallery">
      <img
        v-for="(photo, index) in photos"
        :key="index"
        :src="photo.src"
        :alt="photo.alt"
        :class="{ vertical: photo.vertical }"
      />
    </section>
  </main>
</template>

<style scoped>

    /* --------------------
   Main Content
--------------------- */
.main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;
}

/* --------------------
   Gallery Grid
--------------------- */
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

.gallery img {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: 6px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* Image hover effect */
.gallery img:hover {
  transform: scale(1.02);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
}

.gallery img.vertical {
  grid-row: span 2;
  aspect-ratio: 3/4;
  
}

.main .title {
  text-align: center;
  margin-bottom: 2rem;
}

</style>

