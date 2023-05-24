<template>
    <div>
      <Navbar/>
      <div>
        <div>hello</div>
        <img class="img" :src="img" @click="handle" />
        <div id="main">
          <div v-for="product in products" :key="product.id">
            <img @click="redirectToProduct(product.id)" :src="product.img" alt="" />
            <div class="flex">
              <p>{{ product.name }}</p>
              <div>
                <p style="text-decoration: line-through;">$2,990.00</p>
                <p>${{ product.price }}</p>
              </div>
            </div>
          </div>
        </div>
        <div id="footer"></div>
      </div>
    </div>
  </template>

  <script lang="ts">
 

  import { defineComponent, ref, onMounted } from 'vue';
  import Navbar from './Navbar.vue';
  import axios from 'axios';
  interface Product {
    id: number;
    gender: string;
    category: string;
    name: string;
    price: number;  
    description: string;
    color: string;
    size: string;
    img: string;
  }
  
  export default defineComponent({
    name: 'AllProducts',
    components: {
      Navbar,
    },
    setup() {
      const products = ref<Product[]>([]);
      const i = ref(1);
      const img = ref('');
  
      const handle = () => {
        i.value += 1;
        if (i.value > 2) {
          i.value = 1;
          img.value = '';
        }
        if (i.value > 0) {
          img.value = '';
        }
        if (i.value === 2) {
          img.value = '';
        }
      };
  
      const fetchProducts = async () => {
        try {
          const response = await axios.get('http://localhost:3002/api/get');
          const productsData: Product[] = response.data;
          products.value = productsData;
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
  
      const redirectToProduct = (productId: number) => {
        window.location.href = `oneProduct/${productId}`;
      };
  
      onMounted(() => {
        fetchProducts();
      });
  
      return {
        products,
        img,
        handle,
        redirectToProduct,
      };
    },
  });
  </script>
  
  <style scoped>
  
  </style>
  