import express from "express";
import * as inserController from "../controllers/insert.controller";

const router = express.Router();
router.post("/", inserController.insert);

export default router;
