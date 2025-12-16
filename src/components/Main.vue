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

<script>
import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.jpg";
import photo3 from "../assets/photo3.jpg";
import photo4 from "../assets/photo4.jpg";
import photo5 from "../assets/photo5.jpg";
import photo6 from "../assets/photo6.jpg";

export default {
  name: "Main",
  data() {
    return {
      photos: [
        { src: photo1, alt: "MainPage sample 1", vertical: false },
        { src: photo4, alt: "MainPage sample 4", vertical: false },
        { src: photo2, alt: "MainPage sample 2", vertical: false },//
        { src: photo5, alt: "MainPage sample 5", vertical: true },  // vertical
        { src: photo6, alt: "MainPage sample 6", vertical: true },  // vertical
        { src: photo3, alt: "MainPage sample 3", vertical: true },  // vertical

      ]
    };
  }
};
</script>
