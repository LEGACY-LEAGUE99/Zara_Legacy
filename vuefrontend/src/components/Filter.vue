<template>
    <div class="product-filter">
      <div class="filter-section">
        <label for="price-filter">Price:</label>
        <select id="price-filter" v-model="filter.price" @change="filterProducts">
          <option value="">All</option>
          <option value="10">Below $10</option>
          <option value="20">Below $20</option>
          <option value="30">Below $30</option>
        </select>
      </div>
  
      <div class="filter-section">
        <label for="color-filter">Color:</label>
        <select id="color-filter" v-model="filter.color" @change="filterProducts">
          <option value="">All</option>
          <option value="Red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
        </select>
      </div>
  
      <div class="filter-section">
        <label for="size-filter">Size:</label>
        <select id="size-filter" v-model="filter.size" @change="filterProducts">
          <option value="">All</option>
          <option value="S">Small</option>
          <option value="M">Medium</option>
          <option value="L">Large</option>
        </select>
      </div>
      <div class="product-filter">
    <p>{{ filteredProducts.length }} Products Found</p>

    <ul>
      <li v-for="product in filteredProducts" :key="product.id">
        <img :src="product.images[2]" alt="Product Image" />
        <h3>{{ product.name }}</h3>
        <p>Price: ${{ product.price }}</p>
      </li>
    </ul>
  </div>
</div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        filter: {
          price: '',
          color: '',
          size: '',
        },
        products: [],
      };
    },
    async created() {
      await this.filterProducts();
    },
    methods: {
      async filterProducts() {
        const url = 'http://localhost:3002/products/All/Woman';
        const params = {
          price: this.filter.price,
          color: this.filter.color,
          size: this.filter.size,
        };
  
        try {
          const response = await axios.get(url, { params });
          this.products = response.data;
        } catch (error) {
          console.error('Error filtering products:', error);
        }
      },
    },
    computed: {
      filteredProducts() {
        if (
          this.filter.price === '' &&
          this.filter.color === '' &&
          this.filter.size === ''
        ) {
          return this.products;
        }
  
        const filteredArray = this.products.filter((product) => {
          const matchesPrice =
            this.filter.price === '' || product.price >=Number(this.filter.price);
          const matchesColor =
            this.filter.color === '' || product.variant === this.filter.color;
          const matchesSize =
            this.filter.size === '' || product.availableSizes.includes(this.filter.size);
            console.log(typeof(product.price))
  
          return matchesPrice && matchesColor && matchesSize;
        });
  
        return filteredArray.map((product) => {
          return {
            ...product,
            availableSizes: Array.isArray(product.availableSizes)
              ? product.availableSizes
              : [],
          };
        });
      },
    },
  };
  </script>
  
  <style>
  .product-filter {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.filter-section {
  display: flex;
  align-items: center;
  gap: 10px;
}

ul {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  justify-items: center;
}

li {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

img {
  max-width: 100%;
  height: auto;
}

h3 {
  font-size: 16px;
  margin-top: 10px;
}

p {
  font-size: 14px;
  color: #888;
}

/* Additional styles to match Zara's design */
.product-filter {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f7f7f7;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.filter-section {
  font-size: 14px;
}

label {
  font-weight: bold;
}

select {
  padding: 5px 10px;
  border-radius: 3px;
  border: 1px solid #ccc;
}

p {
  font-weight: bold;
  color: #333;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}
  </style>
  