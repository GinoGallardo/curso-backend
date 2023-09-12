const fs = require('fs');

class ProductManager {
  constructor(filePath) {
    this.path = filePath;
    this.nextProductId = 1;
  }

  addProduct(productData) {
    const products = this.getProductsFromFile();
    productData.id = this.nextProductId++;
    products.push(productData);
    this.saveProductsToFile(products);
  }

  getProducts() {
    return this.getProductsFromFile();
  }

  getProductById(id) {
    const products = this.getProductsFromFile();
    const product = products.find((p) => p.id === id);
    return product || null;
  }

  updateProduct(id, updatedProductData) {
    const products = this.getProductsFromFile();
    const index = products.findIndex((p) => p.id === id);
    if (index !== -1) {
      products[index] = { ...products[index], ...updatedProductData };
      this.saveProductsToFile(products);
    }
  }

  deleteProduct(id) {
    const products = this.getProductsFromFile();
    const updatedProducts = products.filter((p) => p.id !== id);
    this.saveProductsToFile(updatedProducts);
  }

  getProductsFromFile() {
    try {
      const data = fs.readFileSync(this.path, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      return [];
    }
  }

  saveProductsToFile(products) {
    try { 
      fs.writeFileSync(this.path, JSON.stringify(products, null, 2));
    } catch (error) {
      console.error('Error al guardar productos en el archivo:', error);
    }
  }
}

module.exports = ProductManager;
