<template>
  <div>
    <div id="header"></div>
    <div id="container">
      <div class="left_side_content">
        <h4>ZARA MESSY WEEK</h4>
        <h3>PRODUCT MANAGER</h3>
        <div class="container">
          <div class="input-container">
  <input v-model="gradColor1" @change="updateGradientColor('--grad-color-1', gradColor1)" type="color" class="color-input" />
  <div id="custom-input-1" :style="{ backgroundColor: gradColor1 }" class="custom"></div>
</div>

<div class="input-container">
  <input v-model="gradColor2" @change="updateGradientColor('--grad-color-2', gradColor2)" type="color" class="color-input" />
  <div id="custom-input-2" :style="{ backgroundColor: gradColor2 }" class="custom"></div>
</div>

<div class="input-container">
  <input v-model="gradColor3" @change="updateGradientColor('--grad-color-3', gradColor3)" type="color" class="color-input" />
  <div id="custom-input-3" :style="{ backgroundColor: gradColor3 }" class="custom"></div>
</div>

<div class="input-container">
  <input v-model="gradColor4" @change="updateGradientColor('--grad-color-4', gradColor4)" type="color" class="color-input" />
  <div id="custom-input-4" :style="{ backgroundColor: gradColor4 }" class="custom"></div>
</div>
</div>
        <p @click="redirectToProducts">View more</p>
      </div>
      <div class="image_div">
        <img :src="product.images[currentImageIndex]" alt="" @wheel="changeImage" ref="imgElement" />
      </div>
      <div class="product_info_rightSide">
        <div class="product_name">
          <h2>{{ product.name }}</h2>
        </div>
        <p>{{ product.description }}</p>
        <p>{{ product.price }} TND</p>
        <p>{{ product.discount * 100 }}% discount</p>
        <hr />
        <div class="sizes">
          -
          <select ref="selectElement" size="4" class="select-element">
            <option v-for="size in product.availableSizes" :key="size" :value="size">{{ size }}</option>
          </select>
        </div>

        <div class="sizeScale">
          <p>FIND YOUR SIZE</p>
          <p>SIZE GUIDE</p>
        </div>
        <router-link :to="`/Cart?product=${product.id}`">
          <button>add to cart</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import axios from 'axios';

interface Product {
  name: string;
  description: string;
  availableSizes: string[];
  price: number;
  quantity: number;
  category: string;
  subCategory: string;
  variant: string;
  images: string[];
  discount: number;
  id: string;
}

export default defineComponent({
  name: 'OneP',
  data() {
    return {
      currentImageIndex: 0,
      product: {
        name: '',
        description: '',
        availableSizes: [''],
        price: 0,
        quantity: 0,
        category: '',
        subCategory: '',
        variant: '',
        images: [''],
        discount: 0,
        id: '',
      } as Product,
      gradColor1: '#88d1e0',
      gradColor2: '#0de2db',
      gradColor3: '#0de599',
      gradColor4: '#87f2b4',
    };
  },
  methods: {
    redirectToProducts() {
      window.location.href = '/Products';
    },
    changeImage(event: WheelEvent) {
      const delta = Math.sign(event.deltaY);
      this.currentImageIndex = (this.currentImageIndex + delta + this.product.images.length) % this.product.images.length;

      if (delta > 0) {
        this.setCursorDPI('zoom-out');
      } else if (delta < 0) {
        this.setCursorDPI('zoom-in');
      }
    },
    setCursorDPI(cursorStyle: string) {
      const imgElement = this.$refs.imgElement as HTMLImageElement;
      if (imgElement) {
        imgElement.style.cursor = cursorStyle;
      }
    },
    updateGradientColor(variable: string, value: string) {
  document.documentElement.style.setProperty(variable, value);
  if (variable === '--grad-color-1') {
    document.body.style.background = `linear-gradient(65deg, ${value}, var(--grad-color-2), var(--grad-color-3), var(--grad-color-4))`;
  } else if (variable === '--grad-color-2') {
    document.body.style.background = `linear-gradient(65deg, var(--grad-color-1), ${value}, var(--grad-color-3), var(--grad-color-4))`;
  } else if (variable === '--grad-color-3') {
    document.body.style.background = `linear-gradient(65deg, var(--grad-color-1), var(--grad-color-2), ${value}, var(--grad-color-4))`;
  } else if (variable === '--grad-color-4') {
    document.body.style.background = `linear-gradient(65deg, var(--grad-color-1), var(--grad-color-2), var(--grad-color-3), ${value})`;
  }
}

  },
  mounted() {
    const currentUrl = window.location.href;
    const id = currentUrl.substring(currentUrl.lastIndexOf('/')).split('=')[1];

    axios
      .get(`http://localhost:3000/products/name/${id}`)
      .then(response => {
        const productData = response.data[0];
        const obj: Product = {
          name: productData.name,
          description: productData.description,
          availableSizes: productData.availableSizes,
          price: productData.price,
          quantity: productData.quantity,
          category: productData.category,
          subCategory: productData.subCategory,
          variant: productData.variant,
          images: productData.images,
          discount: productData.discount,
          id: productData.id,
        };
        this.product = obj;
      })
      .catch(error => {
        console.error(error);
      });
  },
});
</script>

  

  
  <style scoped>
  :root {
    --grad-color-1: #88d1e0;
    --grad-color-2: #0de2db;
    --grad-color-3: #0de599;
    --grad-color-4: #87f2b4;
  }

body {
  background: linear-gradient(65deg, var(--grad-color-1), var(--grad-color-2), var(--grad-color-3), var(--grad-color-4));
  width: 100vh;
  height: 100vh;
}

.container {
  position: absolute;
  left: 18%;
  top: 70%;
  transform: translateX(-50%) translateY(-50%) rotate(-90deg);
}

.color-input {
  display: inline-block;
  width: 32px;
  height: 32px;
  border: none;
  outline: none;
  opacity: 0;
  margin: 50px;
}

.custom {
  width: 50px;
  height: 50px;
  border-radius: 50px;
  margin-top: -96px;
  margin-left: 38px;
  border: 5px solid rgb(8, 6, 6);
}

.custom:hover {
  cursor: pointer;
  box-shadow: 0px 0px 50px 5px #4e4e4e;
}

.color-input:hover {
  cursor: pointer;
}

.color-input:hover + .custom {
  box-shadow: 0px 0px 50px 5px #4e4e4e;
}



/* various id hacks to properly style each input element */
#grad-input-1 {
  margin-top: 0;
}

#custom-input-1 {
  background-color: var(--grad-color-1);
}

#custom-input-2 {
  background-color: var(--grad-color-2);
}

#custom-input-3 {
  background-color: var(--grad-color-3);
}

#custom-input-4 {
  background-color: var(--grad-color-4);
}
  .select-element {
  width: 285px; 
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 2px;
}

.select-element option {
  padding: 8px;
}

* {
              margin: 0;
              padding: 0;
              font-family: "Karla", sans-serif;
            }
            #container {
              width: 85%;
              /* border: 1px solid red; */
              display: flex;
              margin: auto;
              justify-content: space-between;
            }
            
            /* left side content div  */
            .left_side_content {
              width: 18%;
              /* border: 1px solid blue; */
              height: 80%;
              margin-top: 15%;
            }
            .left_side_content > :nth-child(2) {
              margin-top: 1.5em;
              font-weight: 400;
            }
            .left_side_content > p {
              font-size: 0.7em;
              line-height: 1.5em;
              margin-top: 1.5em;
            }
            .left_side_content > :nth-child(5) {
              text-decoration: underline;
              cursor: pointer;
            }
            
            /* middle image divv  */
            .image_div {
              width: 28%;
              /* border: 1px solid green; */
            }
            .image_div > img {
              width: 100%;
            }
            
            /* right side product information div   */
            .product_info_rightSide {
              width: 22%;
              /* border: 1px solid teal; */
              padding-top: 1.5em;
            }
            .product_name {
              display: flex;
              justify-content: space-between;
              /* border: 1px solid red; */
            }
            .product_name > h2 {
              font-size: 1.2em;
              font-weight: bold;
            }
            .product_name > img {
              width: 5%;
              height: 1em;
              margin-top: 0.2em;
            }
            .product_info_rightSide > p {
              font-size: 0.8em;
            }
            .product_info_rightSide > :nth-child(2) {
              line-height: 1.4em;
              margin-top: 1.5em;
              margin-bottom: 4em;
            }
            .product_info_rightSide > :nth-child(4) {
              /* border: 1px solid red; */
              padding-top: 1em;
              padding-bottom: 2em;
            }
            .sizes {
              line-height: 2em;
              border-bottom: 1px solid black;
              border-top: 1px solid black;
              font-size: 0.8em;
              margin-bottom: 0.7em;
            }
            .sizes > p:hover {
              background-color: #e7e6e6f5;
              cursor: pointer;
            }
            .sizeScale {
              font-size: 0.9em;
              display: flex;
              justify-content: space-between;
            }
            .sizeScale > p:hover {
              cursor: pointer;
            }
            button {
              margin: 0.9m 0em;
              height: 7%;
              width: 100%;
              border: none;
              background-color: rgb(127, 127, 127);
              color: rgb(255, 250, 250);
              font-weight: bold;
              cursor: pointer;
            }
            .product_info_rightSide > :last-child {
              margin-top: 0.8em;
            }
            
            
            
            @media only screen and (min-width: 375px) and (max-width: 768px) {
              .prev,
              .next,
              
            
              .image_div > img {
                width: 120%;
                margin-top: 30%;
                margin-left: -20%;
            }
            
            
            }
            
            @media only screen and (min-width: 0px) and (max-width: 390px) {
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
              .rightoptions p,
              #search-input {
                font-size: 8px;
              }
              #footer a {
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
            
              body{
                line-height:1.5em;
              }
            
              .popup{
              width: 50%;
            }
            
            
            
            
              .product_info_rightSide {
              width: 100%;
             
            }
            
            .left_side_content {
              width: 100%;
              
            }
            
            .image_div {
              width: 100%;
              /* border: 1px solid green; */
            }
            
            #container{
              flex-direction: column
            }
        }
  </style>
  