<template>
  <div>
    <!-- <Navbar /> -->
    <div>
      <img class="img" :src="img" @click="handle" />
      <div id="main" :style="gridStyle">
        <div v-for="product in products" :key="product.id" class="product">
          <router-link :to="`/OneProduct?product=${product.name}`">
            <img :src="product.images[1]" alt="" style="width: 100%;" />
          </router-link>

          <div class="flex">
            <p>{{ product.name }}</p>
            <div>
              <p style="text-decoration: line-through; margin: 0;">${{ product.price }}</p>
              <p style="margin: 0;">{{ product.discount * 100 }}% discount</p>
            </div>
          </div>
        </div>
      </div>
      <div id="footer"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, computed } from 'vue';
import axios from 'axios';

interface Product {
  id: number;
  name: string;
  description: string;
  availableSizes: string;
  price: number;
  quantity: number;
  category: string;
  subCategory: string;
  variant: string;
  images: string[];
  discount: number;
}

export default defineComponent({
  name: 'AllProducts',
  components: {},
  setup() {
    const products = ref<Product[]>([]);
    const i = ref(1);
    const img = ref('https://cdn-icons-gif.flaticon.com/8112/8112604.gif');

    const handle = () => {
      i.value += 1;
      if (i.value > 3) {
        i.value = 1;
        img.value = 'https://cdn-icons-gif.flaticon.com/6416/6416394.gif';
      }
      if (i.value > 0) {
        img.value = 'https://cdn-icons-gif.flaticon.com/7211/7211809.gif';
      }
      if (i.value === 2) {
        img.value = 'https://cdn-icons-gif.flaticon.com/7211/7211849.gif';
      }
    };

    const gridStyle = computed(() => {
      return `display: grid; grid-template-columns: repeat(${i.value}, minmax(220px, 1fr)); gap: 1.8em; width: 80%; margin: 10% auto;`;
    });

    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3002/products/All/Woman');
        const productsData: Product[] = response.data;
        products.value = productsData;
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    onMounted(() => {
      fetchProducts();
    });

    return {
      products,
      i,
      img,
      handle,
      gridStyle,
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
/* #main {
  display: grid;
  grid-template-columns: repeat(3, minmax(220px, 1fr));
  gap: 1.8em;
  width: 80%;
  margin: 10% auto;
} */

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
</style>
