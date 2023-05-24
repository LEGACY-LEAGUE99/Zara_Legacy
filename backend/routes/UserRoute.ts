import express, { Router } from "express";
import { register, login } from "../controllers/UserController";

const router: Router = express.Router();

// Register route
router.post("/register", register);

// Login route
router.post("/login", login);

export default router;
