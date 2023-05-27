<script setup lang="ts">
import { defineComponent } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import SignUp from './components/SignUp.vue'
import Products from './components/Products.vue'
import Help from './components/Help.vue'
import SideBar from './components/SideBar.vue'
import Cart from '../src/components/Cart.vue';
import OneP from '../src/components/OneP.vue';
import Search from '../src/components/Search.vue';
import Navbar from './components/Navbar.vue'
import Filter from './components/Filter.vue'


// Define the component
const App = defineComponent({
  components: {
    RouterLink,
    RouterView,
    Home,
    Login,
    SignUp,
    Products,
    Help,
    SideBar,
    Navbar, 
    Cart ,
    OneP,
    Search,
    Filter 
  },
})
</script>

<template>
  <div>
    <!-- Render the SideBar component -->
    <router-view /> <!-- Render the current route component -->
  </div>
</template>