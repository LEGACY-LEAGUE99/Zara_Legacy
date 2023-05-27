<template>
    <div>
      <div class="logo">
        <a href="/">
          <img src="https://logodownload.org/wp-content/uploads/2014/05/zara-logo-1.png" alt="zaralogo" />
        </a>
      </div>
      <div class="container">
      <nav class="navbar">
        <div class="navbar-right">
          <input id="search" type="text" placeholder="SEARCH" />
          <button id="cart" class="button">Card</button>
          <template v-if="userName">
            <div class="dropdown">
              <button class="button" id="un" @click="toggleDropdown">
                {{ isDropdownOpen ? '.' : '.' }} {{ userName }}
              </button>
              <ul id="drop" class="dropdown-menu" v-if="isDropdownOpen">
                <li><a id="out" @click="handleLogout">Logout</a></li>
              </ul>
            </div>
          </template>
          <template v-else>
            <button class="login" @click="handleLoginClick">LOG IN</button>
          </template>
          <a href="/Help" ><button class="help">   HELP</button>  </a>
        </div>
      </nav>
    
  
     
     
         
        
         
       
  
        
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  
  interface TokenPayload {
    email: string;
    iat: number;
  }
  
  export default defineComponent({
    name: 'Navbar',
    setup() {
        const router = useRouter();
        const userName = ref('');
      const isDropdownOpen = ref(false);
      const navigate = (route: string) => {
        window.location.href = route;
      };
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
        navigate ,
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
  
.logo{
    display:flex;
    position: relative;
     left: 200px;
}
.logo{
    width: 210px;
    margin-top: 10px;
    margin-left: 8%;
    margin-bottom: 10px;
}
.logo>a>img{
    width: 100%;
    position: absolute;
  z-index: 2;
}

.container{
  width: 100%;
    position: absolute;
  z-index: 2;
}

#search{
  position: relative;
  left: 1100px;
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
#un{
  position: relative ;
  left: 1300px;
  bottom: 20px;
  border: none;
  background: none;
  padding-left: 0% ;
  padding: 0%;
}
.help{
  position: absolute ;
  left: 1360px;
  bottom: 20px;
  border: none;
  background: none;
  cursor: pointer;
  
}
#cart{
  position: relative ;
  left: 1300px;
  bottom: -1.1px;
  border: none;
  background: none;
}
#out{
  position: fixed;
  left: 1300px;
  bottom :600px ;
  list-style-type: none;

}


  
  </style>
  