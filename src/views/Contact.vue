<script>
import instagramIcon from "../assets/Icons/instagram.png";
import emailIcon from "../assets/Icons/email.png";
import phoneIcon from "../assets/Icons/phone.png";

export default {
  name: "Contact",
  data() {
    return {
      contacts: [
        {
          name: "Instagram",
          display: "www.instagram.com/ale.visualz/",
          url: "https://www.instagram.com/ale.visualz/",
          icon: instagramIcon
        },
        {
          name: "Email",
          display: "alexramirezperez14@gmail.com",
          url: "mailto:alexramirezperez14@gmail.com",
          icon: emailIcon
        },
        {
          name: "Phone",
          display: "(509) 793-6375",
          url: "tel:5097936375",
          icon: phoneIcon
        }
      ]
    };
  }
};
</script>

<template>
  <main class="main">
    <section class="contact">
      <h2>Get in touch</h2>
      <p>You can find me or reach out through the platforms below for any inquiries or collaborations!</p>

      <div class="contact-links">
        <a
          v-for="(link, index) in contacts"
          :key="index"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img :src="link.icon" :alt="link.name" />
          <span>{{ link.name }}</span>
        </a>
      </div>

            <!-- TEXT CONTACT INFO -->
        <div class="contact-text">
        <p
            v-for="(link, index) in contacts"
            :key="'text-' + index"
        >
            <a :href="link.url">
            {{ link.name }}: {{ link.display }}
            </a>
        </p>
        </div>

    </section>
  </main>
</template>


<style scoped>
.contact {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.contact h2 {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  margin-top: 6rem;
}

.contact p {
  color: #555;
  margin-bottom: 2rem;
}

.contact-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.contact-links a {
  text-decoration: none;
  color: #111;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  transition: transform 0.2s ease;
}

.contact-links a:hover {
  transform: translateY(-4px);
}

.contact-links img {
  width: 48px;
  height: 48px;
}

.contact-links span {
  font-size: 0.9rem;
}

.contact-text {
  margin-bottom: 2rem;
}

.contact-text p {
  margin: 0.25rem 0;
}

.contact-text a {
  color: #111;
  text-decoration: none;
}

.contact-text a:hover {
  text-decoration: underline;
}

</style>
