import { apiHandler, subCategoriesRepo } from "helpers/api";

export default apiHandler({
  get: getAll,
});

async function getAll(req, res) {
  const subcategories = await subCategoriesRepo.getAll();
  return res.status(200).json(subcategories);
}
