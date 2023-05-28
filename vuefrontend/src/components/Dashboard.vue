<template>
    <div class="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <b-table :items="users" striped hover>
        <template #cell(name)="row">
          {{ row.fname }} {{ row.lname }}
        </template>
        <template #cell(email)="row">
          {{ row.email }}
        </template>
        <template #cell(role)="row">
          {{ row.is_admin ? 'Admin' : 'User' }}
        </template>
      </b-table>
    </div>
  </template>

  <template>
    <template>
    <div>
      <h1>Admin Dashboard</h1>
  
      <h2>Users</h2>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Card Info</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.cardInfo }}</td>
          </tr>
        </tbody>
      </table>
  
      <h2>Products</h2>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Product Name</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="category in categories" :key="category.id">
            <td>{{ category.name }}</td>
            <td>
              <ul>
                <li v-for="product in category.items" :key="product.id">
                  {{ product.name }}
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  interface User {
    id: number;
    cardInfo: string;
  }
  
  interface Category {
    id: number;
    name: string;
    items: Product[];
  }
  
  interface Product {
    id: number;
    name: string;
  }
  
  export default defineComponent({
    data() {
      return {
        users: [
          { id: 1, cardInfo: 'Card Info 1' },
          { id: 2, cardInfo: 'Card Info 2' },
          { id: 3, cardInfo: 'Card Info 3' },
        ] as User[],
        categories: [
          {
            id: 1,
            name: 'Men',
            items: [
              { id: 1, name: 'Product 1' },
              { id: 2, name: 'Product 2' },
            ],
          },
          {
            id: 2,
            name: 'Women',
            items: [
              { id: 3, name: 'Product 3' },
              { id: 4, name: 'Product 4' },
            ],
          },
          {
            id: 3,
            name: 'Kids',
            items: [
              { id: 5, name: 'Product 5' },
              { id: 6, name: 'Product 6' },
            ],
          },
        ] as Category[],
      };
    },
  });
  </script>
  
  <style scoped>
  h1 {
    font-size: 24px;
    margin-bottom: 16px;
  }
  
  h2 {
    font-size: 20px;
    margin-top: 24px;
    margin-bottom: 8px;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 16px;
  }
  
  th,
  td {
    border: 1px solid #ccc;
    padding: 8px;
  }
  
  th {
    background-color: #f0f0f0;
  }
  
  ul {
    margin: 0;
    padding-left: 0;
  }
  
  li {
    list-style-type: none;
    margin-bottom: 4px;
  }
  </style>
  
  </template>
  
  <script lang="ts">
  import axios from 'axios';
import { isProxy, toRaw, useSSRContext } from 'vue';


  export default {
    data() {
      return {
        users: null
      };
    },
    async created() {
      try {
        const response = await axios.get('http://localhost:3000/users');   // get request of users from api
       this.users= response.
       console.log(this.users);
       
    
      } catch (error) {
        console.error('Failed to fetch users', error);
      }
    },
  };
  </script>
  
  <style scoped>
  .admin-dashboard {
    padding: 20px;
  }
  </style>
  