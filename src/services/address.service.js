const db = require("../models");

const getProvinces = async () => {
  try {
    const provinces = await db.Province.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    return provinces;
  } catch (err) {
    throw err;
  }
};

const getDistricts = async (provinceId) => {
  try {
    const districts = await db.District.findAll({
      where: {
        provinceId,
      },
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    return districts;
  } catch (err) {
    throw err;
  }
};

const getWards = async (districtId) => {
  try {
    const wards = await db.Ward.findAll({
      where: {
        districtId,
      },
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    return wards;
  } catch (err) {
    throw err;
  }
};

const getProvince = async (id) => {
  try {
    const province = await db.Province.findByPk(id, {
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    return province;
  } catch (err) {
    throw err;
  }
};
const getDistrict = async (id) => {
  try {
    const district = await db.District.findByPk(id, {
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    return district;
  } catch (err) {
    throw err;
  }
};
const getWard = async (id) => {
  try {
    const ward = await db.Ward.findByPk(id, {
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    return ward;
  } catch (err) {
    throw err;
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
