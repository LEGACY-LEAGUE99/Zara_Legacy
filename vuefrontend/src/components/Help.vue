<template>

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

#pp{
  position: relative;
  left: -10px;
  bottom: 20px;
}



</style>
=======

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
                const response = await axios.get(`http://localhost:3000/help/${this.searchTitle}`);
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
