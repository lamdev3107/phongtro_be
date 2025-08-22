import db from "../models";

//GET /attributes
const getAttributes = async () => {
  try {
    const attributes = await db.Attribute.findAll({
      raw: true,
    });
    return attributes;
  } catch (err) {
    throw err;
  }
};

export { getAttributes };
