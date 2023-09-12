
const ProductManager = require('./ProductManager');

const productManager = new ProductManager('productos.json');

productManager.addProduct({
  title: 'Producto 1',
  description: 'Descripción del producto 1',
  price: 19.99,
  thumbnail: 'imagen1.jpg',
  code: 'ABC987',
  stock: 10,
});

const allProducts = productManager.getProducts();
console.log('Todos los productos:', allProducts);

const productById = productManager.getProductById(1);
console.log('Producto por ID:', productById);

productManager.updateProduct(1, { price: 29.99 });
productManager.deleteProduct(2);
