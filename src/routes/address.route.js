import express from "express";
const router = express.Router();
import * as addressController from "../controllers/address.controller";

router.get("/provinces", addressController.getProvinces);
router.get("/districts/:provinceId", addressController.getDistricts);
router.get("/wards/:districtId", addressController.getWards);

router.get("/provinces/:id", addressController.getProvince);
router.get("/districts/:id", addressController.getDistrict);
router.get("/wards/:id", addressController.getWard);

export default router;
