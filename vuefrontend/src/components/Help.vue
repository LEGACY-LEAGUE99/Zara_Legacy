<template>
  <div>
    <SideBar/>
    <Navbar/>
    <img id="pic" src="https://static.zara.net/photos///contents/mkt/spots/ss23-help-customer/subhome-xmedia-10-north//w/1920/IMAGE-landscape-web-27470945-8c31-433a-9eaf-392114b6a91d-default_0.jpg?ts=1682518360676" alt="">
    <div>
 <p id="how"> HOW CAN WE HELP YOU ?</p>
   <input id="search" type="text" v-model="searchTopic" placeholder="SEARCH" @input="fetchSuggestions" />
  <div class="added">

      <ul v-if="suggestions.length" >
        <li id="segg" v-for="(suggestion, index) in suggestions" :key="index">{{ suggestion.title }}</li>
        <button id="srch" @click="searchHelp">Search</button> 
      </ul>
  
      
  
      <div v-if="isLoading">Loading...</div>
      <div v-else-if="errorMessage">{{ errorMessage }}</div>
      <div id="result" v-else-if="helpPage">
        <h3 id="topic">Topic: {{ helpPage.topic }} </h3>
        <h2 id="faq">FAQ: {{ helpPage.title }}</h2>
        <p>Question: {{ helpPage.question }}</p>
        <p>Answer: {{ helpPage.answer }}</p>
      </div>
  </div>
    </div>

    <h3>Frequently Asked Questions </h3>
    <h5 id="s1">ITEMS AVILABILITY</h5> <h5 id="s2">HOW TO RETURN</h5> <h5 id="s3">ORDER STATUS</h5> <h5 id="s4">REFUNDS</h5>
    <h2>All help topics</h2>
    <ul id="foot">
      <li>My Zara Account</li>
      <li>Items and Sizes</li>
      <li>Shipping</li>
      <li>Payments and Invoices</li>
      <li>My Purchases</li>
      <li>Exchanges, Returns, and Refunds</li>
      <li>ara Experiences</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
import SideBar from './SideBar.vue';
import Navbar from './Navbar.vue';


interface HelpPage {
title: string;
question: string;
Answer: string;
}
export default defineComponent ({
    data() {
      return {
        searchTopic: "",
        isLoading: false,
        errorMessage: "",
        helpPage: null as HelpPage | any,
        suggestions: [] as HelpPage[],
      };
    },
    methods: {
      async fetchSuggestions() {
        try {
          if (this.searchTopic.length >= 1) {
            this.isLoading = true;
            const response = await axios.get(`http://localhost:3000/segg`, {
              params: {
                query: this.searchTopic,
              },
            });
            this.suggestions = response.data;
          } else {
            this.suggestions = [];
          }
        } catch (error) {
          console.error(error);
        } finally {
          this.isLoading = false;
        }
      },
      async searchHelp() {
        try {
          this.isLoading = true;
          this.errorMessage = "";
          this.helpPage = null;
          const response = await axios.get(`http://localhost:3000/help/${this.searchTopic}`);
          this.helpPage = response.data;
          console.log(response.data);
        } catch (error: any) {
          if (error.response && error.response.status === 404) {
            this.errorMessage = "Help page not found.";
          } else {
            this.errorMessage = "Internal server error.";
          }
        } finally {
          this.isLoading = false;
        }
      },
    },
   
    components: { SideBar, Navbar }
});
</script>

<style>

#side {
  position:flex;
}
#pic {
    position:relative;
    left: -200px;
    bottom: 100px;}

    #how{
        position:relative ;
        bottom: 950px;
        left: 90px;
    }
    #search{
  position: relative;
  bottom: 900px;
  left: 90px;
  outline: none;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid black;
  border-radius: 0px;
  padding: 0px;
  width: 400px;
  font-size: 16px;
  color: #0c0b0b;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
}
#srch{
    position: absolute;
    left: 530px;
       bottom: 385px;
       border: none;
       background-color:transparent;
       cursor: pointer;
}
#segg{
    position: relative;
    bottom: 900px;
    left: 60px;
    list-style-type: none;
}

#result{
    position: relative;
    left: 100px;
    bottom: 800px;
}
h3{
    position: relative;
    left: 80px;
    bottom: 350px;
}
#s1{
   position: relative;
   left: 100px;
   bottom: 330px;
}
#s1{
   position: relative;
   left: 100px;
   bottom: 330px;
   color: rgb(100, 97, 97);
}
#s2{
   position: relative;
   left: 300px;
   bottom: 366px;
   color: rgb(100, 97, 97);
}
#s3{
   position: relative;
   left: 470px;
   bottom: 400px;
   color: rgb(100, 97, 97);
}
#s4{
   position: relative;
   left: 650px;
   bottom: 435px;
   color: rgb(100, 97, 97);
}
h2{
    position:relative;
    bottom: 370px;
    left: 100px;
}

#foot {
    list-style: none;
position: relative;
bottom: 340px;
left: 60px;
color: #0c0b0b;

}

#faq {
    position: relative;
    bottom: 50px;
    left: 0px;

}

#topic {
    position: relative;
    left: 0px;
    bottom: -30px;
}




</style>
