import { createRouter, createWebHistory } from 'vue-router';
import CartVue from '@/components/Cart.vue';
import HomeVue from '@/components/Home.vue';
import CompteVue from '@/components/Compte.vue';
import DashboardVue from '@/components/Dashboard.vue';
import FilterVue from '@/components/Filter.vue';
import HelpVue from '@/components/Help.vue';
import LoginVue from '@/components/Login.vue';
import NavbarVue from '@/components/Navbar.vue';
import OnePVue from '@/components/OneP.vue';
import ProductsVue from '@/components/Products.vue';
import SearchVue from '@/components/Search.vue';
import SideBarVue from '@/components/SideBar.vue';
import SignUpVue from '@/components/SignUp.vue';

const routes = [
  { path: '/', component: HomeVue },
  { path: '/cart', component: CartVue },
  { path: '/compte', component: CompteVue },
  { path: '/dashboard', component: DashboardVue },
  { path: '/filter', component: FilterVue },
  { path: '/help', component: HelpVue },
  { path: '/login', component: LoginVue },
  { path: '/navbar', component: NavbarVue },
  { path: '/onep', component: OnePVue },
  { path: '/products', component: ProductsVue },
  { path: '/search', component: SearchVue },
  { path: '/sidebar', component: SideBarVue },
  { path: '/signup', component: SignUpVue },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
