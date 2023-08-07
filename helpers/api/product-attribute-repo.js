import { db } from "helpers/api";

export const productAttributeRepo = {
  getAll,
  getById,
};

async function getAll() {
  return await db.ProductAttribute.findAll();
}

async function getById(id) {
  return await db.ProductAttribute.findAll({
    where: { ProductId: id },
    include: [
      {
        model: db.Attribute,
        attributes: ["attribute_name"],
      },
    ],
    attributes: [
      "id",
      "attribute_value",
      "attribute_value_type",
      "attribute_value_unit",
      "createdAt",
    ],
  });
}
