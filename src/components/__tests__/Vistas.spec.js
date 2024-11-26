import { describe, it, expect, vi } from 'vitest'; // Importación de funciones de Vitest para la definición y ejecución de pruebas.
import { shallowMount, mount } from '@vue/test-utils'; // Importación de funciones de Vue Test Utils para montar componentes de Vue.
import child from '@/components/ChildComponent.vue'; // Importación del componente ChildComponent para las pruebas.
import contador from '@/components/ContadorComponent.vue'; // Importación del componente ContadorComponent para las pruebas.
import parent from '@/components/ParentComponent.vue'; // Importación del componente ParentComponent para las pruebas.
import { createStore } from 'vuex'; // Importación de la función createStore para crear un store de Vuex en las pruebas.

describe('Validación de la existencia de los componentes', () => {
  // Sección para realizar pruebas relacionadas con la existencia del componente ChildComponent.vue
  describe('child', () => {
    it('Debe existir el componente ChildComponent.vue', () => {
      // Montamos el componente ChildComponent usando shallowMount, ideal para pruebas unitarias de componentes sin montar sus hijos.
      const wrapper = shallowMount(child);
      // Verificamos que el componente exista en el wrapper (es decir, que se haya montado correctamente).
      expect(wrapper.exists()).toBe(true);
    });
  });

  // Sección para realizar pruebas relacionadas con la existencia del componente ContadorComponent.vue
  describe('contador', () => {
    it('Debe existir el componente ContadorComponent.vue', () => {
      // Se crea un store mock para simular el entorno de Vuex, donde se puede definir el estado y acciones sin necesidad de un store real.
      const store = createStore({
        state: {
          contador: 0, // Establecemos un estado inicial para el contador, que es lo que el componente espera.
        },
        actions: {
          accionIncrementar: vi.fn(), // Se mockea la acción 'accionIncrementar', ya que no es necesario ejecutar la lógica real en este test.
          accionDisminuir: vi.fn(), // De igual manera, mockeamos la acción 'accionDisminuir'.
        },
      });

      // Montamos el componente ContadorComponent con el store mock configurado. Esto permite probar cómo interactúa con el store.
      const wrapper = mount(contador, {
        global: {
          plugins: [store], // Inyectamos el store mock para que el componente tenga acceso al mismo.
        },
      });

      // Verificamos que el componente ContadorComponent se haya montado correctamente y sea accesible.
      expect(wrapper.exists()).toBe(true);
    });
  });

  // Sección para realizar pruebas relacionadas con la existencia del componente ParentComponent.vue
  describe('parent', () => {
    it('Debe existir el componente ParentComponent.vue', () => {
      // Mockeamos el objeto $route para evitar errores relacionados con las rutas durante la prueba.
      const $route = {
        query: {
          mensaje: 'Prueba de test', // Proveemos un mensaje de prueba dentro de la query del objeto $route.
        },
      };

      // Montamos el componente ParentComponent, inyectando el mock del objeto $route para que el componente lo reciba como en el entorno real.
      const wrapper = mount(parent, {
        global: {
          mocks: {
            $route, // Proveemos el objeto $route mockeado al componente durante la prueba.
          },
        },
      });

      // Verificamos que el componente ParentComponent se haya montado correctamente y que sea accesible en el wrapper.
      expect(wrapper.exists()).toBe(true);
    });
  });
});
