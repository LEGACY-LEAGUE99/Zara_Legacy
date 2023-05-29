<template>

  <Navbar/>
  <div class="admin-dashboard">
    <h2>Admin Dashboard</h2>
    <div class="item-list">
      <h3>All Items</h3>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item._id" class="item">
            <td><img :src="item.image" :alt="item.name" class="item-image" /></td>
            <td>{{ item.name }}</td>
            <td>{{ item.price }}</td>
            <td>
              <button @click="editItem(item)">Edit</button>
              <button @click="deleteItem(item)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <h3>Add New Item</h3>
<form @submit.prevent="addItem">
  <input type="text" v-model="newItem.name" placeholder="Name" required />
  <input type="text" v-model="newItem.image" placeholder="URL" required />

  <label for="gen">Gender:</label>
  <ul id="gen">
    <li v-for="option in genderOptions" :key="option.value">
      <input
        type="radio"
        v-model="newItem.gen"
        :value="option.value"
        :id="option.value"
        name="gen"
        required
      />
      <label :for="option.value">{{ option.label }}</label>
    </li>
  </ul>

  <input type="text" v-model="newItem.price" placeholder="Price" required />
  <input type="text" v-model="newItem.desc" placeholder="Description" required />
  <button type="submit">Add Item</button>
</form>

    <div class="edit-item-form" v-if="editMode">
      <h3>Edit Item</h3>
      <form @submit.prevent="updateItem">
        <div class="form-group">
          <label for="editedName">Name:</label>
          <input type="text" v-model="editedItem.name" id="editedName" required />
        </div>
        <div class="form-group">
          <label for="editedPrice">Price:</label>
          <input type="text" v-model="editedItem.price" id="editedPrice" required />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
import Navbar from './Navbar.vue';

interface Item {
  _id: string;
  name: string;
  price: string;
  image: string;
}

export default defineComponent({
    data() {
        return {
            items: [] as Item[],
            newItem: {
                name: "",
                price: "",
                image: "",
                gen: "",
                desc: "",
            } as unknown as Item,
            editMode: false,
            editedItem: {} as Item,
            genderOptions: [
                { value: "men", label: "Men" },
                { value: "women", label: "Women" },
                { value: "kids", label: "Kids" },
            ],
        };
    },
    mounted() {
        this.getAllItems();
    },
    methods: {
        async getAllItems() {
            try {
                const response = await axios.get("http://localhost:3000/api/items");
                this.items = response.data;
            }
            catch (error) {
                console.error(error);
            }
        },
        async addItem() {
            try {
                const response = await axios.post("http://localhost:3000/items", this.newItem);
                this.items.push(response.data);
                this.newItem = {
                    name: "",
                    price: "",
                    image: "",
                    gen: "",
                    desc: "",
                };
            }
            catch (error) {
                console.error(error);
            }
        },
        editItem(item: Item) {
            this.editMode = true;
            this.editedItem = { ...item };
        },
        async updateItem() {
            try {
                const response = await axios.put(`http://localhost:3000/items/${this.editedItem._id}`, this.editedItem);
                const updatedItemIndex = this.items.findIndex((item) => item._id === response.data._id);
                if (updatedItemIndex !== -1) {
                    this.items.splice(updatedItemIndex, 1, response.data);
                }
                this.editMode = false;
                this.editedItem = {} as Item;
            }
            catch (error) {
                console.error(error);
            }
        },
        async deleteItem(item: Item) {
            try {
                await axios.delete(`http://localhost:3000/items/${item._id}`);
                this.items = this.items.filter((i) => i._id !== item._id);
            }
            catch (error) {
                console.error(error);
            }
        },
    },
    components: { Navbar }
});
</script>

<style scoped>
.admin-dashboard {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

h3 {
  font-size: 20px;
  margin-bottom: 10px;
}

.item-list {
  margin-bottom: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ccc;
}

.item-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
}

.add-item-form,
.edit-item-form {
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 10px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

input {
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 100%;
  box-sizing: border-box;
}
</style>
