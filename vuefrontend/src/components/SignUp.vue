<template>
    <div>

      <div class="logo">
        <a href="/">
          <img src="https://logodownload.org/wp-content/uploads/2014/05/zara-logo-1.png" alt="zaralogo" />
        </a>
       
      </div>

      <h2 class="headingform">PERSONAL DETAILS</h2>
      <div class="changeform-btn">
        <div class="form-check">
          <input
            class="reg1"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            :checked="!isAdmin"

            @change="() =>{ isAdmin =false}"

          />
          <label class="reg1" for="flexRadioDefault1">
            USER
          </label>
        </div>
        <div class="form-check">
          <input
            class="reg2"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            :checked="isAdmin"

            @change="() =>{ isAdmin =true}"
          />
          <label class="reg2" for="flexRadioDefault2">
            ADMIN
          </label>
        </div>
      </div>
      <form @submit="handleSubmit" class="container">
  <label for="email"> </label>
  <div class="Left-form">
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
        type="text"
        id="password"
        name="password"
        placeholder="PASSWORD"
      />
    </div>
    <input class="confirme" type="pass" placeholder="REPEAT PASSWORD" />
    <input
      @change="handleChange"
      class="sur"
      type="na"
      name="lname"
      placeholder="SURNAME"
    />
    <div class="input-text-box">
      <input
        @change="handleChange"
        type="text"
        id="name"
        name="fname"
        placeholder="NAME"
      />
    </div>
  </div>

  <div class="checkbox">
    <div>
      <input
        title="check"
        class="form-input-checkbox__input"
        type="checkbox"
        name="newsletterCheck"
        data-qa-input-qualifier="newsletterCheck"
        value="false"
      />
    </div>
    <div>
      <h6 class="checkbox__label">I wish to receive Zara news on my e-mail</h6>
    </div>
  </div>

  <div class="checkbox2">
    <div>
      <input
        title="check"
        class="form-input-checkbox__input"
        type="checkbox"
        name="newsletterCheck"
        data-qa-input-qualifier="newsletterCheck"
        value="false"
      />
    </div>
    <div>
      <h6 class="checkbox__label">I ACCEPT THE PRIVACY STATEMENT</h6>
    </div>
  </div>
  <button type="submit" class="signupbtn">
    REGISTER
  </button>
</form>


<div class="signup-header">
  <div class="list-group">
    <h6 class="header-heading1">FOLLOW-US</h6>
    <a href="#" class="list">NEWSLETTER</a>
    <a href="#" class="list">INSTAGRAM</a>
    <a href="#" class="list">FACEBOOK</a>
    <a href="#" class="list">TWITTER</a>
    <a href="#" class="list">PINTEREST</a>
    <a href="#" class="list">YOUTUBE</a>
  </div>

  <div class="list-group">
    <h6 class="header-heading2">COMPANY</h6>
    <a href="#" class="list2">ABOUT US</a>
    <a href="#" class="list2">JOIN LIFE</a>
    <a href="#" class="list2">OFFICES</a>
    <a href="#" class="list2">STORES</a>
    <a href="#" class="list2">WORK WITH US</a>
  </div>

  <div class="list-group">
    <h6 class="header-heading3">POLICIES</h6>
    <a href="#" class="list3">PRIVACY POLICY</a>
    <a href="#" class="list3">PURCHASE CONDITIONS</a>
    <a href="#" class="list3">COOKIES SETTINGS</a>
  </div>
</div>
</div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

interface setup {
  isAdmin : any
  }

export default defineComponent({

  setup() {
    const router = useRouter();
    const formData = ref({});
    const isAdmin = ref(false);
      formData.value = {
        ...formData.value,
        [e.target.name]: e.target.value,
      };
    };

    const handleSubmit = async (e: any) => {
      e.preventDefault();

      try {
        const formDataWithAdmin = {
          ...formData.value,
          is_admin: isAdmin.value, 
        };

        const response = await axios.post('http://localhost:3000/register', formDataWithAdmin);
        console.log(response.data);
        localStorage.setItem('isAdmin', JSON.stringify(isAdmin.value))

        router.push('/Login');
      } catch (error) {
        console.error(error);
      }
    };

    return {
      handleChange,
      handleSubmit,
      isAdmin,
    };
},
</script>

<style scoped>
.container {
    width: 100%;
    display: flex;
    margin: 4%;
    }
    
    input[type='text'] {
    position: relative;
    left: 100px;
    width: 280%;
    padding: 5px 12px 0 20px;
    margin: 18px 0;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid gray;
    font-size: 75%;
    outline: none;
    border: none;
    border-bottom: 1px solid black;
    }
    input[type='pass'] {
        position:relative;
        left: 650px;
        outline: none;
    border: none;
    border-bottom: 1px solid ;
    bottom: 40px;
    font-size: 75%;
    width: 220% ;
    }
    input[type='na'] {
        position:relative;
        left: 650px;
        outline: none;
    border: none;
    border-bottom: 1px solid ;
    bottom: -30px;
    font-size: 75%;
    width: 220% ;
    }
    
    .checkbox {
    position: relative;
    bottom: -180px;
    left: -50px;
    width: 100%;
    display: flex;
    margin-top: 1%;
    }
    
    .checkbox2 {
    position: relative;
    bottom: -230px;
    width: 100%;
    display: flex;
    margin-top: 1%;
    }
    .checkbox__label {
    position: relative;
    bottom: 22px;
    width: 100%;
    margin-left: 3%;
    font-size: 100%;
    color: gray;
    font-size: 70%;
    }
    
    .signupbtn {
    position: relative;
    width: 85%;
    background-color: rgb(253, 251, 251);
    color: rgb(14, 12, 12);
    margin-top: 11%;
    border: 1px solid black;
    cursor: pointer;
    }
    
    .signupbtn:hover {
    background-color: rgb(230, 230, 230);
    color: rgb(14, 12, 12);
    }
    
    .Left-form {
    width: 30%;
    }
    
    .right-form {
    width: 40%;
    }
    
    .dot {
    color: white;
    }
    
    .changeform-btn {
    display: flex;
    width: 14%;
    justify-content: space-between;
    margin: 4%;
    font-size: 80%;
    font-weight: bold;
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

    bottom: -90px;
}

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


</style>