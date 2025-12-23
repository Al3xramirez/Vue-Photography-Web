<script>
import Gallery1H from "../assets/GalleryPhotos/Gallery1H.jpg";
import Gallery2V from "../assets/GalleryPhotos/Gallery2V.jpg";
import Gallery3H from "../assets/GalleryPhotos/Gallery3H.jpg";
import Gallery4V from "../assets/GalleryPhotos/Gallery4V.jpg";
import Gallery5V from "../assets/GalleryPhotos/Gallery5V.jpg";
import Gallery6V from "../assets/GalleryPhotos/Gallery6V.jpg";
import Gallery7V from "../assets/GalleryPhotos/Gallery7V.jpg";
import Gallery8V from "../assets/GalleryPhotos/Gallery8V.jpg";
import Gallery9V from "../assets/GalleryPhotos/Gallery9V.jpg";
import Gallery10V from "../assets/GalleryPhotos/Gallery10V.jpg";
import Gallery11V from "../assets/GalleryPhotos/Gallery11V.jpg";
import Gallery12V from "../assets/GalleryPhotos/Gallery12V.jpg";
import Gallery13V from "../assets/GalleryPhotos/Gallery13V.jpg";
import Gallery14V from "../assets/GalleryPhotos/Gallery14V.jpg";
import Gallery15V from "../assets/GalleryPhotos/Gallery15V.jpg";
import Gallery16V from "../assets/GalleryPhotos/Gallery16V.jpg";
import Gallery17V from "../assets/GalleryPhotos/Gallery17V.jpg";
import Gallery27GLV from "../assets/GalleryPhotos/Gallery27GLV.JPG";
import GalleryCheney34V from "../assets/GalleryPhotos/GalleryCheney34V.jpg";
import GalleryFilm28H from "../assets/GalleryPhotos/GalleryFilm28H.jpg";
import GalleryFilm29V from "../assets/GalleryPhotos/GalleryFilm29V.jpg";
import GalleryFilm30H from "../assets/GalleryPhotos/GalleryFilm30H.jpg";
import GalleryFilm31H from "../assets/GalleryPhotos/GalleryFilm31H.jpg";
import GalleryKarina21V from "../assets/GalleryPhotos/GalleryKarina21V.jpg";
import GalleryKarina22H from "../assets/GalleryPhotos/GalleryKarina22H.jpg";
import GalleryKarina22V from "../assets/GalleryPhotos/GalleryKarina22V.jpg";
import GalleryKarina23V from "../assets/GalleryPhotos/GalleryKarina23V.jpg";
import Laisha18V from "../assets/GalleryPhotos/GalleryLaisha18V.jpg";
import Laisha19V from "../assets/GalleryPhotos/GalleryLaisha19V.jpg";
import Laisha20V from "../assets/GalleryPhotos/GalleryLaisha20V.jpg";
import GalleryParty24V from "../assets/GalleryPhotos/GalleryParty24V.jpg";
import GalleryParty25V from "../assets/GalleryPhotos/GalleryParty25V.jpg";
import GalleryParty26V from "../assets/GalleryPhotos/GalleryParty26V.jpg";
import GallerySoccer32V from "../assets/GalleryPhotos/GallerySoccer32V.jpg";
import GallerySoccer33V from "../assets/GalleryPhotos/GallerySoccer33V.jpg";
import Kell1 from "../assets/GalleryPhotos/Kell1.JPEG";
import Kell2 from "../assets/GalleryPhotos/Kell2.JPEG";
import Kell3 from "../assets/GalleryPhotos/Kell3.JPEG";
import Galli2 from "../assets/GalleryPhotos/Galli2.jpg";
import Gali1 from "../assets/GalleryPhotos/Gali1.jpg";
import Beach1 from "../assets/GalleryPhotos/Beach1.jpg";
import Beach2H from "../assets/GalleryPhotos/Beach2H.jpg";
import Beach3 from "../assets/GalleryPhotos/Beach3.jpg";
import Cheney1 from "../assets/GalleryPhotos/Cheney1.jpg";
import Gorge1H from "../assets/GalleryPhotos/Gorge1H.jpg";
import Gorge5  from "../assets/GalleryPhotos/Gorge5.JPG";
import Gorge6H from "../assets/GalleryPhotos/Gorge6H.jpg";
import Mom from "../assets/GalleryPhotos/Mom.jpg";
import Paco1 from "../assets/GalleryPhotos/Paco.JPG";
import Seattle1 from "../assets/GalleryPhotos/Seattle1.jpg";
import Seattle2 from "../assets/GalleryPhotos/Seattle2.jpg";
import Seattle3 from "../assets/GalleryPhotos/Seattle3.jpg";
import Seattle4 from "../assets/GalleryPhotos/Seattle4.jpg";
import Seattle5 from "../assets/GalleryPhotos/Seattle5.jpg";
import SoccerGame1 from "../assets/GalleryPhotos/SoccerGame1.jpg";
import SoccerGame3H from "../assets/GalleryPhotos/SoccerGame3H.jpg";
import SoccerGame4 from "../assets/GalleryPhotos/SoccerGame4.jpg";
import SoccerGame5 from "../assets/GalleryPhotos/SoccerGame5.jpg";




export default {
  name: "Main",
  data() {
    return {
      photos: [
      { src: SoccerGame5, alt: "Gallery Soccer Game sample 5", vertical: true },
      { src: SoccerGame4, alt: "Gallery Soccer Game sample 4", vertical: true },
      { src: SoccerGame3H, alt: "Gallery Soccer Game sample 3", vertical: false },
      { src: SoccerGame1, alt: "Gallery Soccer Game sample 1", vertical: true },
      { src: Seattle5, alt: "Gallery Seattle sample 5", vertical: true },
      { src: Seattle4, alt: "Gallery Seattle sample 4", vertical: true },
      { src: Seattle3, alt: "Gallery Seattle sample 3", vertical: true },
      { src: Seattle2, alt: "Gallery Seattle sample 2", vertical: true },
      { src: Seattle1, alt: "Gallery Seattle sample 1", vertical: true },
      { src: Paco1, alt: "Gallery Paco sample 1", vertical: true },
      { src: Mom, alt: "Gallery Mom sample", vertical: true },
      { src: Gorge6H, alt: "Gallery Gorge sample 6", vertical: false },
      { src: Gorge5, alt: "Gallery Gorge sample 5", vertical: true },
      { src: Gorge1H, alt: "Gallery Gorge sample 1", vertical: false },
      { src: Cheney1, alt: "Gallery Cheney sample 1", vertical: true },
      { src: Beach3, alt: "Gallery Beach sample 3", vertical: true },
      { src: Beach2H, alt: "Gallery Beach sample 2", vertical: false },
      { src: Beach1, alt: "Gallery Beach sample 1", vertical: true },
      { src: Galli2, alt: "Gallery Gali sample 2", vertical: true },
      { src: Gali1, alt: "Gallery Gali sample 1", vertical: true },
      { src: Kell3, alt: "Gallery Kell sample 3", vertical: true },
      { src: Kell2, alt: "Gallery Kell sample 2", vertical: true },
      { src: Kell1, alt: "Gallery Kell sample 1", vertical: true },
      { src: GallerySoccer33V, alt: "Gallery Soccer sample 33", vertical: true },
      { src: GallerySoccer32V, alt: "Gallery Soccer sample 32", vertical: true },
      { src: GalleryParty26V, alt: "Gallery Party sample 26", vertical: true },
      { src: GalleryParty25V, alt: "Gallery Party sample 25", vertical: true },
      { src: GalleryParty24V, alt: "Gallery Party sample 24", vertical: true },
      { src: Laisha20V, alt: "Gallery Laisha sample 20", vertical: true },
      { src: Laisha19V, alt: "Gallery Laisha sample 19", vertical: true },
      { src: Laisha18V, alt: "Gallery Laisha sample 18", vertical: true },
      { src: GalleryKarina23V, alt: "Gallery Karina sample 23", vertical: true },
      { src: GalleryKarina22V, alt: "Gallery Karina sample 22", vertical: true },
      { src: GalleryKarina22H, alt: "Gallery Karina sample 22", vertical: false },
      { src: GalleryKarina21V, alt: "Gallery Karina sample 21", vertical: true },
      { src: GalleryFilm31H, alt: "Gallery Film sample 31", vertical: false },
      { src: GalleryFilm30H, alt: "Gallery Film sample 30", vertical: false },
      { src: GalleryFilm29V, alt: "Gallery Film sample 29", vertical: true },
      { src: GalleryFilm28H, alt: "Gallery Film sample 28", vertical: false },
      { src: GalleryCheney34V, alt: "Gallery Cheney sample 34", vertical: true },
      { src: Gallery27GLV, alt: "Gallery sample 27", vertical: true },
      { src: Gallery17V, alt: "Gallery sample 17", vertical: true },
      { src: Gallery16V, alt: "Gallery sample 16", vertical: true },
      { src: Gallery15V, alt: "Gallery sample 15", vertical: true },
      { src: Gallery14V, alt: "Gallery sample 14", vertical: true },
      { src: Gallery13V, alt: "Gallery sample 13", vertical: true },
      { src: Gallery12V, alt: "Gallery sample 12", vertical: true },
      { src: Gallery11V, alt: "Gallery sample 11", vertical: true },
      { src: Gallery10V, alt: "Gallery sample 10", vertical: true },
      { src: Gallery9V, alt: "Gallery sample 9", vertical: true },
      { src: Gallery8V, alt: "Gallery sample 8", vertical: true },
      { src: Gallery7V, alt: "Gallery sample 7", vertical: true },
      { src: Gallery6V, alt: "Gallery sample 6", vertical: true },
      { src: Gallery5V, alt: "Gallery sample 5", vertical: true },
      { src: Gallery4V, alt: "Gallery sample 4", vertical: true },
      { src: Gallery3H, alt: "Gallery sample 3", vertical: false },
      { src: Gallery2V, alt: "Gallery sample 2", vertical: true },
      { src: Gallery1H, alt: "Gallery sample 1", vertical: false }
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

/* --------------------
   Page Headings
--------------------- */
main h2 {
  font-size: 1.6rem;
  margin-bottom: 1rem;
}

main p {
  max-width: 600px;
  color: #555;
}

</style>

