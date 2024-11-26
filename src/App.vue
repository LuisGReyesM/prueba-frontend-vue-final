<script setup>
import { ref } from 'vue'

// Mensaje de bienvenida
const welcomeMessage = ref("¡Bienvenido a nuestra aplicación Vue 3!");

// Sección de contenido dinámico (puedes agregar otras secciones si lo deseas)
const sections = ref([
  { id: 'home', title: 'Home', content: 'Esta es la página de inicio.' },
  { id: 'about', title: 'About', content: 'Aquí va la información sobre nuestra app.' },
  { id: 'contador', title: 'Contador', content: 'Un contador interactivo vendrá pronto.' },
  { id: 'parent', title: 'Parent', content: 'Este es un componente padre' },
  { id: 'child', title: 'Child', content: 'Este es un componente hijo que envia información al padre' }
]);

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <div class="wrapper">
      <h1>{{ welcomeMessage }}</h1>

      <nav>
        <!-- Enlaces a secciones dentro de la misma página -->
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contador">Contador</a>
        <a href="/parent">Padre</a>
        <a href="/child">Hijo</a>
      </nav>
    </div>
  </header>

  <section>
    <div>
    <h3>
      Paginas dinámicas con Router View
      <RouterView />
    </h3>
    </div>
  </section>

  <!-- Secciones de la página -->
  <section v-for="section in sections" :key="section.id" :id="section.id" class="section">
    <h2>{{ section.title }}</h2>
    <p>{{ section.content }}</p>
  </section>
  
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.wrapper {
  text-align: center;
}

h1 {
  font-size: 2rem;
  color: #333;
}

nav {
  width: 100%;
  font-size: 14px;
  text-align: center;
  margin-top: 2rem;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  margin: 0 1rem;
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

nav a:hover {
  color: #42b983;
}

nav a:focus {
  outline: none;
}

section {
  padding: 2rem;
  margin: 2rem 0;
  background-color: #f7f7f7;
  border-radius: 8px;
}

section h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

section p {
  font-size: 1rem;
  color: #555;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
