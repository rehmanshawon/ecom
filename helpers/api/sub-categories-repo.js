import { db } from "helpers/api";

export const subCategoriesRepo = {
  getAll,
  getById,
  create,
  update,
  delete: _delete,
};

async function getAll() {
  return await db.SubCategory.findAll();
}

async function getById(id) {
  return await db.SubCategory.findByPk(id);
}

async function create(params) {
  // validate
  if (
    await db.SubCategory.findOne({
      where: { sub_category_name: params.sub_category_name },
    })
  ) {
    throw 'Category Name "' + params.sub_category_name + '" is already taken';
  }

  const subcategory = new db.SubCategory(params);

  // save category
  await subcategory.save();
}

async function update(id, params) {
  const subcategory = await db.SubCategory.findByPk(id);

  // validate
  if (!subcategory) throw "SubCategory not found";
  if (
    subcategory.sub_category_name !== params.sub_category_name &&
    (await db.SubCategory.findOne({
      where: { sub_category_name: params.sub_category_name },
    }))
  ) {
    throw (
      'SubCategory name "' + params.sub_category_name + '" is already taken'
    );
  }

  // copy params properties to user
  Object.assign(subcategory, params);

  await subcategory.save();
}

async function _delete(id) {
  const subcategory = await db.SubCategory.findByPk(id);
  if (!subcategory) throw "SubCategory not found";

  // delete user
  await subcategory.destroy();
}
