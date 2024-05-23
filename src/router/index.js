import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'global-map',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/form-incidencias',
    name: 'form-incidencias',
    component: () => import('../views/HomeView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
