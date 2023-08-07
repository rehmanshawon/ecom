import { apiHandler, subCategoriesRepo } from "helpers/api";

export default apiHandler({
  get: getById,
});

async function getById(req, res) {
  const subcategory = await subCategoriesRepo.getById(req.query.id);
  if (!subcategory) throw "Sub-category Not Found";
  return res.status(200).json(subcategory);
}
