import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Login from '../components/Login.vue';
import SignUp from '../components/SignUp.vue';
import Products from '../components/Products.vue';
import Help from '../components/Help.vue';
import SideBar from '../components/SideBar.vue';
import DashboardVue from '@/components/Dashboard.vue';
import CartVue from '../components/Cart.vue';
import OnePVue from '../components/OneP.vue';
import SearchVue from '../components/Search.vue';
import NavbarVue from '@/components/Navbar.vue';
import FilterVue from '@/components/Filter.vue';
import InfoVue from '@/components/Info.vue';
import Dash from '@/components/Dash.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component: SignUp
  },
   
  {
    path: '/Products',
    name: 'Products',
    component: Products
  },
 
  {
    path: '/Help',
    name: 'Help',
    component: Help
  },
  {
    path: '/SideBar',
    name: 'SideBar',
    component: SideBar
  } ,
  {
    path: '/Dash',
    name: 'Dash',
    component: Dash
  } ,
  {
    path:'/Search',
    component:SearchVue
  },
  {
    path: '/OneProduct',
    component: OnePVue
  },
  {
    path: '/cart',
    name: 'Cart',
    component: CartVue
  }
  ,{
    path: '/Navbar',
    name: 'Navbar',
    component: NavbarVue
  },{
    path: '/Filter',
    name: 'Filter',
    component: FilterVue
  } ,
  {
    path: '/Info',
    name: 'Info',
    component: InfoVue
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
