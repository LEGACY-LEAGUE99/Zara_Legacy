<template>
    <div>
      <SideBar/>
      <input type="text" v-model="searchTopic" placeholder="Search" @input="fetchSuggestions" />
      <ul v-if="suggestions.length">
        <li v-for="(suggestion, index) in suggestions" :key="index">{{ suggestion.title }}</li>
      </ul>
  
      <button @click="searchHelp">Search</button> <!-- Added button element -->
  
      <div v-if="isLoading">Loading...</div>
      <div v-else-if="errorMessage">{{ errorMessage }}</div>
      <div v-else-if="helpPage">
        <h1>Topic: {{ helpPage.topic }} </h1>
        <h2>FAQ: {{ helpPage.title }}</h2>
        <p>Question: {{ helpPage.question }}</p>
        <p>Answer: {{ helpPage.answer }}</p>
      </div>
    </div>
  </template>
  
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import axios from 'axios';
  import SideBar from './SideBar.vue';
  
  interface HelpPage {
    title: string;
    question: string;
    answer: string;
  }
  
  export default defineComponent({
 

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
          if (this.searchTopic.length >= 3) {
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
    components: { SideBar },
  });
  </script>
  

