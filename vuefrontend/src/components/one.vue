<template>
    <Navbar/>
    <div class="item-card" v-if="item">
      <img :src="item.image" :alt="item.name" />
      <h3>Model: {{ item.name }}</h3>
      <div>Price: {{ item.price }}</div>
      <div>Description: {{ item.desc }}</div>
      <div>Category: {{ item.gen }}</div>
      <div class="quantity-controls">
        <button @click="decrementQuantity">-</button>
        <div class="quantity">{{ quantity }}</div>
        <button @click="incrementQuantity">+</button>
      </div>
    </div>
    <div v-else>
      Loading...
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
            }
            catch (error) {
                console.error("Failed to fetch item", error);
            }
        },
        incrementQuantity() {
            this.quantity++;
        },
        decrementQuantity() {
            if (this.quantity > 1) {
                this.quantity--;
            }
        },
    },
    components: { Navbar }
});
  </script>
  
  <style scoped>
  .item-card {
    background-color: #f2f2f2;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 16px;
    display: inline-block;
    margin: 16px;
    text-align: center;
  }
  
  .item-card img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 10px;
  }
  
  .item-card div {
    font-size: 14px;
    margin-bottom: 4px;
  }
  
  .quantity-controls {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
  }
  
  .quantity-controls button {
    border: none;
    background-color: #f2f2f2;
    color: #333;
    font-size: 18px;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
  
  .quantity {
    font-size: 18px;
    margin: 0 10px;
  }
  </style>
  