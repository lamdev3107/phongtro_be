import * as addressService from "../services/address.service";

const getProvinces = async (req, res, next) => {
  try {
    const provinces = await addressService.getProvinces();
    return res.status(200).json({
      success: true,
      message: "Provinces fetched successfully",
      data: provinces,
    });
  } catch (err) {
    next(err);
  }
};
const getDistricts = async (req, res, next) => {
  try {
    const districts = await addressService.getDistricts(req.query.provinceId);
    return res.status(200).json({
      success: true,
      message: "Districts fetched successfully",
      data: districts,
    });
  } catch (err) {
    next(err);
  }
};
const getWards = async (req, res, next) => {
  try {
    const wards = await addressService.getWards(req.query.districtId);
    return res.status(200).json({
      success: true,
      message: "Wards fetched successfully",
      data: wards,
    });
  } catch (err) {
    next(err);
  }
};
const getProvince = async (req, res, next) => {
  try {
    const province = await addressService.getProvince(req.params.id);
    return res.status(200).json({
      success: true,
      message: "Province fetched successfully",
      data: province,
    });
  } catch (err) {
    next(err);
  }
};
const getDistrict = async (req, res, next) => {
  try {
    const district = await addressService.getDistrict(req.params.id);
    return res.status(200).json({
      success: true,
      message: "District fetched successfully",
      data: district,
    });
  } catch (err) {
    next(err);
  }
};
const getWard = async (req, res, next) => {
  try {
    const ward = await addressService.getWard(req.params.id);
    return res.status(200).json({
      success: true,
      message: "Ward fetched successfully",
      data: ward,
    });
  } catch (err) {
    next(err);
  }
};

export {
  getProvinces,
  getDistricts,
  getWards,
  getProvince,
  getDistrict,
  getWard,
};
