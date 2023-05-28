import { Request, Response } from "express";
import User, { UserDocument } from "../models/UserModel";
import jwt from "jsonwebtoken" ;
import dotenv from "dotenv";
import router from "../routes/UserRoute";

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

const AddtoCard =  async (req : Request, res : Response) => {
  try {
    const { userId } = req.params;
    const { name, quantity } = req.body;

    // Find the user by userId
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Add the item to the user's cart
    user.cart.push({ name, quantity });

    // Save the updated user document
    await user.save();

    return res.status(200).json({ message: "Item added to cart successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}


export { register, login, getAllUsers , isAdmin ,AddtoCard };
