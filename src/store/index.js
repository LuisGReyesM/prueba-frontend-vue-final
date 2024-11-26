// src/store/index.js
import { createStore } from 'vuex';

export default createStore({
  // El estado global de la aplicación. Aquí definimos las variables que se mantendrán en toda la app.
  state: {
    contador: 0,  // Variable que almacenará el valor del contador
  },
  mutations: {
    // Las mutaciones son funciones que modifican el estado directamente.
    incrementar(state) {
      state.contador++;  // Incrementa el valor de 'contador' por 1
    },
    decrementar(state) {
      state.contador--;  // Disminuye el valor de 'contador' por 1
    },
  },
  actions: {
    // Las acciones son funciones que pueden ejecutar código asíncrono antes de comprometer las mutaciones.
    accionIncrementar({ commit }) {
      commit('incrementar');  // Llama a la mutación 'incrementar' para cambiar el estado
    },
    accionDisminuir({ commit }) {
      commit('decrementar');  // Llama a la mutación 'decrementar' para cambiar el estado
    },
  },
  getters: {
    // Los getters son funciones que nos permiten acceder a los valores del estado de manera procesada o filtrada.
    contador: (state) => state.contador,  // Devuelve el valor actual de 'contador'
  },
});
