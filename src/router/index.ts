import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Gallery from "../views/Gallery.vue";
import Contact from "../views/Contact.vue";

const router = createRouter({
  history: createWebHistory("/Vue-Photography-Web/"), // GitHub Pages base
  routes: [
    { path: "/", component: Home },
    { path: "/gallery", component: Gallery },
    { path: "/contact", component: Contact }
  ]
});

export default router;
