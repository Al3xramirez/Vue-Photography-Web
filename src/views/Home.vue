<script>
import photo1 from "../assets/HomePhotos/photo1.jpg";
import photo2 from "../assets/HomePhotos/photo2.jpg";
import photo3 from "../assets/HomePhotos/photo3.jpg";
import photo4 from "../assets/HomePhotos/photo4.jpg";
import photo5 from "../assets/HomePhotos/photo5.jpg";
import photo6 from "../assets/HomePhotos/photo6.jpg";

export default {
  name: "Main",
  data() {
    return {
      photos: [
        { src: photo1, alt: "MainPage sample 1", vertical: false },
        { src: photo4, alt: "MainPage sample 4", vertical: false },
        { src: photo2, alt: "MainPage sample 2", vertical: false }, //vertical
        { src: photo5, alt: "MainPage sample 5", vertical: true },  // vertical
        { src: photo6, alt: "MainPage sample 6", vertical: true },  // vertical
        { src: photo3, alt: "MainPage sample 3", vertical: true },  // vertical

      ]
    };
  }
};
</script>


<template>
  <main class="main">

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
</style>

