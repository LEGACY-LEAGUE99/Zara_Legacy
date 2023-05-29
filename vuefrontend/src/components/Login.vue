<template>
        <div class="logo">
        <a href="/">
          <img src="https://logodownload.org/wp-content/uploads/2014/05/zara-logo-1.png" alt="zaralogo" />
        </a>
      </div>

   <form @submit="handleSubmit" class="container-login">
     <div class="Left-login-form">
       <h3 class="login-heading">LOGIN IN TO YOUR ACCOUNT</h3>
       <div class="input-text-box">
         <input
           @change="handleChange"
           class="input-text"
           type="text"
           id="email"
           name="email"
           placeholder="E-MAIL"
         />
       </div>
       <div class="input-text-box">
         <input
           @change="handleChange"
           type="password"
           id="password"
           name="password"
           placeholder="PASSWORD"
         />
       </div>
       <a class="forgotpassword" href="#">
         HAVE YOU FORGOTTEN YOUR PASSWORD?
       </a>
       <button type="submit" class="login-btn">
         LOGIN 
       </button>
     </div>
 
     <div class="right-login-form">
       <h5>NEED AN ACCOUNT ?</h5>
 
       <router-link to="/SignUp" class="create-btn">
         REGISTER
       </router-link>
     </div>
   </form>
 
   <div class="signup-footer">
     <div class="list-group">
       <h6 class="header-heading">HELP</h6>
       <a href="#" class="list">
         SHOP AT ZARA.COM
       </a>
       <a href="#" class="list">
         PRODUCT
       </a>
       <a href="#" class="list">
         PAYMENT
       </a>
       <a href="#" class="list">
         SHIPPING
       </a>
       <a href="#" class="list">
         EXCHANGES AND RETURNS
       </a>
       <a href="#" class="list">
         SHOPS AND COMPANY
       </a>
       <a href="#" class="list">
         CLOTHES COLLECTION
       </a>
       <a href="#" class="list">
         PROGRAMME
       </a>
     </div>
 
     <div class="list-group">
       <h6 class="header-heading">FOLLOW-US</h6>
       <a href="#" class="list">
         NEWSLETTER
       </a>
       <a href="#" class="list">
         INSTAGRAM
       </a>
       <a href="#" class="list">
         FACEBOOK
       </a>
       <a href="#" class="list">
         TWITTER
       </a>
       <a href="#" class="list">
         PINTEREST
       </a>
       <a href="#" class="list">
         YOUTUBE
       </a>
     </div>
   </div>
 </template>


 
 <script lang="ts" >

 import { ref , defineComponent } from 'vue';
 import axios from 'axios';
 import { useRouter } from 'vue-router';
 
 
 export default defineComponent ({
   setup() {
     const router = useRouter();
     const formData = ref({ email: '', password: '' });
 
     const handleChange = (e :any) => {
       formData.value = {
         ...formData.value,
         [e.target.name]: e.target.value,
       };
     };
 
     const handleSubmit = async (e : any) => {
       e.preventDefault();
 
       try {
         const response = await axios.post('http://localhost:3000/login', formData.value);
         console.log('Login successful:', response.data);
         console.log(response.data.user.fname);
         localStorage.setItem('userName', response.data.user.fname);
         localStorage.setItem('admin', response.data.user.is_admin);
         localStorage.setItem("userid" , response.data.user._id)
         localStorage.setItem("info" , response.data)

         router.push('/');
       } catch (error : any) {
         console.error('Login failed:', error.message);
       }
     };
 
     return {
       handleChange,
       handleSubmit,
     };
   },
 })
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

 .container-login {
    width: 60%;
    display: flex;
    color: gray;
    font-size: 90%;
    margin: 14%;
  position: relative;
  left: -80px;
  bottom: 30px;
   
  }
  
  .right-p {
    margin-top: 2%;
  }
  
  .right-login-form {
    width: 50%;
    margin-top: 8%;
  }
  
  .forgotpassword {
    color: black;
    font-size: 70%;
  }
  
  .Left-login-form {
    width: 40%;
  }
  
  .login-heading {
    margin: 4%;
    color: black;
  }
  
  .create-btn {
    background-color: rgb(252, 250, 250);
    font-size: 90%;
    color: rgb(10, 10, 10);
    text-decoration: none;
    padding: 2% 32% 3% 10%;
    border: 1px solid black;
    position: relative;
    bottom: 80px;
    left: 100px;
    
  }
  
  .login-btn {
    background-color: black;
    width: 80%;
    height: 25%;
    text-align: center;
    font-size: 90%;
    color: white;
    text-decoration: none;
    margin-top: 6%;
    cursor: pointer;
  }
  
  .login-btn:hover {
    color: white;
  }
  
  input {
    width: 100%;
    outline: none;
    border: none;
    padding: 2%;
    border-bottom: 1px solid black;
  }
  
  h5 {
    font-family: 'Lucida Sans', Arial, sans-serif;
    color: #000;
    bottom: 100px;

  }


  .headingform {
    margin: 4%;
    font-size: 98%;
    color: black;
    }
    
    .signup-footer {
    display: flex;
    position: relative;
    bottom: 200px;
    width: 40%;
    justify-content: space-between;
    margin: 8%;
    }
    
    .header-heading1 {
    font-size: 80%;
    position: relative;
    bottom: -200px;
    left: 150px;
    }
    .header-heading2{
        font-size: 80%;
        position: relative;
        bottom: -25px;
        left: 350px;
        }
        .header-heading3 {
            font-size: 80%;
            position: relative;
            bottom: 135px;
            left: 550px;
            }

            .list {
                text-decoration: none;
                color: rgb(20, 19, 19);
                font-size: 68%;
                display: block;
                margin-top: 5px;
                position: relative;
                bottom: -200px;
                left: 150px;
                
              }
              .list2 {
                text-decoration: none;
                color: rgb(14, 12, 12);
                font-size: 68%;
                display: block;
                margin-top: 5px;
                position: relative;
        bottom: -25px;
        left: 350px;
              }
              .list3 {
                text-decoration: none;
                color: rgb(26, 22, 22);
                font-size: 68%;
                display: block;
                margin-top: 5px;
                position: relative;
                bottom: 135px;
                left: 550px;
              }
            h2{
                position: relative;
                left: 100px;
            }
            h1{
                position: relative;
                left: 200px;
                font-size: 5rem;
            }

.reg1 {
    position: relative;
    left: 100px;
}
.reg2 {
    position: relative;
    left: 100px;
}
h6{
   position: relative;
   left: 150px;
   bottom: -200px;
}
  h5{
   position: relative;
   bottom: 100px;
   left: 99px;
  }
 </style>
 