import express from 'express';

import { createItem, getItemsById, getAllItems ,updateItem, deleteItem, searchItem } from '../controllers/itemsController'

const router = express.Router();


router.post('/items', createItem);
router.get('/api/items', getAllItems);
router.get('/items/:id', getItemsById);
router.put('/items/:id', updateItem);
router.delete('/items/:id', deleteItem);
router.get('/items/search', searchItem);








export default router;
