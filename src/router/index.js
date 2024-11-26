import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  // Usamos el historial del navegador para manejar las rutas de la aplicación
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',  // Ruta principal
      name: 'home',
      component: HomeView,  // Componente de la vista principal
    },
    {
      path: '/about',  // Ruta para la vista "Acerca de"
      name: 'about',
      component: () => import('../views/AboutView.vue'),  // Carga dinámica del componente
    },
    {
      path: '/contador',  // Ruta para el contador
      name: 'contador',
      component: () => import('../components/ContadorComponent.vue'),  // Carga dinámica del componente
    },
    {
      path: '/parent',  // Ruta para el componente padre
      name: 'parent',
      component: () => import('../components/ParentComponent.vue'),  // Carga dinámica del componente
    },
    {
      path: '/child',  // Ruta para el componente hijo
      name: 'child',
      component: () => import('../components/ChildComponent.vue'),  // Carga dinámica del componente
    },
  ],
})

export default router
