<template>
    <div>
        <SideBar class="side"/>
        <Navbar/>

      <h1>About Us</h1>
      <p>Zara is one of the largest international fashion companies. It belongs to Inditex, one of the world’s largest distribution groups.</p>
      <p>The customer is at the heart of our unique business model, which includes design, production, distribution, and sales through our extensive retail network.</p>
      <p>For more information, please visit the Inditex Group website: <a href="https://www.inditex.com">www.inditex.com</a></p>
  
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
  import Vue, { defineComponent }  from 'vue';
import SideBar from './SideBar.vue';
import Navbar from './Navbar.vue';
  
  export default defineComponent({
    name: "Info",
    components: { SideBar, Navbar }
});
  </script>

  <style>
 

  h1{
    position: relative;
    left: 100px;
    bottom: -100px;
  }
p{
    position: relative;
    left: 100px;
    bottom: -100px;
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
              .side{
  position: relative;
  left: 220px;
  
}
            

</style>
  