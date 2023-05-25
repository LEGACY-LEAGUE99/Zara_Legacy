<template>
    <div>
      <Navbar/>
      <div>
       
        <img class="img" :src="img" @click="handle" />
        <div id="main">
          <div v-for="product in products" :key="product.id">
            <img @click="redirectToProduct(product.name)" :src="product.images[2]" alt="" />
            <div class="flex">
              <p>{{ product.name }}</p>
              <div>
                <p style="text-decoration: line-through;">{{ product.discount }}</p>
                <p>${{ product.price }}</p>
              </div>
            </div>
          </div>
        </div>
        <div id="footer"></div>
      </div>
    </div>
  </template>

  <script lang="ts">
 

  import { defineComponent, ref, onMounted } from 'vue';
  import Navbar from './Navbar.vue';
  import axios from 'axios';

  interface Product {
    name: string;
  description: string;
  availableSizes: string;
  price: number,
  quantity: number,
  category: string,
  subCategory: string,
  variant: string,
  images: string,
  discount: number,
  }
  
  export default defineComponent({
    name: 'AllProducts',
    components: {
      Navbar,
    },
    setup() {
      const products = ref<Product[]>([]);
      const i = ref(1);
      const img = ref('');
  
      const handle = () => {
        i.value += 1;
        if (i.value > 2) {
          i.value = 1;
          img.value = '';
        }
        if (i.value > 0) {
          img.value = '';
        }
        if (i.value === 2) {
          img.value = '';
        }
      };
  
      const fetchProducts = async () => {
      
        try {
          const response = await axios.get(`http://localhost:3002/products/All/Woman`);
          const productsData: Product[] = response.data;
          products.value = productsData;
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
  
      const redirectToProduct = (productId: number) => {
        window.location.href = `oneProduct/${productId}`;
      };
  
      onMounted(() => {
        fetchProducts();
      });
  
      return {
        products,
        img,
        handle,
        redirectToProduct,
      };
    },
  });
  </script>
  
  <style scoped>
  * {
  margin: 0;
  padding: 0;
}

.grid {
  display: grid;
}

#main {
  grid-template-columns: repeat(4, 1fr);
  gap: 1em;
  
  width: 90%;
  margin: 10% auto;
}

#main img {
  height: 90%;
  width: 100%;
}

#main > div {
  margin-bottom: 5em;
}

#main > div p {
  font-size: x-small;
  font-weight: bold;
  color: gray;
}

#main > div > div:nth-child(2)>div {
  text-align: right;
}

.underline:hover{
    cursor:pointer;
    text-decoration:underline;
    color:black !important;
}

#main > div > div:nth-child(2) > div > p:nth-child(2) {
  background-color: yellow;
}
          
        

.flex {
  display: flex;
  justify-content: space-between;
}

@media only screen and (min-width: 375px) and (max-width: 768px){
#main {
  grid-template-columns: repeat(2, 1fr);
  gap: 1em;
  
  width: 90%;
  margin: 10% auto;
}

.prev,
.next,
.text {
font-size: 11px;
}  



}

@media only screen and (min-width: 0px) and (max-width: 390px){
#main {
  grid-template-columns: 1fr;
  gap: 1em;
  
  width: 90%;
  margin: 10% auto;
}

#bookVdo {
transform: rotateZ(90deg);
width: 750px;
height: 700px;
}
.slideshow-container {
width: 80%;
/* position: relative; */
margin-top: 10%;
font-size: 20px;
height: 700px;
margin-left: 25%;
margin-bottom: 15%;
}
.rightoptions p,#search-input{
font-size: 8px;
}
#footer a{
font-size: 13px;
}

.logo img {
padding: 2px 0px 0px;
display: inline;
margin-left: 30%;
/* top: 26px; */
margin-top: -71px;
width: 40%;
}
}

#sortPrice{
margin-top: 20px;
width: 200px;
height: 30px;
margin-left: 1030px;
border: 1px solid black;
}


#main > div {
  justify-self: center;
  align-self: center; 
  width: 400px;
  height: 550px;
}
.img {
  position: sticky;
  top: 50%;
  right: 6px; 
  transform: translateY(-50%);
  width: 30px;
  height: auto;
}
#main {
  display: grid;
  grid-template-columns: repeat(4, minmax(220px, 1fr));
  gap: 1.8em;
  width: 80%;
  margin: 10% auto;
}
  
  </style>
  