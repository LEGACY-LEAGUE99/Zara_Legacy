import { Request, Response } from "express";
import User, { UserDocument } from "../models/UserModel";
import jwt from "jsonwebtoken" ;
import dotenv from "dotenv";
import mongoose from "mongoose";


dotenv.config();
const { SECRET_KEY } = process.env;

const generateToken = (user: UserDocument): string => {
  return jwt.sign({ user }, SECRET_KEY || "");
};

const register = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { fname, lname, email, password , cart} = req.body;

    let user = await User.findOne({ email });

    if (user) {
      return res
        .status(400)
        .send({ message: "Email already exists", status: false });
    }

    const is_admin = req.body.is_admin || false;
    user = await User.create({ fname, lname, email, password, is_admin , cart});

    const token = generateToken(user);
    return res.status(200).send({ user, token, status: true });
  } catch (err: any) {
    return res.status(400).send({ message: err.message });
  }
};

const login = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(400)
        .send({ message: "Wrong Email or Password", status: false });
    }

    const match = user.checkPassword(password);

    if (!match) {
      return res
        .status(400)
        .send({ message: "Wrong Email or Password", status: false });
    }

    const token = generateToken(user);

    return res.status(200).send({ user, token, status: true });
  } catch (err: any) {
    return res.status(400).send({ message: err.message });
  }
};
const getAllUsers = async (_req: Request, res: Response) => {
  try {
    const users = await User.find();
    return res.status(200).send({ users, status: true });
  } catch (err: any) {
    return res.status(400).send({ message: err.message });
  }
};

const isAdmin = (user: UserDocument): boolean => {
  return user.is_admin;
};

const AddtoCard = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const { name, quantity, image, price } = req.body;

  
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    
    user.cart.push({
      name,
      quantity,
      image,
      price,
      _id: undefined
    });

   
    await user.save();

    return res.status(200).json({ message: "Item added to cart successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};


const getCard =  async (req :Request, res :Response) => {

    const userId = req.params.userId;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const cartItems = user.cart;
    res.json(cartItems);
  } catch (error) {
    console.error("Failed to fetch cart items", error);
    res.status(500).json({ error: "Failed to fetch cart items" });
  }
};

const decreaseQuantity = async (req: Request, res: Response) => {
  try { const { userId, itemId } = req.params;
    const user = await User.findById(userId);
    if (!user) {  return res.status(404).json({ message: "User not found" });}
    const item = user.cart.find((item) => item._id.toString() === itemId);
    if (!item) { return res.status(404).json({ message: "Item not found in cart" }); }
    if (item.quantity <= 1) {  return res.status(400).json({ message: "Minimum quantity reached" }); }
    item.quantity--;
    await user.save();
    return res.status(200).json({ message: "Item quantity decreased successfully" });} catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });}};


const RemoveCard =  async (req : Request, res :Response) => {
  try {
    const { userId, itemId } = req.params;

   
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

   
    const itemIndex = user.cart.findIndex((item) => item._id.toString() === itemId);

    if (itemIndex === -1) {
      return res.status(404).json({ message: "Item not found in cart" });
    }


    user.cart.splice(itemIndex, 1);

    await user.save();

    return res.status(200).json({ message: "Item removed from cart successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}



export { register, login, getAllUsers , isAdmin ,AddtoCard , RemoveCard ,getCard , decreaseQuantity};
