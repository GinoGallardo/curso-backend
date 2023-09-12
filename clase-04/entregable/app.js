const fs = require('fs');

class ProductManager {
  constructor(path) {
    this.products = [];
    this.path = path;
    this.loadProducts();
  }

  loadProducts() {
    try {
      const data = fs.readFileSync(this.path, 'utf8');
      this.products = JSON.parse(data);
    } catch (error) {
      console.log('Error loading products:', error);
    }
  }

  saveProducts() {
    try {
      const data = JSON.stringify(this.products, null, 2);
      fs.writeFileSync(this.path, data, 'utf8');
    } catch (error) {
      console.log('Error saving products:', error);
    }
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    const product = {
      id: this.products.length + 1,
      title: title,
      description: description,
      price: price,
      thumbnail: thumbnail,
      code: code,
      stock: stock
    };
    this.products.push(product);
    this.saveProducts();
  }

  removeProduct(code) {
    const index = this.products.findIndex(product => product.code === code);
    if (index !== -1) {
      this.products.splice(index, 1);
      this.saveProducts();
    }
  }

  updateProductStock(code, newStock) {
    const product = this.products.find(product => product.code === code);
    if (product) {
      product.stock = newStock;
      this.saveProducts();
    }
  }

  getProductByCode(code) {
    return this.products.find(product => product.code === code) || null;
  }

  getAllProducts() {
    return this.products;
  }
}

const manager = new ProductManager('products.json');

manager.addProduct("Producto 1", "Descripción del producto 1", 10.99, "imagen1.jpg", "P1", 20);
manager.addProduct("Producto 2", "Descripción del producto 2", 19.99, "imagen2.jpg", "P2", 15);

const products = manager.getAllProducts();
console.log(products);

const product = manager.getProductByCode("P1");
if (product) {
  console.log(product);
} else {
  console.log("Producto no encontrado");
}

manager.updateProductStock("P1", 30);
manager.removeProduct("P2");
