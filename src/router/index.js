import { createRouter, createWebHistory } from 'vue-router'
import NavigationPage from '@/pages/NavigationPage.vue'
import CalculationPage from '@/pages/CalculationPage.vue'

const routes = [
  { path: '/', component: NavigationPage },
  { path: '/calculate', component: CalculationPage },
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
