<template>
  <div>
    <!-- Campo de texto con v-model para enlazar el valor con la propiedad inputText en el estado del componente -->
    <input v-model="inputText" type="text" placeholder="Pon acá tu frase" />
    
    <!-- Botón que, al hacer clic, ejecuta el método sendTextToParent -->
    <button @click="sendTextToParent">Enviar y navegar</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputText: '', // Almacena el texto ingresado en el campo de texto.
    };
  },
  methods: {
    sendTextToParent() {
      // Usamos this.$router para navegar a una nueva ruta. 
      // La navegación se realiza usando el nombre de la ruta 'parent' y pasando el texto como un parámetro de consulta (query).
      this.$router.push({
        name: 'parent',  // Se usa el nombre de la ruta en lugar de la URL explícita para garantizar que la navegación sea dinámica y basada en las rutas definidas.
        query: { mensaje: this.inputText } // Pasamos el texto ingresado como un parámetro 'mensaje' en la URL de consulta.
      });

      // Limpiar el campo de texto después de enviar el mensaje. Esto asegura que el input esté vacío después de la acción.
      this.inputText = ''; 
    },
  },
};
</script>
