<script setup lang="ts">
import Navbar from '../components/Navbar.vue';
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import Skill from '../pages/Skill.vue';
import Project from '../pages/Project.vue';
import Contact from '../pages/Contact.vue';
import Footer from '../components/Footer.vue';
</script>

<template>
  <div>
    <Navbar />

    <main>
      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skill">
        <Skill />
      </section>

      <section id="project">
        <Project />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </main>

    <Footer />
  </div>
</template>