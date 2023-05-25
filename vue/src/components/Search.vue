<template>
    <div>
      <header>
        <div id="hambuger">
          <img
            src="https://icon-library.com/images/menu-icon-png-3-lines/menu-icon-png-3-lines-16.jpg"
            alt=""
            id="hamburgerIcon"
          />
        </div>
        <div id="logohead">
          <a href="/">
            <img
              src="https://logodownload.org/wp-content/uploads/2014/05/zara-logo-1.png"
              alt=""
              id="zara_logo"
            />
          </a>
          <div id="ul">
            <ul>
              <a href="/help">
                <li class="log-help">HELP</li>
              </a>
              <a href="/cart">
                <li>CART</li>
              </a>
            </ul>
          </div>
        </div>
      </header>
  
      <div id="container">
        <div id="main">
          <input
            type="text"
            name=""
            v-model="searchTerm"
            id="searchbar"
            @input="handleSearch"
          />
  
          <div id="trending_product">
            <p v-if="searchTerm">Is this what you're looking for?</p>
            <div v-if="searchTerm !== '' && filteredProducts.length > 0">
              <div
                v-for="product in filteredProducts"
                :key="product.id"
                class="product"
              >
                <div class="image_div">
                  <img
                    @click="goToProduct(product.id)"
                    :src="product.img"
                    alt=""
                  />
                </div>
                <div class="product_info_rightSide">
                  <div class="product_name">
                    <h2>{{ product.name }}</h2>
                  </div>
  
                  <p>${{ product.price }}</p>
                </div>
              </div>
            </div>
            <p v-else>No products found.</p>
          </div>
        </div>
        <div id="searchProd" class="grid"></div>
        <div id="shirt-products" class="none grid"></div>
        <div id="shoes-products" class="none grid"></div>
        <div id="womenAccessories-products" class="none grid"></div>
        <div id="women-jacket" class="none grid"></div>
        <div id="footer_section">
          <div id="about"></div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import axios, { type AxiosResponse } from 'axios';
  import { Component, Vue } from 'vue-property-decorator';
  
  interface Product {
    id: number;
    name: string;
    category: string;
    img: string;
    description: string;
    price: number;
    size: string;
  }
  
  @Component
  export default class MyComponent extends Vue {
    private products: Product[] = [];
    private searchTerm: string = '';
    $router: any;
  
    mounted() {
      this.fetchData();
    }
  
    async fetchData() {
      try {
        const response: AxiosResponse<Product[]> = await axios.get('http://localhost:3002/products/All/Clothing');
        this.products = response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  
    handleSearch() {
      this.filteredProducts = this.products.filter((product) =>
        product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  
    goToProduct(productId) {
     
      this.$router.push(`/OneP/${productId}`);
    }
  
    get filteredProducts() {
      return this.products.filter((product) =>
        product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }
  </script>
  