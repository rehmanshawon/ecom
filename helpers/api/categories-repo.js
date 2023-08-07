import { db } from "helpers/api";

export const categoriesRepo = {
  getAll,
  getById,
  create,
  update,
  delete: _delete,
};

async function getAll() {
  return await db.Category.findAll({
    include: [
      {
        model: db.Product,
        attributes: ["id", "brand", "sku", "createdAt"],
      },
    ],
    attributes: ["id", "category_name", "createdAt"],
  });
}

async function getById(id) {
  return await db.Category.findByPk(id);
}

async function create(params) {
  // validate
  if (
    await db.Category.findOne({
      where: { category_name: params.category_name },
    })
  ) {
    throw 'Category Name "' + params.category_name + '" is already taken';
  }

  const category = new db.Category(params);

  // save category
  await category.save();
}

async function update(id, params) {
  const category = await db.Category.findByPk(id);

  // validate
  if (!category) throw "Category not found";
  if (
    category.category_name !== params.category_name &&
    (await db.Category.findOne({
      where: { category_name: params.category_name },
    }))
  ) {
    throw 'Category name "' + params.category_name + '" is already taken';
  }

  // copy params properties to user
  Object.assign(category, params);

  await category.save();
}

async function _delete(id) {
  const category = await db.Category.findByPk(id);
  if (!category) throw "Category not found";

  // delete user
  await category.destroy();
}
