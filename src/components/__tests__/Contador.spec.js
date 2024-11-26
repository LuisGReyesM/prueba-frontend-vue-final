// tests/Contador.spec.js
import { describe, it, expect, beforeEach } from 'vitest'; // Importa las funciones de test de Vitest para definir y ejecutar pruebas.
import { mount } from '@vue/test-utils'; // Importa la función mount de Vue Test Utils para montar componentes de Vue.
import { createStore } from 'vuex'; // Importa createStore de Vuex para crear una instancia del store en las pruebas.
import Contador from '@/components/ContadorComponent.vue'; // Importa el componente Contador que será probado.

// Bloque principal que describe los tests para el componente Contador.
describe('Contador.vue', () => {
  let store; // Declaración de la variable store que se utilizará en cada test.
  let state; // Declaración de la variable state que representará el estado inicial del store.
  let mutations; // Declaración de la variable mutations que contendrá las funciones de mutación para el store.
  let actions; // Declaración de la variable actions que contendrá las acciones para el store.

  // beforeEach es un hook que se ejecuta antes de cada test, asegurando un estado limpio para cada uno.
  beforeEach(() => {
    // Definir el estado inicial del store.
    state = {
      contador: 0, // El contador comienza en 0.
    };

    // Definir las mutaciones del store que modifican el estado.
    mutations = {
      incrementar: (state) => state.contador++, // Incrementa el contador.
      disminuir: (state) => state.contador--, // Disminuye el contador.
    };

    // Definir las acciones del store que llaman a las mutaciones.
    actions = {
      accionIncrementar: ({ commit }) => commit('incrementar'), // Llama a la mutación incrementar.
      accionDisminuir: ({ commit }) => commit('disminuir'), // Llama a la mutación disminuir.
    };

    // Crear una instancia del store de Vuex con el estado, mutaciones y acciones definidos.
    store = createStore({
      state,
      mutations,
      actions,
    });
  });

  // Test para verificar que el valor inicial del contador sea 0.
  it('debe recibir un valor inicial en el contador', () => {
    // Monta el componente Contador con el store como plugin global.
    const wrapper = mount(Contador, { global: { plugins: [store] } });
    
    // Verifica que el valor del contador, representado en el elemento <h3>, sea 0.
    expect(wrapper.find('h3').text()).toBe('0');
  });

  // Test para verificar que el contador incrementa al hacer clic en el botón de incrementar.
  it('debe incrementar el contador cuando se hace click en el botón de incrementar', async () => {
    // Monta el componente Contador con el store.
    const wrapper = mount(Contador, { global: { plugins: [store] } });
    
    // Simula un clic en el primer botón (el de incrementar).
    await wrapper.find('button').trigger('click');
    
    // Verifica que el contador haya incrementado, por lo que el texto del <h3> debe ser '1'.
    expect(wrapper.find('h3').text()).toBe('1');
  });

  // Test para verificar que el contador disminuye al hacer clic en el botón de disminuir.
  it('debe disminuir el contador cuando se hace click en el botón de disminuir', async () => {
    // Monta el componente Contador con el store.
    const wrapper = mount(Contador, { global: { plugins: [store] } });
    
    // Simula un clic en el segundo botón (el de disminuir).
    await wrapper.findAll('button')[1].trigger('click');
    
    // Verifica que el contador haya disminuido, por lo que el texto del <h3> debe ser '-1'.
    expect(wrapper.find('h3').text()).toBe('-1');
  });
});
