<template>
    <div>
      <div class="background-video-container">
        <video v-if="vd" class="background-video" autoplay loop muted>
          <source :src="vd" type="video/mp4" />
        </video>
      </div>
  
      <div id="header"></div>
      <div id="container">
        <div class="left_side_content">
          <h4>ZARA MESSY WEEK</h4>
          <h3>PRODUCT MANAGER</h3>
          <p>
            We work with the boys programmes to ensure compliance with safety,
            health and quality standards for our products.
          </p>
          <p>
            The Greenfeild to Wear 2.0 standard aims to minimise the environmental
            impact of textile manufacturing. To that end, we have developed
            Inditex’s The List programme, which helps guarantee both that
            production processes are
          </p>
          <p @click="redirectToAllProducts">View more</p>
        </div>
        <div class="image_div">
          <img :src="product.images[2]" alt="" />
        </div>
        <div class="product_info_rightSide">
          <div class="product_name">
            <h2>{{ product.name }}</h2>
            <img :src="product.images[2]" alt="" />
          </div>
          <p>{{ product.description }}</p>
          <p>${{ product.price }}</p>
          <p>INCLUDES TVA</p>
          <hr />
          <div class="sizes">
            <p>{{ product.availableSizes.join(', ') }}</p>
          </div>
  
          <div class="sizeScale">
            <p>FIND YOUR SIZE</p>
            <p>SIZE GUIDE</p>
          </div>
          <button @click="addToCart">add to cart</button>
  
          <p>{{ product.discount }}</p>
          <p>DELIVERY, EXCHANGES AND RETURNS</p>
        </div>
      </div>
      <div id="footer"></div>
  
      <div id="popup" class="popup none">
        <h1>CART</h1>
        <h1 class="X">X</h1>
        <div id="popupmain">
          <div class="flex">
            <img :src="product.images[0]" alt="" />
            <div>{{ product.name }}</div>
            <div>{{ product.price }}</div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
import { defineComponent } from 'vue';
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
      vd: '',
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
        id: ''
      } as Product
    };
  },
  methods: {
    redirectToAllProducts() {
      this.$router.push('/products');
    },
    addToCart() {
      window.location.href = `/cart/${this.product.id}`;
    },
    addToBag() {
      window.location.href = `/cart/${this.product.id}`;
    }
  },
  mounted() {
    this.vd = '';
    
    const currentUrl = window.location.href;
    const id = currentUrl.substring(currentUrl.lastIndexOf('/')).split("=")[1];
    
    axios
      .get(`http://localhost:3002/products/name/${id}`)
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
          id: productData.id
        };
        console.log(obj)
        this.product = obj;
      })
      .catch(error => {
        console.error(error);
      });
  }
});
</script>

  

  
  <style scoped>
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
              margin: 0.8em 0em;
              height: 7%;
              width: 100%;
              border: none;
              background-color: black;
              color: white;
              font-weight: bold;
              cursor: pointer;
            }
            .product_info_rightSide > :last-child {
              margin-top: 0.8em;
            }
            
            .popup{
            position: absolute;
            right:0;
            top:0;
            width: 30%;
            background-color: white;
            height:100vh;
            overflow: scroll;
            padding:.5em;
            
            
            }
            
            .popup img{
              width:50%;
            }
            
            .popup button{
              padding:1em;
              position: sticky;
              bottom:0;
            }
            
            #popupmain>div{
              margin-bottom:10%;
            }
            
            
            
            .popup .X{
              position: absolute;
              top:0;
              right:0;
            }
            
            .none{
              display: none;
            }
            
            .flex{
              display: flex;
            }
            
            @media only screen and (min-width: 375px) and (max-width: 768px) {
              .prev,
              .next,
              .text {
                font-size: 11px;
              }
            
              .image_div > img {
                width: 130%;
                margin-top: 49%;
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
  