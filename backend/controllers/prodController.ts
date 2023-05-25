import {Request, Response} from "express"
import { Product } from "../models/Product"

export const getProducts = async (req: Request, res: Response) => {
    try {
        const {cat, subcat, variant} = req.params

        const products = await Product.find({subCategory: subcat})
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json(error)
    }
}
export const getCateg = async (req: Request, res: Response) => {
  try {
      const {cat, subcat, variant} = req.params

      const products = await Product.find({category: subcat})
      res.status(200).json(products)
  } catch (error) {
      res.status(500).json(error)
  }
}
export const getcolor = async (req: Request, res: Response) => {
  try {
      const {cat, subcat, variant} = req.params

      const products = await Product.find({variant: subcat})
      res.status(200).json(products)
  } catch (error) {
      res.status(500).json(error)
  }
}

export const getAll = async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    console.log(products)
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
};


export const createProduct = async (req:Request, res:Response) => {
  try {
    const {
      name,
      description,
      availableSizes,
      price,
      quantity,
      category,
      subCategory,
      variant,
      images,
      discount,
    } = req.body;

   
    const product = new Product({
      name,
      description,
      availableSizes,
      price,
      quantity,
      category,
      subCategory,
      variant,
      images,
      discount,
    });

  
    await product.save();

    res.status(201).json({ message: 'Product created successfully', product });
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ error: 'An error occurred while creating the product' });
  }
};


