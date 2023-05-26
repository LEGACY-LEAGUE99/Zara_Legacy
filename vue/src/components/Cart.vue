<template>
    <div>
      <div class="product-item" v-for="item in products" :key="item.id">
        <div class="product-image">
          <img :src="item.image" alt="Product Image" class="image" />
        </div>
        <div class="product-details">
          <div class="product-title">zad</div>
          <div class="product-price">dada.00</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        products: [
          // Array of product objects with properties like 'id', 'image', 'title', and 'price'
        ],
      };
    },
  };
  </script>
  
  <style>
  .product-item {
    width: 200px;
    height: 220px;
    /* Add additional styling as needed */
  }
  
  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* Add additional styling as needed */
  }
  
  .product-details {
    display: flex;
    justify-content: space-between;
    /* Add additional styling as needed */
  }
  
  .product-title {
    font-size: 12px;
    /* Add additional styling as needed */
  }
  
  .product-price {
    font-size: 12px;
    /* Add additional styling as needed */
  }
  </style>
  