import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
      return savedPosition || { top: 0 }
    },
  routes: [
    {
      path:'/',
      name:'Home',
      component: Home
    },
  ],
})

export default router
