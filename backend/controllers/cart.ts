import { Request, Response } from 'express';
import { Product } from '../models/Product';
import { User } from '../models/User';

export const addToCart = async (req: Request, res: Response) => {
  try {
    const { userId, productId } = req.body;

    const user = await User.findById(userId);
    const product = await Product.findById(productId);

    if (!user) {
      return res.status(404).json({ error: 'found' });
    }

    if (!product) {
      return res.status(404).json({ error: 'n found' });
    }

    // Add the product to the user's cart
    user.cart.push(productId);
    await user.save();

    res.status(200).json({ message: 'successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: ' cart' });
  }
};

export const getCart = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const user = await User.findById(userId).populate('cart');

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const cartProducts = user.cart;

    res.status(200).json(cartProducts);
  } catch (error) {
    console.error('Error getting cart:', error);
    res.status(500).json({ error: 'An error occurred while getting the cart' });
  }
};
