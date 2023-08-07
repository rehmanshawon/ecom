import { apiHandler, attributesRepo } from "helpers/api";

export default apiHandler({
  get: getById,
  put: update,
  delete: _delete,
});

async function getById(req, res) {
  const attribute = await attributesRepo.getById(req.query.id);

  if (!attribute) throw "attribute Not Found";

  return res.status(200).json(attribute);
}

async function update(req, res) {
  await attributesRepo.update(req.query.id, req.body);
  return res.status(200).json({});
}

async function _delete(req, res) {
  await attributesRepo.delete(req.query.id);
  return res.status(200).json({});
}
