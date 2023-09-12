const express = require('express');
const bodyParser = require('body-parser');
const ProductManager = require('./src/ProductManager');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const productManager = new ProductManager('productos.json');

app.get('/products', (req, res) => {
  const { limit } = req.query;
  const products = productManager.getProducts(parseInt(limit));
  res.json({ products });
});

app.get('/products/:pid', (req, res) => {
  const productId = parseInt(req.params.pid);
  const product = productManager.getProductById(productId);
  if (product) {
    res.json({ product });
  } else {
    res.status(404).json({ error: 'Producto no encontrado' });
  }
});

app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
