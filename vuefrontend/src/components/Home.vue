<template>
  <div class="app">
   
    <div class="content">
      <div class="slideshow">
        <img v-for="image in slideshowImages" :key="image" :src="image" :class="{ 'active': activeImage === image }" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
    const activeImage = ref('');

  

    const slideshowImages = [
    'https://static.zara.net/photos///contents/mkt/spots/ss23-north-beauty-new/subhome-xmedia-16//w/1920/IMAGE-landscape-default-fill-d06d0c41-fb7d-423f-96be-d9a4510cdab8-default_0.jpg?ts=1682077253385',
          'https://static.zara.net/photos///contents/mkt/spots/ss23-beauty-join-life/subhome-xmedia-13//w/1920/IMAGE-landscape-fill-b27cc98c-371c-4aa8-835b-84099956941b-default_0.jpg?ts=1680191709277',
          'https://static.zara.net/photos///contents/mkt/spots/ss23-north-man-new/subhome-xmedia-19-2//w/1920/IMAGE-landscape-fill-7c8c1a5b-ce41-46df-94ea-8f45d2bd772f-default_0.jpg?ts=1683800443276',
  
    ];

    const startSlideshow = () => {
      let index = 0;
      setInterval(() => {
        activeImage.value = slideshowImages[index];
        index = (index + 1) % slideshowImages.length;
      }, 3000);
    };

    startSlideshow();

    return {
    
      activeImage,
      slideshowImages,
    };
  },
});
</script>

<style>
.app {
  display: flex;
  height: 100vh;
}

.content {
  flex: 1;
}

.slideshow {
  position: relative;
  height: 100%;
  overflow: hidden;
}

.slideshow img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin:0;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.slideshow img.active {
  opacity: 1;
}

.category-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
  transition: transform 0.3s ease;
  transform: translateX(-100%);
}
</style>
