<template>
<div>
    <SideBar/>
    <input type="text" v-model="searchTitle" placeholder="Search" />
    <button @click="searchHelp">Search</button>

    <div v-if="isLoading">Loading...</div>
    <div v-else-if="errorMessage">{{ errorMessage }}</div>
    <div v-else-if="helpPage">
      <h2>FAQ: {{ helpPage.titel }}</h2>
      <p>Q: {{ helpPage.question }}</p>
      <p>A: {{ helpPage.answer }}</p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    faqs: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>


</style>
