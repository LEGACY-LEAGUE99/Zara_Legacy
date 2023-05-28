import express from 'express';

import { createItem, getItemsById, getAllItems ,updateItem, deleteItem, searchItem } from '../controllers/itemsController'

const router = express.Router();

// Create a new item
router.post('/items', createItem);

// Get all items
router.get('/api/items', getAllItems);

// Get a item by ID
router.get('/items/:id', getItemsById);

// Update a item
router.put('/items/:id', updateItem);

// Delete a item
router.delete('/items/:id', deleteItem);

// Search and filter items
router.get('/items/search', searchItem);








export default router;
