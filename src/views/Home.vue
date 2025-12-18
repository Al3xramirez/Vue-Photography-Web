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
        bio: {
            title: "About Me - Welcome to my Photography Portfolio",
            description: "Hello Everyone! I'm Alejandro, to keep it short, I'm a passionate photographer based in Cheney, WA. I specialize in film and digital photography, capturing the beauty of the world and the essence of people through my lens. You can reach me by going to the contact page. To view my full gallery, please visit the gallery page."
        },
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

    <section class="bio">
      <h3>{{ bio.title }}</h3>
      <p>{{ bio.description }}</p>
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

/* --------------------
   bio Headings
--------------------- */

.bio {
    text-align: center;
  margin-bottom: 2rem;
}
.bio h3 {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  margin-top: -1rem;
}
.bio p {
  font-size: 1rem;
  font-family:Arial, Helvetica, sans-serif;
  color: #555;
}



</style>

