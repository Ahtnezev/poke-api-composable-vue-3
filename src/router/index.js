import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

//~ Recomendación: usar lazy-loaaded, para cargar el componente cada vez que se acceda a él manualmente por el usuario.
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // >< aqui podemos hacer que las clases que nos asigna vue personalizarlas
  // >< o podemos hacerlo manualmente agregando en el <template> -> `active-class="active"`
  linkActiveClass: 'active',
  // linkExactActiveClass: 'exact-active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/pokemons',
      name: 'pokemons',
      component: () => import('../views/PokemonsView.vue')
    },
    {
      // el nombre que pasemos con parametro viajara al componente para recibirla
      path: '/pokemons/:pokemoncito',
      name: 'pokemon',
      component: () => import('../views/PokeView.vue')
    },
    {
      // validar ruta o mandar 404, de preferencia colocar al final de las rutas
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/NotFoundView.vue')
    }
  ]
})

export default router
