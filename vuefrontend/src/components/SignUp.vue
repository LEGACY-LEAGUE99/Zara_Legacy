<template>
    <div>
      <h1>ZARA</h1>
      <h2 class="headingform">PERSONAL DETAILS</h2>
      <div class="changeform-btn">
        <div class="form-check">
          <input
            class="reg1"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            :checked="!isAdmin"
            @change="() => setIsAdmin(false)"
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
            @change="() => setIsAdmin(true)"
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
<script>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const formData = ref({});
    const isAdmin = ref(false);

    const handleChange = (e) => {
      formData.value = {
        ...formData.value,
        [e.target.name]: e.target.value,
      };
    };

    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
        const formDataWithAdmin = { ...formData.value, is_admin: isAdmin.value };
        const response = await axios.post('http://localhost:3000/register', formDataWithAdmin);
        console.log(response.data);
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
};
</script>