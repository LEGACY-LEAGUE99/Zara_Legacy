<template>
    <div>
        <Navbar/>
      <div class="item-card" v-if="item">
        <img :src="item.image" :alt="item.name" />
        <h3>Model: {{ item.name }}</h3>
        <div class="price">Price: {{ item.price }}</div>
        <div class="description">Description: {{ item.desc }}</div>
        <div class="category">Category: {{ item.gen }}</div>
        <div class="quantity-container">
          <label for="quantity">Quantity:</label>
          <input type="number" v-model="quantity" id="quantity" min="1" max="10" />
        </div>
        <button class="add-to-cart" @click="addItemToCart(item, quantity, item.image, item.price)">Add to Cart</button>
        <button class="check-cart" @click="$router.push('/cart')">Check My Cart</button>
      </div>
      <div v-else>
        Loading...
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import axios from 'axios';
  import Navbar from './Navbar.vue';
  
  export default defineComponent({
    data() {
      return {
        item: null as any,
        quantity: 1,
      };
    },
    mounted() {
      this.getItem();
    },
    methods: {
      async getItem() {
        const itemId = this.$route.params.itemId;
        try {
          const response = await axios.get(`http://localhost:3000/items/${itemId}`);
          this.item = response.data;
        } catch (error) {
          console.error('Failed to fetch item', error);
        }
      },
      async addItemToCart(item: { name: any }, quantity: number, image: string, price: string) {
        try {
          const userId = localStorage.getItem('userid');
          const { name } = item;
  
          await axios.post(`http://localhost:3000/api/${userId}/cart`, { name, quantity, image, price });
          console.log('Item added to cart successfully');
        } catch (error) {
          console.error('Failed to add item to cart', error);
        }
      },
    },
    components: { Navbar },
  });
  </script>
  
  <style scoped>
  .item-card {
    position: relative;
    left: 100px;
    bottom: -50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: rem;
    border: 1px solid #ccc;
    border-radius: px;
    max-width: 400px;
    margin: 0 auto;
      
  }
  
  .item-card img {
    position: relative;
    bottom: -100px;
    max-width: 50%;
    height: auto;
    margin-bottom: 1rem;
  }
  
  .price {
    font-weight: bold;
  }
  
  .description {
    margin-top: 0.5rem;
  }
  
  .category {
    margin-top: 0.5rem;
    font-style: italic;
  }
  
  .quantity-container {
    display: flex;
    align-items: center;
    margin-top: 1rem;
  }
  
  .quantity-container label {
    margin-right: 0.5rem;
  }
  
  .add-to-cart {
    position: relative;
    bottom: 10px;
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background-color: #f6f6f6;
    color: #000000;
    border: none;
    border-radius: 2px;
    cursor: pointer;
  }
  
  .check-cart {
    position: relative;
    bottom: 10px;
    margin-top: 0.5rem;
    padding: 0.5rem 1rem;
    background-color: #27292b;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .add-to-cart:hover,
  .check-cart:hover {
    opacity: 0.5;
    color : black;
  }

  h3{
    position: relative;
    left: -20px;
    bottom: 300px;
  }
  
  </style>
  