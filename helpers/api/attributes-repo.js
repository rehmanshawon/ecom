import { db } from "helpers/api";

export const attributesRepo = {
  getAll,
  getById,
  create,
  update,
  delete: _delete,
};

async function getAll() {
  return await db.Attribute.findAll();
}

async function getById(id) {
  return await db.Attribute.findByPk(id);
}

async function create(params) {
  // validate
  if (
    await db.Attribute.findOne({
      where: { attribute_name: params.attribute_name },
    })
  ) {
    throw 'Attribute Name "' + params.attribute_name + '" is already taken';
  }

  const attribute = new db.Attribute(params);

  // save category
  await attribute.save();
}

async function update(id, params) {
  const attribute = await db.Attribute.findByPk(id);

  // validate
  if (!attribute) throw "Attribute not found";
  if (
    attribute.attribute_name !== params.attribute_name &&
    (await db.Attribute.findOne({
      where: { attribute_name: params.attribute_name },
    }))
  ) {
    throw 'Attribute name "' + params.attribute_name + '" is already taken';
  }

  // copy params properties to user
  Object.assign(attribute, params);

  await attribute.save();
}

async function _delete(id) {
  const attribute = await db.Attribute.findByPk(id);
  if (!attribute) throw "Attribute not found";

  // delete user
  await attribute.destroy();
}
