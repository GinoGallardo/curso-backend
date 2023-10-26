// import { Router } from "express";
// import ProductManager from "../controllers/ProductManager";

// const ProductsRouter = Router()
// const product = new ProductManager();

// ProductsRouter.get('/', async (req, res) => {
//   res.send(await product.getProducts());
// });

// ProductsRouter.get('/:pid', async (req, res) => {
//   let id = req.params.pid;
//   res.send(await product.getProductById(id));
// });

// ProductsRouter.post('/', async (req, res) => {
//   let newProduct = req.body;
//   res.send(await product.addProducts(newProduct));
// });

// ProductsRouter.put('/:pid', async (req, res) => {
//   let id = req.params.pid;
//   let updatedProduct = req.body;
//   res.send(await product.updateProducts(id, updatedProduct));
// });

// ProductsRouter.delete('/:pid', async (req, res) => {
//   let id = req.params.pid;
//   res.send(await product.deleteProducts(id));
// });


// export default ProductsRouter;