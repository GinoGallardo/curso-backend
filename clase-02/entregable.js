class ProductManager {
  constructor() {
    this.products = [];
  }

  addProduct(titulo, descripcion, precio, image, code, stock) {
    const product = {
      titulo: titulo,
      descripcion: descripcion,
      precio: precio,
      image: image,
      code: code,
      stock: stock
    };
    this.products.push(product);
  }

  removeProduct(code) {
    const index = this.products.findIndex(product => product.code === code);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }

  updateProductStock(code, newStock) {
    const product = this.products.find(product => product.code === code);
    if (product) {
      product.stock = newStock;
    }
  }

  getProductByCode(code) {
    return this.products.find(product => product.code === code) || null;
  }

  getAllProducts() {
    return this.products;
  }
}


const manager = new ProductManager();

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
