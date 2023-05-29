<template>
    <div>
      <Navbar/>
      <input v-model="search" placeholder="Search items" />
      <select v-model="filter">
        <option value="">All</option>
        <option value="men">Men</option>
        <option value="women">Women</option>
        <option value="kid">Kids</option>
      </select>
      <div class="grid-container">
        <div v-for="item in filteredItems" :key="item._id" class="grid-item" @click="viewItem(item._id)">
          <img :src="item.image" :alt="item.name" />
          <div class="item-name">{{ item.name }}</div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import axios from 'axios';
  import Navbar from './Navbar.vue';
  
  interface data {
    name: any;
    gen: any;
    itemId: any;
  }
  
  export default defineComponent({
    data() {
      return {
        items: [],
        search: "",
        filter: "",
      };
    },
    mounted() {
      this.getItems();
    },
    computed: {
      filteredItems() {
        return this.items.filter((item: any) => {
          const nameMatch = item.name.toLowerCase().includes(this.search.toLowerCase());
          const genMatch = this.filter === "" || item.gen === this.filter;
          return nameMatch && genMatch;
        });
      },
    },
    methods: {
      async getItems() {
        try {
          const response = await axios.get("http://localhost:3000/api/items");
          this.items = response.data;
        } catch (error) {
          console.error("Failed to fetch items", error);
        }
      },
      viewItem(itemId: any) {
        this.$router.push(`/items/${itemId}`);
      },
    },
    components: { Navbar }
  });
  </script>
  
  <style scoped>
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
    transition: transform 0.3s ease-in-out;
  }
  
  .grid-item:hover {
    transform: scale(1.05);
  }
  
  .item-name {
    margin-top: 0.5rem;
    font-weight: bold;
  }
  
  
  
  select {
    appearance: none;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23ccc' d='M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 0.5rem center;
    background-size: 1.5em;
  }
  
  select::-ms-expand {
    display: none;
  }
  
  select:hover {
    border-color: #999;
  }
  
  select:focus {
    outline: none;
    border-color: #555;
  }
  
  </style>
  ``
  