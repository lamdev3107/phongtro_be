import express from "express";
import * as controllers from "../controllers/category.controller";

const router = express.Router();

router.get("/", controllers.getCategories);

export default router;
