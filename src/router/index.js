import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import BSIT from '@/views/BSIT.vue'
import BLIS from '@/views/BLIS.vue'
import BSCS from '@/views/BSCS.vue'
import BSDMIA from '@/views/BSDMIA.vue'

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
    {
      path:'/bsit',
      name:'BSIT',
      component: BSIT
    },
    {
      path:'/blis',
      name:'BLIS',
      component: BLIS
    },
        {
      path:'/bscs',
      name:'BSCS',
      component: BSCS
    },
        {
      path:'/bsdmia',
      name:'BSDMIA',
      component: BSDMIA
    },
  ],
})

export default router
