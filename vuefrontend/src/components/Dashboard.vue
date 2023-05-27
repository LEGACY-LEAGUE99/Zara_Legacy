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
  