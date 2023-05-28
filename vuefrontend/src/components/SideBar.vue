<template>
    <div class="container">
      <aside class="sidebar">
        <button class="toggle-button" @click="toggleOptions">
          ☰
        </button>
        <transition name="slide">
          <div v-if="showOptions" class="options">
            <ul class="options-list"> 
              <li v-for="option in options" :key="option.id" class="option">
                <button class="option-button" @click="toggleSuboptions(option)">
                  {{ option.title }}
                </button>
                <ul v-if="option.showSuboptions" class="suboptions">
                  <li v-for="suboption in option.suboptions" :key="suboption.id" style="margin-bottom: 15px;">
                    {{ suboption.title }}
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </transition>
      </aside>
    </div>
  </template>
  
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  interface Option {
    id: number;
    title: string;
    showSuboptions: boolean;
    suboptions: Suboption[];
  }
  
  interface Suboption {
    id: number;
    title: string;
    showSuboptions: boolean; // Add this property
  }
  
  export default defineComponent({
    name: 'Sidebar',
    data() {
      return {
        showOptions: false,
        options: [
          {
            id: 1,
            title: 'Women',
            showSuboptions: false,
            suboptions: [
              { id: 1, title: 'BLAZEERS', showSuboptions: false },
              { id: 2, title: 'JACKETS', showSuboptions: false },
              { id: 3, title: 'SHIRTS', showSuboptions: false },
              { id: 4, title: 'TOPS', showSuboptions: false },
              { id: 5, title: 'KNITWEAR', showSuboptions: false },
              { id: 6, title: 'TROUSERS', showSuboptions: false },
              { id: 7, title: 'SHOES', showSuboptions: false },
              { id: 8, title: 'BAGS', showSuboptions: false },
              { id: 11, title: 'JACKETS', showSuboptions: false },
              { id: 12, title: 'TROUSERS', showSuboptions: false },
              { id: 13, title: 'JEANS', showSuboptions: false },
              { id: 13, title: 'SHORTS', showSuboptions: false },
              { id: 13, title: 'HOODIES', showSuboptions: false },
              { id: 13, title: 'BASICS', showSuboptions: false },
              { id: 13, title: 'T-SHIRTS', showSuboptions: false }
            ],
          },
          {
            id: 2,
            title: 'Men',
            showSuboptions: false,
            suboptions: [
              { id: 5, title: 'EDITION', showSuboptions: false },
              { id: 6, title: 'NEW', showSuboptions: false },
              { id: 7, title: 'ZARA ATHLETICZ', showSuboptions: false },
              { id: 8, title: 'LINEN', showSuboptions: false },
              { id: 9, title: 'CROCHET', showSuboptions: false },
              { id: 10, title: 'SUITS', showSuboptions: false },
              { id: 11, title: 'JACKETS', showSuboptions: false },
              { id: 12, title: 'TROUSERS', showSuboptions: false },
              { id: 13, title: 'JEANS', showSuboptions: false },
              { id: 13, title: 'SHORTS', showSuboptions: false },
              { id: 13, title: 'HOODIES', showSuboptions: false },
              { id: 13, title: 'BASICS', showSuboptions: false },
              { id: 13, title: 'T-SHIRTS', showSuboptions: false },
            ],
          },
          {
            id: 3,
            title: 'Kids',
            showSuboptions: false,
            suboptions: [
              { id: 9, title: 'T-SHIRTS', showSuboptions: false },
              { id: 10, title: 'NEW', showSuboptions: false },
              { id: 11, title: 'HOODIES', showSuboptions: false },
              { id: 12, title: 'SHORTS', showSuboptions: false },
              { id: 12, title: 'TRUE NEUTRALS', showSuboptions: false },
              { id: 12, title: 'GIRL | 6-14 years', showSuboptions: false },
              { id: 12, title: 'BOY | 6-14 years', showSuboptions: false },
              { id: 12, title: 'BABY GIRL | 9 months - 6 years', showSuboptions: false },
              { id: 12, title: 'BABY BOY | 9 months - 6 years', showSuboptions: false },
              { id: 12, title: 'ACCESSORIES | SHOES', showSuboptions: false },
            ],
          },
        ] as Option[],
      };
    },
    methods: {
      toggleOptions(): void {
        this.showOptions = !this.showOptions;
      },
      toggleSuboptions(option: Option): void {
        this.options.forEach((o) => {
          if (o.id !== option.id) {
            o.showSuboptions = false;
          }
          o.suboptions.forEach((suboption) => {
            suboption.showSuboptions = false;
          });
        });
        option.showSuboptions = !option.showSuboptions;
      },
    },
  });
  </script>
  
  <style scoped>
  .container {
    position: relative;
    display: flex; 
  }
  
  .background-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  
  .sidebar {
    width: 200px;
    background-color: transparent;
    opacity: 1;
    z-index: 1;
    
  }
  
  .toggle-button {
    position: fixed;
    z-index: 10;
    left: 10px;
    padding: 20px 40px ;
    cursor: pointer;
    border: none ;
    background: none;
    font-size: 20px;
  }
  
  .options {
    position: relative;
    left: -230px;
    bottom: -80px;
    background: none;
    border-style: none;
    background-color: aliceblue;
  }
  
  .options-list {
    list-style: none;
    display: flex; 
    background: none;
    background-color: aliceblue;
   
  }
  
  .option {
    padding: 8px;
    border: none;
    border-radius: 0%;
    box-shadow: none;
    border-style: hidden;
    background-color: aliceblue;
  }
  
  .option-button {
    border: none;
    background: none;
    padding: 0;
    font-size: 16px;
  }
  
  .suboptions {
    padding-block: 50px;
  }
  
  .suboptions li {
    list-style-type: none;
  }
  
  .slide-enter-active,
  .slide-leave-active {
    transition: all 0.3s;
  }
  
  .slide-enter-from,
  .slide-leave-to {
    transform: translateX(-100%);
  }

  


  </style>
  
