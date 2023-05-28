import express, { Router } from "express";
import { register, login, getAllUsers , AddtoCard } from "../controllers/UserController";

const router: Router = express.Router();

// Register route
router.post("/register", register);

// Login route
router.post("/login", login);

router.get("/users" , getAllUsers)
router.post("/api/users/:userId/cart" , AddtoCard)

export default router;
