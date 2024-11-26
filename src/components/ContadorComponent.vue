<template>
  <div>
    <!-- Muestra el valor del contador en un elemento h3, vinculado a la propiedad 'contador' del store -->
    <h3>{{ contador }}</h3>
    
    <!-- Botón para incrementar el contador, al hacer clic ejecuta el método 'botonIncrementar' -->
    <button @click="botonIncrementar">Incrementar contador</button>
    
    <!-- Botón para disminuir el contador, al hacer clic ejecuta el método 'botonDisminuir' -->
    <button @click="botonDisminuir">Disminuir contador</button>
  </div>
</template>

<script>
// Importamos las funciones mapState y mapActions de Vuex para mapear el estado y las acciones del store a las propiedades y métodos del componente.
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    // Usamos mapState para mapear el estado del store a una propiedad computada llamada 'contador'.
    // 'contador' obtiene su valor directamente desde el estado del Vuex store.
    ...mapState({
      contador: state => state.contador // El valor de 'contador' se mapea desde el estado global de Vuex.
    }),
  },
  methods: {
    // Usamos mapActions para mapear las acciones del store a métodos del componente.
    // Estos métodos disparan las acciones correspondientes para incrementar y disminuir el contador.
    ...mapActions({
      botonIncrementar: 'accionIncrementar', // 'botonIncrementar' ejecuta la acción 'accionIncrementar' definida en el store.
      botonDisminuir: 'accionDisminuir' // 'botonDisminuir' ejecuta la acción 'accionDisminuir' definida en el store.
    })
  },
}
</script>

<style></style>
