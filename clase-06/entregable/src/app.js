import express from 'express';
import fs from 'fs';
import ProductManager from './ProductManager';

const ProductManager = require('./ProductManager');

const app = express();
const port = 8080;

const manager = new ProductManager('products.json');

app.use(express.json());

// Obtener todos los productos
app.get('/products', (req, res) => {
  const products = manager.getAllProducts();
  res.json(products);
});

// Obtener un producto por su código
app.get('/products/:code', (req, res) => {
  const code = req.params.code;
  const product = manager.getProductByCode(code);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: 'Producto no encontrado' });
  }
});

// Agregar un nuevo producto
app.post('/products', (req, res) => {
  const { title, description, price, thumbnail, code, stock } = req.body;
  manager.addProduct(title, description, price, thumbnail, code, stock);
  res.status(201).json({ message: 'Producto agregado exitosamente' });
});

// Actualizar el stock de un producto
app.patch('/products/:code', (req, res) => {
  const code = req.params.code;
  const { stock } = req.body;
  manager.updateProductStock(code, stock);
  res.json({ message: 'Stock actualizado exitosamente' });
});

// Eliminar un producto
app.delete('/products/:code', (req, res) => {
  const code = req.params.code;
  manager.removeProduct(code);
  res.json({ message: 'Producto eliminado exitosamente' });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
