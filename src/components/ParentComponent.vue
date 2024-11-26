<template>
  <div>
    <!-- Mostrar el mensaje recibido a través del query parameter 'mensaje' en la URL -->
    <h1 id="texto-recibido">Texto recibido: {{ mensaje }}</h1>
  </div>
</template>

<script>
export default {
  computed: {
    // Computed property para acceder al parámetro 'mensaje' en la URL
    mensaje() {
      // Accede al parámetro 'mensaje' desde la URL utilizando 'this.$route.query'.
      // Si no se encuentra el parámetro 'mensaje', se muestra el texto por defecto 'No se ha recibido ningún mensaje'.
      return this.$route.query.mensaje || 'No se ha recibido ningún mensaje';
    },
  },
};
</script>
