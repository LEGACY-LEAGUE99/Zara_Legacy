<template>
    <div class="container">
      <nav class="navbar">
        <div class="logo">ZARA</div>
        <div class="navbar-right">
          <input type="text" placeholder="Search" />
          <button class="button">Bucket</button>
          <template v-if="userName">
            <div class="dropdown">
              <button class="button" id="un" @click="toggleDropdown">
                {{ isDropdownOpen ? '.' : '.' }} {{ userName }}
              </button>
              <ul class="dropdown-menu" v-if="isDropdownOpen">
                <li><a id="out" @click="handleLogout">Logout</a></li>
              </ul>
            </div>
          </template>
          <template v-else>
            <button class="button" @click="handleLoginClick">LOG IN</button>
          </template>
          <button class="button">HELP</button>
        </div>
      </nav>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default defineComponent({
    name: 'HomePage',
    setup() {
      const router = useRouter();
      const userName = ref('');
      const isDropdownOpen = ref(false);
  
      const handleLoginClick = () => {
        router.push('/Login');
      };
  
      const toggleDropdown = () => {
        isDropdownOpen.value = !isDropdownOpen.value;
      };
  
      const handleLogout = () => {
        localStorage.removeItem('token');
        isDropdownOpen.value = false;
        router.push('/Login');
      };
  
      onMounted(() => {
        const storedUserName = localStorage.getItem('userName');
        if (storedUserName) {
          userName.value = storedUserName;
        }
      });
  
      return {
        userName,
        isDropdownOpen,
        handleLoginClick,
        toggleDropdown,
        handleLogout,
      };
    },
  });
  </script>
  
  <style scoped>
  body {
    background: #eee;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #000;
    margin: 0;
    padding: 0;
  }
  
  .container {
    position: relative;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    overflow: hidden;
  }
  
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: transparent;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }
  
  .logo {
    color: rgb(18, 17, 17);
    font-weight: bold;
    position: relative;
    left: 100px;
  }
  
  .navbar-right {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .button {
    background-color: transparent;
    border: 1px solid transparent;
    color: black;
    padding: 5px 10px;
  }
  
  input[type="text"] {
    outline: none;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid black;
    border-radius: 0px;
    padding: 0px;
    width: 150px;
    font-size: 16px;
    color: #0c0b0b;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  }
  
  input[type="text"]::placeholder {
    color: #0c0b0b;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  }
  
  #out {
    position: fixed;
    font-size: 1rem;
    left: 1420px;
    font-family: "Helvetica Neue Thin", Arial, sans-serif;
    cursor: pointer;
  }
  
  #un {
    cursor: pointer;
  }
  </style>
  