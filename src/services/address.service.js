const db = require("../models");

const getProvinces = async () => {
  try {
    const provinces = await db.Province.findAll();
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
    });
    return wards;
  } catch (err) {
    throw err;
  }
};

const getProvince = async (id) => {
  try {
    const province = await db.Province.findByPk(id);
    return province;
  } catch (err) {
    throw err;
  }
};
const getDistrict = async (id) => {
  try {
    const district = await db.District.findByPk(id);
    return district;
  } catch (err) {
    throw err;
  }
};
const getWard = async (id) => {
  try {
    const ward = await db.Ward.findByPk(id);
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
