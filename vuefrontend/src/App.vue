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
import Info from './components/Info.vue'
import Dash from './components/Dash.vue'
import items from './components/items.vue'
import one from  '../src/components/one.vue';


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
    Filter ,
    Info ,
    Dash ,
    items ,
    one
    
  },
})
</script>

<template>
  <div>
  
    <router-view /> 
  </div>
</template>


.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-gap: 10rem;
  padding: -10px 0px;
}

.grid-item {
  position: relative;
  bottom: -100px;
  border: 1px solid #ccc;
  padding: 2rem;
  cursor: pointer;
  text-align: center;
}