import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      const section = document.querySelector(to.hash)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
    }
    else {
      // If there is no hash, scroll to the top
      return { top: 0, behavior: 'smooth' }
    }
  },

  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue')
    },

    {
      path: '/project/:projectName',
      name: 'Project',
      component: () => import('../views/Project.vue')
    }
  ]
})

router
export default router
