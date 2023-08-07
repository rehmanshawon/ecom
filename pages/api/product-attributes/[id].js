import { apiHandler, productAttributeRepo } from "helpers/api";

export default apiHandler({
  get: getById,
});

async function getById(req, res) {
  const attribute = await productAttributeRepo.getById(req.query.id);

  if (!attribute) throw "attribute Not Found";

  return res.status(200).json(attribute);
}
