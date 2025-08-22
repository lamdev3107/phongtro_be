import express from "express";
import * as controllers from "../controllers/attribute.controller";

const router = express.Router();

router.get("/", controllers.getAttributes);

export default router;
