<template>
  <li v-for="faq in faqs" :key="faq.id">
    <h3>{{ faq.question }}</h3>
    <p>{{ faq.answer }}</p>
  </li>
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
/* Add any necessary styles here */
</style>
