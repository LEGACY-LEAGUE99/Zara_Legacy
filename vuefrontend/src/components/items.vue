<template>
    <div>
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
          <div>{{ item.name }}</div>
          
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import axios from 'axios';

  interface data {
name: any;
gen: any;
itemId: any;
}
  
  export default defineComponent({
    data() {
      return {
        items: [],
        search: '',
        filter: '',
      };
    },
    mounted() {
      this.getItems();
    },
    computed: {
      filteredItems() {
        return this.items.filter((item) => {
          const nameMatch = item.name.toLowerCase().includes(this.search.toLowerCase());
          const genMatch = this.filter === '' || item.gen === this.filter;
          return nameMatch && genMatch;
        });
      },
    },
    methods: {
      async getItems() {
        try {
          const response = await axios.get('http://localhost:3000/api/items');
          this.items = response.data;
        } catch (error) {
          console.error('Failed to fetch items', error);
        }
      },
      viewItem(itemId) {
        this.$router.push(`/items/${itemId}`);
      },
    },
  });
  </script>
  
  <style scoped>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 10rem;
  }
  
  .grid-item {
    border: px solid #ccc;
    padding: 0rem;
    cursor: pointer;
    text-align: center;
  }
  </style>
  