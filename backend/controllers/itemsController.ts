import { Request, Response } from 'express';
import ItemModel from '../models/items'


interface Items {
    Items : any
  }

export const createItem = async (req: Request, res: Response) => {
  try {
    const newItem: Items = req.body;
    const createdItem = await ItemModel.create(newItem);
    res.status(201).json(createdItem);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create Item' });
  }
};


export const getAllItems = async (req: Request, res: Response) => {
  try {
    const items = await ItemModel.find({});
    if (items.length === 0) {
    
      return res.status(404).json({ error: 'No items found' });
    }
   
    return res.json(items);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to retrieve items' });
  }
};



export const getItemsById = async (req: Request, res: Response) => {
  try {
    const itemId = req.params.id;
    const item = await ItemModel.findById(itemId);
    if (!item) {
      res.status(404).json({ error: 'Product not found' });
    } else {
      res.json(item);
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve product' });
  }
};

export const updateItem = async (req: Request, res: Response) => {
  try {
    const itemId = req.params.id;
    const updatedItem: Items = req.body;
    const item = await ItemModel.findByIdAndUpdate(itemId, updatedItem, {
      new: true,
    });
    if (!item) {
      res.status(404).json({ error: 'Product not found' });
    } else {
      res.json(item);
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update product' });
  }
};

export const deleteItem = async (req: Request, res: Response) => {
  try {
    const itemId = req.params.id;
    const deletedItem = await ItemModel.findByIdAndDelete(itemId);
    if (!deletedItem) {
      res.status(404).json({ error: 'Product not found' });
    } else {
      res.json(deletedItem);
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete product' });
  }
};

export const searchItem = async (req: Request, res: Response) => {
  try {
    const { keyword, gen } = req.query;
    const query: any = {};
    if (keyword) {
      query.name = { $regex: keyword.toString(), $options: 'i' };
    }
    if (gen) {
      query.gen = gen.toString();
    }
    const items = await ItemModel.find(query);
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'Failed to search products' });
  }
};
