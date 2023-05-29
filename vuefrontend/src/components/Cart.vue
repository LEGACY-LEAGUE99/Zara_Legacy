<template>
  <div>
    <Navbar/>
    <h2>Cart</h2>
    <div v-if="cartItems.length > 0">
      <div v-for="cartItem in cartItems" :key="cartItem._id" class="cart-item">
        <div class="item-box">
          <img :src="cartItem.image" class="item-image" />
          <div class="item-details">
            <div>{{ cartItem.name }}</div>
            <div class="item-price">Price: {{ cartItem.price }}</div>
            <div class="item-quantity">Quantity: {{ cartItem.quantity }}</div>
            <div class="item-buttons">
              <button @click="decreaseQuantity(cartItem)">Decrease Quantity</button>
              <button @click="removeItemFromCart(cartItem._id)">Remove from Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      Your cart is empty.
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
import Navbar from './Navbar.vue';

export default defineComponent({
  data() {
    return {
      cartItems: [] as any[],
    };
  },
  mounted() {
    this.getCartItems();
  },
  methods: {
    async getCartItems() {
      try {
        const userId = localStorage.getItem("userid");

        const response = await axios.get(`http://localhost:3000/api/${userId}/cart`);
        this.cartItems = response.data;
      } catch (error) {
        console.error("Failed to fetch cart items", error);
      }
    },
    async decreaseQuantity(cartItem: any) {
      try {
        const userId = localStorage.getItem("userid");

        if (cartItem.quantity > 1) {
          const updatedQuantity = cartItem.quantity - 1;
          await axios.put(`http://localhost:3000/api/users/${userId}/cart/${cartItem._id}`, { quantity: updatedQuantity });
          cartItem.quantity = updatedQuantity;
        } else {
          await this.removeItemFromCart(cartItem._id);
        }
      } catch (error) {
        console.error('Failed to decrease item quantity', error);
      }
    },
    async removeItemFromCart(itemId: any) {
      try {
        const userId = localStorage.getItem("userid");

        await axios.delete(`http://localhost:3000/api/users/${userId}/cart/${itemId}`);

        console.log('Item removed from cart successfully');

        this.cartItems = this.cartItems.filter((cartItem: any) => cartItem._id !== itemId);
      } catch (error) {
        console.error('Failed to remove item from cart', error);
      }
    },
  },

  components: { Navbar },
});
</script>


<style scoped>
.cart-item {
position: relative;
bottom: -48px;
  margin-bottom: 0px;
}

.item-box {

  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  padding: 10px;
}

.item-image {
 
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 20px;
}

.item-details {
  flex: 1;
}

.item-price,
.item-quantity {
  margin-bottom: 5px;
}

.item-buttons button {
  margin-right: 10px;
}
</style>
