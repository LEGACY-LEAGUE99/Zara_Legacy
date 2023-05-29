

import CartVue from '../components/Cart.vue';
import OnePVue from '../components/OneP.vue';
import SearchVue from '../components/Search.vue';
import NavbarVue from '@/components/Navbar.vue';
import FilterVue from '@/components/Filter.vue';
import InfoVue from '@/components/Info.vue';
import Dash from '@/components/Dash.vue';
import itemsVue from '@/components/items.vue';
import one from '@/components/one.vue';



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
  } ,
  {
    path: '/Items',
    name: 'Items',
    component: itemsVue

  },
  {
    path: '/items/:itemId',
    name: 'one',
    component: one

    path: '/Dashboard',
    name: 'Dashboard',
    component: DashboardVue

  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
