import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/components/Home.vue';
import Login from '@/components/Login.vue';
import SignUp from '@/components/SignUp.vue';
import Products from '@/components/Products.vue';
import Compte from '@/components/Compte.vue';
import Help from '@/components/Help.vue';
import SideBar from '@/components/SideBar.vue';
import Navbar from '@/components/Navbar.vue';
import Cart from '@/components/Cart.vue';
import OneP from '../components/OneP.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/OneProduct',
    component: OneP,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component: SignUp,
  },
  {
    path: '/Products',
    name: 'Products',
    component: Products,
  },
  {
    path: '/Compte',
    name: 'Compte',
    component: Compte,
  },
  {
    path: '/Help',
    name: 'Help',
    component: Help,
  },
  {
    path: '/SideBar',
    name: 'SideBar',
    component: SideBar,
  },
  {
    path: '/NavBar',
    name: 'NavBar',
    component: Navbar,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
