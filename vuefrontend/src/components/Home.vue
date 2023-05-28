<template>
  <div class="app">
    
    <SideBar />
    <div class="content">
      <div class="slideshow">
        <div
          v-for="image in slideshowImages"
          :key="image"
          :class="{ 'active': activeImage === image }"
          :style="{ backgroundImage: `url(${image})` }"
        ></div>
      </div>
    </div>
    <Navbar />
  </div>
 
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import SideBar from './SideBar.vue';

export default defineComponent({
  name: 'App',
  setup() {
    const activeImage = ref('');
    const slideshowImages = [
      'https://static.zara.net/photos///contents/mkt/spots/ss23-north-woman-new/subhome-xmedia-21//w/1920/IMAGE-landscape-fill-8d9e274f-93da-4343-af1d-1e546f4d902f-default_0.jpg?ts=1684940939176',
      'https://static.zara.net/photos///contents/mkt/spots/ss23-north-woman-new/subhome-xmedia-21//w/1920/IMAGE-landscape-fill-8d9e274f-93da-4343-af1d-1e546f4d902f-default_0.jpg?ts=1684940939176',
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
  components: { SideBar },
});
</script>

<style scoped>
.slideshow {
  height: 100%;
  overflow: hidden;
}

.slideshow div {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  opacity: 0;
  transition: opacity 0.3s ease;
  background-size: cover;
  background-position: center;
}

.slideshow div.active {
  opacity: 1;
}
</style>
