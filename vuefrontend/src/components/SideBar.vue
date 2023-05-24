<template>
    <div class="sidebar">
      <ul>
        <li v-for="item in items" :key="item.id" @click="selectItem(item)">
          {{ item.name }}
        </li>
      </ul>
    </div>
  </template>
  
  <script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';
  
  @Component
  export default class Sidebar extends Vue {
    private items = [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' },
    ];
  
    private selectItem(item: { id: number; name: string }): void {
      // Handle the item selection here
      console.log(`Selected item: ${item.name}`);
    }
  }
  </script>
  
  <style scoped>
  .sidebar {
    background-color: #f2f2f2;
    padding: 20px;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    cursor: pointer;
    margin-bottom: 10px;
  }
  </style>
  