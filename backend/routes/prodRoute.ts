import express, { Router } from "express";
import { getProducts,createProduct,getCateg,getAll,getcolor,getName } from "../controllers/prodController";

const router: Router = express.Router()

router.get("/getAll/P", getAll)
router.get("/name/:subcat",getName)
router.get("/:subcat", getProducts)
router.get("/All/:subcat", getCateg)
router.get("/color/:subcat",getcolor)
router.post('/post',createProduct)


export default router