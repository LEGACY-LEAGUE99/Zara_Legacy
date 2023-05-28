<script setup lang="ts">
import { defineComponent } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import SignUp from './components/SignUp.vue'
import Products from './components/Products.vue'
import Compte from './components/Compte.vue'
import Help from './components/Help.vue'
import SideBar from './components/SideBar.vue'
import Navbar from './components/Navbar.vue'

// Define the component
const App = defineComponent({
  components: {
    RouterLink,
    RouterView,
    Home,
    Login,
    SignUp,
    Products,
    Compte,
    Help,
    SideBar
  },
})
</script>

<template>
  <div>
    <Navbar/>
    <!-- Render the SideBar component -->
    <router-view /> <!-- Render the current route component -->
  </div>
</template>