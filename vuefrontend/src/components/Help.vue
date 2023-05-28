<template>
 
  <div>
    <SideBar/>
    <input type="text" v-model="searchTitle" placeholder="Search" />
    <button @click="searchHelp">Search</button>

    <div v-if="isLoading">Loading...</div>
    <div v-else-if="errorMessage">{{ errorMessage }}</div>
    <div v-else-if="helpPage">
      <h2>FAQ: {{ helpPage.titel }}</h2>
      <p>Q: {{ helpPage.question }}</p>
      <p>A: {{ helpPage.answer }}</p>
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
  Answer: string;
}

export default defineComponent({
    data() {
        return {
            searchTitle: "",
            isLoading: false,
            errorMessage: "",
            helpPage: null as HelpPage | any,
        };
    },
    methods: {
        async searchHelp() {
            try {
                this.isLoading = true;
                this.errorMessage = "";
                this.helpPage = null;
                const response = await axios.get(`http://localhost:3002/help/${this.searchTitle}`);
                this.helpPage = response.data;
                console.log(this.helpPage.answer);
            }
            catch (error: any) {
                if (error.response && error.response.status === 404) {
                    this.errorMessage = "Help page not found.";
                }
                else {
                    this.errorMessage = "Internal server error.";
                }
            }
            finally {
                this.isLoading = false;
            }
        },
    },
    components: { SideBar }
});
</script>
