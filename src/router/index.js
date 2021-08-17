import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect:'/government'
  },
  {
    path: '/government',
    name: 'Government',
    component: () => import('../pages/government/index.vue')
  },
  {
    path: '/traffic',
    name: 'Traffic',
    component: () => import('../pages/traffic/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
