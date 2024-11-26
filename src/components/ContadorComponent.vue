<template>
  <div class="contador-container">
    <!-- Muestra el valor del contador en un elemento h3 -->
    <h3 class="contador">{{ contador }}</h3>
    
    <!-- Botón para incrementar el contador -->
    <button class="btn increment" @click="botonIncrementar">Incrementar</button>
    
    <!-- Botón para disminuir el contador -->
    <button class="btn decrement" @click="botonDisminuir">Disminuir</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState({
      contador: state => state.contador
    }),
  },
  methods: {
    ...mapActions({
      botonIncrementar: 'accionIncrementar',
      botonDisminuir: 'accionDisminuir'
    })
  },
}
</script>

<style scoped>
/* Estilo del contenedor principal */
.contador-container {

  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f5f5f5;
  text-align: center;

  font-family: 'Arial', sans-serif;
}

/* Estilo para el valor del contador */
.contador {
  font-size: 3rem;
  color: #42b983;
  margin-bottom: 20px;
  font-weight: bold;
  transition: transform 0.2s ease-in-out;
}

/* Animación para el contador */
.contador:hover {
  transform: scale(1.1);
}

/* Estilos para los botones */
.btn {
  padding: 10px 20px;
  font-size: 1.2rem;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin: 10px;
  transition: background-color 0.3s, transform 0.3s;
  width: 200px;
}

/* Estilo del botón de incremento */
.increment {
  background-color: #42b983;
}

.increment:hover {
  background-color: #365e3d;
  transform: translateY(-3px);
}

/* Estilo del botón de disminución */
.decrement {
  background-color: #e74c3c;
}

.decrement:hover {
  background-color: #c0392b;
  transform: translateY(-3px);
}

/* Ajustes para pantallas grandes */
@media (min-width: 768px) {
  .contador {
    font-size: 4rem;
  }

  .btn {
    font-size: 1.5rem;
    padding: 15px 30px;
    width: 250px;
  }
}
</style>
