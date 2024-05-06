import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/users',
      name: 'Find users',
      component: () => import('../views/UsersView.vue')
    },
    {
      path: '/blog',
      name: 'Find blog',
      component: () => import('../views/BlogsView.vue')
    },
    {
      path: '/contests',
      name: 'Find contests',
      component: () => import('../views/ContestsView.vue')
    },
    {
      path: '/problems',
      name: 'Find problems',
      component: () => import('../views/ProblemsView.vue')
    },
    {
      path: '/recent',
      name: 'Recent actions',
      component: () => import('../views/RecentView.vue')
    }
  ]
})

export default router
