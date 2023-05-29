import express, { Router } from "express";
import { register, login, getAllUsers , AddtoCard, RemoveCard ,getCard , decreaseQuantity} from "../controllers/UserController";

const router: Router = express.Router();

// Register route
router.post("/register", register);

// Login route
router.post("/login", login);

router.get("/users" , getAllUsers)
router.post("/api/:userId/cart" , AddtoCard)
router.get('/api/:userId/cart' , getCard )
router.put("/api/users/:userId/cart/:itemId" , decreaseQuantity )
router.delete("/api/users/:userId/cart/:itemId" , RemoveCard)

export default router;
