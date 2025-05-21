import { createRouter, createWebHistory } from 'vue-router'
import NavigationPage from '@/pages/NavigationPage.vue'
import MixingMortarsPage from '@/pages/MixingMortarsPage.vue'
import ChangingDensityByAddingMortarPage from '@/pages/ChangingDensityByAddingMortarPage.vue'
import WaterQuantityToDecreaseMortarDensityPage from '@/pages/WaterQuantityToDecreaseMortarDensityPage.vue'
import MortarWeightningPage from '@/pages/MortarWeightningPage.vue'
import WellVolumePage from '@/pages/WellVolumePage.vue'
import GnpvPage from '@/pages/GnpvPage.vue'
import CementBridgeInstallationOnBalance from '@/pages/CementBridgeInstallationOnBalance.vue'
import CementBridgeInstallationPage from '@/pages/CementBridgeInstallationPage.vue'
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage.vue'
import ConditionOfUsePage from '@/pages/ConditionOfUsePage.vue'

const routes = [
  { path: '/', component: NavigationPage },
  { path: '/privacy-policy', component: PrivacyPolicyPage },
  { path: '/condition-of-use', component: ConditionOfUsePage },
  { path: '/', component: NavigationPage },
  { path: '/mixing-mortars', component: MixingMortarsPage },
  { path: '/changing-density-by-adding-mortar', component: ChangingDensityByAddingMortarPage },
  {
    path: '/water-quantity-to-decrease-mortar-density',
    component: WaterQuantityToDecreaseMortarDensityPage,
  },
  { path: '/mortar-weightning', component: MortarWeightningPage },
  { path: '/well-volume', component: WellVolumePage },
  { path: '/gnpv', component: GnpvPage },
  { path: '/cement-bridge-installation', component: CementBridgeInstallationPage },
  { path: '/cement-bridge-installation-on-balance', component: CementBridgeInstallationOnBalance },
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
