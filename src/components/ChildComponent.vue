<template>
  <div class="container">
    <!-- Campo de texto con v-model para enlazar el valor con la propiedad inputText en el estado del componente -->
    <input v-model="inputText" type="text" placeholder="Pon acá tu frase" class="input-field" />
    
    <!-- Botón que, al hacer clic, ejecuta el método sendTextToParent -->
    <button @click="sendTextToParent" class="send-button">Enviar y navegar</button>
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
      // Navegación a la ruta 'parent' con el texto ingresado como parámetro de consulta.
      this.$router.push({
        name: 'parent',  // Usamos el nombre de la ruta para navegación dinámica.
        query: { mensaje: this.inputText } // Pasamos el texto ingresado como parámetro 'mensaje'.
      });

      // Limpiar el campo de texto después de enviar el mensaje.
      this.inputText = ''; 
    },
  },
};
</script>

<style scoped>
/* Estilo general del contenedor */
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px; /* Reduce el espacio en los bordes */
  margin: 0; /* Elimina cualquier margen adicional */
  background-color: #f5f5f5;
  font-family: 'Arial', sans-serif;
  min-height: 200px; /* Establece una altura mínima para evitar que se colapse */
  width: 100%;
  max-width: 450px; /* Ajusta el ancho máximo */
  margin-top: 20px; /* Espacio superior ajustado */
}

/* Estilo para el campo de texto */
.input-field {
  width: 100%;
  max-width: 400px;
  padding: 12px;
  font-size: 1.2rem;
  border: 2px solid #ccc;
  border-radius: 8px;
  margin-bottom: 15px; /* Espaciado reducido entre el input y el botón */
  outline: none;
  transition: border-color 0.3s ease;
}

/* Efecto al hacer foco en el campo de texto */
.input-field:focus {
  border-color: #42b983;
}

/* Estilo para el botón de envío */
.send-button {
  width: 100%;
  max-width: 400px;
  padding: 14px;
  font-size: 1.2rem;
  color: white;
  background-color: #42b983;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s ease;
}

/* Efecto hover en el botón */
.send-button:hover {
  background-color: #365e3d;
  transform: translateY(-3px);
}

/* Efecto activo en el botón */
.send-button:active {
  transform: translateY(2px);
}
</style>
