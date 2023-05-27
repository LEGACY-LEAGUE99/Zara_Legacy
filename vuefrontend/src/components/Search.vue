<template>
    <div>
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
            
            <div v-if="searchTerm !== '' && filteredProducts.length > 0">
              <div v-for="product in filteredProducts" :key="product.id" class="product">
               
                    <router-link :to="`/OneProduct?product=${product.name}`">
                        <div class="image_div">
            <img
              :src="product.images[1]"
              alt=""
            />
        </div>
          </router-link>
                
                <div class="product_info_rightSide">
                  <div class="product_name">
                    <h2>{{ product.name }}</h2>
                  </div>
  
                  <p>${{ product.price }}</p>
                </div>
              </div>
            </div>
       
          </div>
        </div>
        
      </div>
    </div>
  </template>


  <script lang="ts">
  import axios, { type AxiosResponse } from 'axios';
  
  interface Product {
    id: number;
    name: string;
    category: string;
    images: string[number];
    description: string;
    price: number;
    size: string;
  }
  
  export default {
    data() {
      return {
        products: [] as Product[],
        searchTerm: '',
      };
    },
    mounted() {
      this.fetchData();
    },
    methods: {
        handleSelectFocus(): void {
      const select = this.$refs.selectElement as HTMLSelectElement;
      select.size = 5;
      select.classList.add('fadeIn');
      select.classList.remove('fadeOut');
      select.style.backgroundColor = '#FFF';
    },
    handleSelectBlur(): void {
      const select = this.$refs.selectElement as HTMLSelectElement;
      select.size = 1;
      select.classList.add('fadeOut');
      select.classList.remove('fadeIn');
      select.style.backgroundColor = '#FFF';
    },
    handleSelectChange(): void {
      const select = this.$refs.selectElement as HTMLSelectElement;
      select.size = 1;
      select.blur();
      select.style.backgroundColor = '#FFF';
    },
    handleSelectMouseOver(): void {
      const select = this.$refs.selectElement as HTMLSelectElement;
      if (select.size === 1) {
        select.style.backgroundColor = 'rgb(247, 247, 247)';
      }
    },
    handleSelectMouseOut(): void {
      const select = this.$refs.selectElement as HTMLSelectElement;
      if (select.size === 1) {
        select.style.backgroundColor = '#FFF';
      }
    },
      async fetchData() {
        try {
          const response: AxiosResponse<Product[]> = await axios.get('http://localhost:3002/products/All/Woman');
          this.products = response.data;
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      },
      handleSearch() {
        this.filteredProducts = this.products.filter((product) =>
          product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      },
    //   goToProduct(productId) {
    //     this.$router.push(`/OneP/${productId}`);
    //   },
    },
    computed: {
      filteredProducts(): Product[] {
        return this.products.filter((product) =>
          product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      },
    },
  };
  </script>
  <style scoped>
  
  * {
    margin: 0;
    /* font-family: 'PT Sans', sans-serif; */
    font-family: "Karla", sans-serif;
    padding: 0;
  justify-self: center;
  align-self: center; 
  }
  header {
    display: flex;
    position: sticky;
    background-color: white;
    top: 0;
    z-index: 1;
  }
  
  /* top left side hamburger section  */
  #hambuger {
    width: 25%;
  
    /* border: 1px solid red; */
  }
  #hamburgerIcon {
    width: 15%;
    padding-top: 1.2em;
    padding-left: 1.5em;
    cursor: pointer;
  }
  
  /* right side logo head   */
  #logohead {
    /* border: 1px solid blue; */
    display: flex;
    padding-top: 0.8em;
  }
  
  #logohead>a{
      width:17.5%;
      
  }
  #zara_logo {
    width: 100%;
    height: 100%;
    cursor: pointer;
  
    /* border: 1px solid red; */
  }
  a{
      text-decoration: none;
      color: black;
  }
  
  ul {
    /* border: 2px solid green; */
    display: flex;
    list-style: none;
    position: absolute;
    right: 0;
    gap: 3.2em;
    padding-right: 4em;
    padding-top: 1em;
    font-size: 0.6em;
    font-weight: bolder;
  }
  li {
    cursor: pointer;
  }
  
  
  
  /* main container   */
  #main {
    width: 92.5%;
    /* border: 1px solid red; */
    margin-left: 7.9999%;
  }
  
  
  /* search baar  */
  #searchbar {
    margin-top: 6em;
    width: 95%;
    outline: none;
    border: none;
    border-bottom: 1px solid black;
    padding: 0.2em 0em;
    font-size: 1.5em;
  font-weight: bold;
  }
  #searchbar::placeholder {
    color: black;
  }
  
  /* below search baar tranding products  */
  #trending_product {
    border: 1px solid red;
    position: flex;
   

  }
  #trending_product > :first-child {
    color: black;
    cursor: text;
    /* border: 1px solid red; */
    font-size: 1.5em;
  }
  
  #trending_product > p {
    cursor: pointer;
    color: #757575;
    margin-bottom: 2.1em;
  }
  
  
  
  .grid{
display: grid;
   
  }
  .none{
    display: none;
  }
  #shirt-products {
    /* display: grid; */
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 20px;
    padding: 0px 20px;
  }
  #shirt-products > div {
    margin-bottom: 2.8em;
  }
  #shirt-products > div > div {
    display: flex;
    justify-content: space-between;
    font-size: 0.75em;
  }
  #shirt-products > div > div >:nth-child(1):hover{
      text-decoration: underline;
      cursor: pointer;
  }
  
  #shirt-products > div > img {
    width: 100%;
  }
  
  /* shoes product   */
  #shoes-products{
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 20px;
    padding: 0px 20px;
  }
  #shoes-products > div {
    margin-bottom: 2.8em;
  }
  #shoes-products > div > div {
    display: flex;
    justify-content: space-between;
    font-size: 0.75em;
  }
  #shoes-products > div > div >:nth-child(1):hover{
      text-decoration: underline;
      cursor: pointer;
  }
  
  #shoes-products > div > img {
    width: 100%;
  }
  
  /* womenAccessories-products */
  
  #womenAccessories-products{
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 20px;
    padding: 0px 20px;
  }
  #womenAccessories-products > div {
    margin-bottom: 2.8em;
  }
  #womenAccessories-products > div > div {
    display: flex;
    justify-content: space-between;
    font-size: 0.75em;
  }
  #womenAccessories-products > div > div >:nth-child(1):hover{
      text-decoration: underline;
      cursor: pointer;
  }
  
  #womenAccessories-products > div > img {
    width: 100%;
  }
  
  /* women-jacket  */
  #women-jacket {
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 20px;
    padding: 0px 20px;
  }
  #women-jacket  > div {
    margin-bottom: 2.8em;
  }
  #women-jacket  > div > div {
    display: flex;
    justify-content: space-between;
    font-size: 0.75em;
  }
  #women-jacket  > div > div >:nth-child(1):hover{
      text-decoration: underline;
      cursor: pointer;
  }
  
  #women-jacket > div > img {
    width: 100%;
  }
  
  /* footer section   */
  #about {
    display: flex;
    width: 92.5%;
    border-bottom: 1px solid rgb(212, 211, 211);
    padding-top: 50%;
    padding-bottom: 10%;
    /* border: 2px solid red; */
  
    /* margin-bottom: 50px; */
  }
  #about > :nth-child(3) {
    margin-left: 2.3em;
  }
  #about > :nth-child(4) {
    margin-left: 2.3em;
  }
 
  
  #footer_section {
    /* border: 2px solid red; */
    margin-left: 7.5%;
  }
  footer {
    display: flex;
    justify-content: space-between;
    padding-top: 5.5em;
    padding-bottom: 8em;
    width: 92%;
    /* border: 2px solid red; */
  }
  
  #footer_left_box {
    /* border: 1px solid red; */
    font-size: 0.65em;
    font-weight: bold;
    width: 50%;
  }
  #footer_left_box > :nth-child(2) {
    margin-top: 15em;
  }
  #footer_right_box {
    /* border: 1px solid red; */
    font-size: 0.65em;
    font-weight: bold;
    width: 30%;
    text-align: right;
  }
  #footer_right_box > :nth-child(2) {
    margin-top: 2.2em;
    color: grey;
  }
  
  #searchProd {
    /* display: grid; */
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 20px;
    padding: 0px 20px;
  }
  #searchProd > div {
    margin-bottom: 2.8em;
  }
  #searchProd > div > div {
    display: flex;
    justify-content: space-between;
    font-size: 0.75em;
  }
  #searchProd > div > div >:nth-child(1):hover{
      text-decoration: underline;
      cursor: pointer;
  }
  
  #searchProd > div > img {
    width: 100%;
  }
  
  
  
  
  /* media queries ---------------------------- */
  @media screen and (min-width: 360px) and (max-width: 741px) {
    /* #ul,
    .none {
      display: none;
    } */
    .log-help{
      display: none;
    }
  
    #hambuger {
      width: 10%;
  
      /* border: 1px solid red; */
    }
    #hamburgerIcon {
      width: 50%;
      padding-left: 10px;
      padding-top: 1em;
      cursor: pointer;
    }
    #logohead {
      width: 90%;
      /* border: 1px solid blue; */
      display: flex;
      padding-top: 0.8em;
    }
  
    #logohead>a{
      width: 35%;
  
    }
    #zara_logo {
      width: 100%;
      height: 75px;
      cursor: pointer;
  
      /* border: 1px solid red; */
    }
    #main {
      width: 90%;
      margin: auto;
      /* border: 1px solid red; */
      
    }
    #searchbar {
      margin-top: 1.6em;
      width: 100%;
      outline: none;
      border: none;
      border-bottom: 2px solid black;
      padding: 0.2em 0em;
      font-size: 1.9em;
        /* border: 1px solid red; */                
      /* border: 1px solid red; */
    }
    .grid{
      display: grid;
    }
    .none{
      display: none;
    }
    #shirt-products {
      /* display: grid; */
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 20px;
      padding: 0px 20px;
    }
    #shoes-products{
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 20px;
      padding: 0px 20px;
    }
    #womenAccessories-products{
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 20px;
      padding: 0px 20px;
    }
    #women-jacket {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 20px;
      padding: 0px 20px;
    }
    #about {
      display: flex;
      width: 90%;
      margin: auto;
      border-bottom: 1px solid rgb(212, 211, 211);
      padding-top: 50%;
      padding-bottom: 10%;
  
  }
  .about_info {
        display: none;
      margin-right: 1em;
    }
    footer {
      display: grid;
      grid-template-columns: repeat(1,1fr);
      justify-content: space-between;
      padding-top: 5.5em;
      padding-bottom: 8em;
      width:100%;
      /* border: 2px solid red; */
      text-align: center;
    }
    #footer_section {
      /* border: 2px solid red; */
      margin-left: 0%;
    }
    #footer_left_box {
      /* border: 1px solid red; */
      font-size: 0.65em;
      font-weight: bold;
      width: 100%;
    }
    #footer_right_box {
      /* border: 1px solid red; */
      font-size: 0.65em;
      font-weight: bold;
      width: 100%;
      text-align: center;
    }
    
  }
  
  @media screen and (min-width: 0px) and (max-width: 360px) {
      /* #ul,
      .none {
        display: none;
      } */
      .log-help{
        display: none;
      }
      #hambuger {
        width: 10%;
    
        /* border: 1px solid red; */
      }
      #hamburgerIcon {
        width: 50%;
        padding-left: 10px;
        padding-top: 1em;
        cursor: pointer;
      }
      #logohead {
        width: 90%;
        /* border: 1px solid blue; */
        display: flex;
        padding-top: 0.8em;
      }
  
      #logohead>a{
        width: 40%;
  
      }
      #zara_logo {
        width: 100%;
        height: 70px;
        cursor: pointer;
    
        /* border: 1px solid red; */
      }
      #main {
        width: 90%;
        margin: auto;
        /* border: 1px solid red; */
      }
      #searchbar {
        margin-top: 1.6em;
        width: 100%;
        outline: none;
        border: none;
        border-bottom: 2px solid black;
        padding: 0.2em 0em;
        font-size: 1.9em;
        font-weight: bold;
        /* border: 1px solid red; */
      }
      .grid{
        display: grid;
      }
      .none{
        display: none;
      }
      #shirt-products {
        /* display: grid; */
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 20px;
        padding: 0px 20px;
      }
      #shoes-products{
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 20px;
        padding: 0px 20px;
      }
      #womenAccessories-products{
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 20px;
        padding: 0px 20px;
      }
      #women-jacket {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 20px;
        padding: 0px 20px;
      }
      #about {
        display: flex;
        width: 90%;
        margin: auto;
        border-bottom: 1px solid rgb(212, 211, 211);
        padding-top: 50%;
        padding-bottom: 10%;
    
    }
    .about_info {
          display: none;
        margin-right: 1em;
      }
      footer {
        display: grid;
        grid-template-columns: repeat(1,1fr);
        justify-content: space-between;
        padding-top: 5.5em;
        padding-bottom: 8em;
        width:100%;
        /* border: 2px solid red; */
        text-align: center;
      }
      #footer_section {
        /* border: 2px solid red; */
        margin-left: 0%;
      }
      #footer_left_box {
        /* border: 1px solid red; */
        font-size: 0.65em;
        font-weight: bold;
        width: 100%;
      }
      #footer_right_box {
        /* border: 1px solid red; */
        font-size: 0.65em;
        font-weight: bold;
        width: 100%;
        text-align: center;
      }

     
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
    justify-self: center;
align-self: center; 
  }
  
  
  
  /* middle image divv  */
  .image_div {
  width: 30%;
  grid-column: span 4;
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
  
    
  
    body{
      line-height:1.5em;
    }
  
   
  
  
  
    .product_info_rightSide {
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
  
  