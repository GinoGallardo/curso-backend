import express from 'express';
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid'; // Para generar IDs únicos

const app = express();
const PORT = 8080;

// Middleware para analizar el cuerpo de las solicitudes
app.use(express.json());

// Rutas de productos
const productsRouter = express.Router();

productsRouter.get('/', (req, res) => {
  // Leer los productos del archivo productos.json
  fs.readFile('productos.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al leer los productos.' });
    } else {
      const products = JSON.parse(data);
      res.json(products);
    }
  });
});

productsRouter.get('/:pid', (req, res) => {
  const productId = req.params.pid;
  // Leer los productos del archivo productos.json
  fs.readFile('productos.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al leer los productos.' });
    } else {
      const products = JSON.parse(data);
      const product = products.find((p) => p.id === productId);
      if (product) {
        res.json(product);
      } else {
        res.status(404).json({ error: 'Producto no encontrado.' });
      }
    }
  });
});

productsRouter.post('/', (req, res) => {
  const newProduct = {
    id: uuidv4(), // Generar un ID único para el producto
    ...req.body,
  };

  // Leer los productos del archivo productos.json
  fs.readFile('productos.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al leer los productos.' });
    } else {
      const products = JSON.parse(data);
      products.push(newProduct);

      // Guardar los productos actualizados en el archivo productos.json
      fs.writeFile('productos.json', JSON.stringify(products, null, 2), 'utf8', (err) => {
        if (err) {
          console.error(err);
          res.status(500).json({ error: 'Error al guardar el nuevo producto.' });
        } else {
          res.json(newProduct);
        }
      });
    }
  });
});

productsRouter.put('/:pid', (req, res) => {
  const productId = req.params.pid;

  // Leer los productos del archivo productos.json
  fs.readFile('productos.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al leer los productos.' });
    } else {
      let products = JSON.parse(data);
      const productIndex = products.findIndex((p) => p.id === productId);
      if (productIndex !== -1) {
        // Mantener el ID original al actualizar
        const updatedProduct = {
          ...products[productIndex],
          ...req.body,
          id: productId,
        };

        products[productIndex] = updatedProduct;

        // Guardar los productos actualizados en el archivo productos.json
        fs.writeFile('productos.json', JSON.stringify(products, null, 2), 'utf8', (err) => {
          if (err) {
            console.error(err);
            res.status(500).json({ error: 'Error al actualizar el producto.' });
          } else {
            res.json(updatedProduct);
          }
        });
      } else {
        res.status(404).json({ error: 'Producto no encontrado.' });
      }
    }
  });
});

productsRouter.delete('/:pid', (req, res) => {
  const productId = req.params.pid;

  // Leer los productos del archivo productos.json
  fs.readFile('productos.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al leer los productos.' });
    } else {
      let products = JSON.parse(data);
      const filteredProducts = products.filter((p) => p.id !== productId);

      if (filteredProducts.length < products.length) {
        // Si se eliminó un producto
        // Guardar los productos actualizados en el archivo productos.json
        fs.writeFile('productos.json', JSON.stringify(filteredProducts, null, 2), 'utf8', (err) => {
          if (err) {
            console.error(err);
            res.status(500).json({ error: 'Error al eliminar el producto.' });
          } else {
            res.json({ message: 'Producto eliminado exitosamente.' });
          }
        });
      } else {
        res.status(404).json({ error: 'Producto no encontrado.' });
      }
    }
  });
});

app.use('/api/products', productsRouter);

// Rutas de carritos
const cartsRouter = express.Router();

cartsRouter.post('/', (req, res) => {
  const newCart = {
    id: uuidv4(), // Generar un ID único para el carrito
    products: [],
  };

  // Guardar el nuevo carrito en el archivo carrito.json
  fs.writeFile('carrito.json', JSON.stringify(newCart, null, 2), 'utf8', (err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al crear el carrito.' });
    } else {
      res.json(newCart);
    }
  });
});

cartsRouter.get('/:cid', (req, res) => {
  const cartId = req.params.cid;

  // Leer el carrito del archivo carrito.json
  fs.readFile('carrito.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al leer el carrito.' });
    } else {
      const cart = JSON.parse(data);
      if (cart.id === cartId) {
        res.json(cart.products);
      } else {
        res.status(404).json({ error: 'Carrito no encontrado.' });
      }
    }
  });
});

cartsRouter.post('/:cid/product/:pid', (req, res) => {
  const cartId = req.params.cid;
  const productId = req.params.pid;
  const quantity = req.body.quantity || 1; // Si no se proporciona la cantidad, se asume 1

  // Leer el carrito del archivo carrito.json
  fs.readFile('carrito.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al leer el carrito.' });
    } else {
      let cart = JSON.parse(data);
      if (cart.id === cartId) {
        const productIndex = cart.products.findIndex((p) => p.product === productId);
        if (productIndex !== -1) {
          // Si el producto ya existe en el carrito, incrementar la cantidad
          cart.products[productIndex].quantity += quantity;
        } else {
          // Si el producto no existe en el carrito, agregarlo al arreglo
          cart.products.push({ product: productId, quantity });
        }

        // Guardar el carrito actualizado en el archivo carrito.json
        fs.writeFile('carrito.json', JSON.stringify(cart, null, 2), 'utf8', (err) => {
          if (err) {
            console.error(err);
            res.status(500).json({ error: 'Error al actualizar el carrito.' });
          } else {
            res.json(cart.products);
          }
        });
      } else {
        res.status(404).json({ error: 'Carrito no encontrado.' });
      }
    }
  });
});

app.use('/api/carts', cartsRouter);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
