<template>
  <div>
    <h1>Help Page</h1>
    <p>Welcome to our help page. Here you can find answers to common questions and get support for our services.</p>
    
    <h2>Frequently Asked Questions</h2>
    <ul>
      <Help v-for="faq in faqs" :key="faq.id" :faq="faq" />
    </ul>
    
    <h2>Contact Us</h2>
    <p>If you can't find the answer to your question, please feel free to contact our support team.</p>
    <p>Email: support@example.com</p>
    <p>Phone: 123-456-7890</p>
  </div>
</template>

<script>
import Help from '../components/Help.vue';

export default {
  components: {
    Help
  },
  data() {
    return {
      faqs: [
        { id: 1, question: 'How do I create an account?', answer: 'To create an account, click on the "Sign Up" button and follow the instructions.' },
        { id: 2, question: 'How do I reset my password?', answer: 'To reset your password, go to the login page and click on the "Forgot Password" link.' },
      ]
    };
  }
};
</script>

<style scoped>
</style>
