import { apiHandler, productsRepo } from "helpers/api";

export default apiHandler({
  get: getById,
});

async function getById(req, res) {
  //console.log(req.query.id);
  const product = await productsRepo.getById(req.query.id);

  if (!product) throw "Product Not Found";

  return res.status(200).json(product);
}
