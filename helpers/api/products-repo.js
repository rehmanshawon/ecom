import { db } from "helpers/api";

export const productsRepo = {
  getAll,
  getById,
  create,
  update,
  delete: _delete,
};

async function getAll() {
  return await db.Product.findAll({
    include: [
      {
        model: db.Category,
        attributes: ["category_name"],
      },
      {
        model: db.Rating,
        attributes: ["Rating_value"],
      },
    ],
  });
}

async function getById(id) {
  //console.log("inside repo", id);
  if (typeof id === "number") {
    // console.log("wrong place");
    return await db.Product.findByPk(id);
  } else {
    //console.log("right place");
    return await db.Product.findOne({
      where: { sku: id },
      include: [
        {
          model: db.Category,
          attributes: ["category_name"],
        },
        {
          model: db.ProductImage,
          attributes: ["id", "image_path", "image_type", "createdAt"],
        },
        {
          model: db.Rating,
          attributes: ["Rating_value"],
        },
      ],
    });
  }
}

async function create(params) {
  // validate

  const product = new db.Product(params);

  // save category
  await product.save();
}

async function update(id, params) {
  const product = await db.Product.findByPk(id);

  // validate
  if (!product) throw "Product not found";

  // copy params properties to user
  Object.assign(product, params);

  await product.save();
}

async function _delete(id) {
  const product = await db.Product.findByPk(id);
  if (!product) throw "Product not found";

  // delete user
  await product.destroy();
}
