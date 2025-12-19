<script>

</script>

<template>
  <main class="main">
    <section class="about-layout">
      
      <div class="about">
        <h2>About Me</h2>
        <p>
          Hey everyone! My name is Alejandro Ramirez. I'm a film and digital photographer based in
          Cheney and Ephrata, WA. I've been taking photos for several years, capturing a variety of
          subjects including portraits, landscapes, street photography, events, and more.
        </p>

        <p>
          I primarily use film cameras such as the Yashica Electro 35, Olympus OM-10, and Fuji
          disposables, along with my digital Canon Rebel T7i. I enjoy experimenting with different
          film stocks and digital techniques to achieve unique looks and moods in my photographs.
          Feel free to explore my portfolio and reach out if you’d like to collaborate!
        </p>
      </div>

      <img
        class="about-image"
        src="../assets/AboutMePhotos/AboutMe.png"
        alt="About Me Photo"
      />

    </section>
  </main>
</template>


<style scoped>
.main {
  max-width: 1100px;
  margin: 0 auto;
  padding: 3rem 2rem;
}


.about-layout {
  display: flex;
  align-items: center;       
  gap: 3rem;                
}


.about {
  flex: 1;                   
}

.about h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.about p {
  margin-bottom: 1.25rem;
  line-height: 1.6;
  color: #353232;
}


.about-image {
  max-width: 320px;
  width: 100%;
  border-radius: 6px;
}


@media (max-width: 900px) {
  .about-layout {
    flex-direction: column;
    text-align: center;
  }

  .about-image {
    max-width: 60%;
  }
}
</style>

