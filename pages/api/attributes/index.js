import { apiHandler, attributesRepo } from "helpers/api";

export default apiHandler({
  get: getAll,
});

async function getAll(req, res) {
  const attributes = await attributesRepo.getAll();
  return res.status(200).json(attributes);
}
