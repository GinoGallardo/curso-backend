class ProductManager {
  constructor() {
    this.products = [];
    this.nextProductId = 1;
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    // Validamos que todos los campos sean obligatorios
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      console.error("Todos los campos son obligatorios.");
      return;
    }

    // Validar que el campo "code" no se repita
    const codeExists = this.products.some((product) => product.code === code);
    if (codeExists) {
      console.error("El código ya existe para otro producto.");
      return;
    }

    const newProduct = {
      id: this.nextProductId,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };

    this.products.push(newProduct);
    this.nextProductId++;
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const product = this.products.find((product) => product.id === id);
    if (product) {
      return product;
    } else {
      console.error("Producto no encontrado.");
      return null;
    }
  }
}

// Ejemplo de uso
const productManager = new ProductManager();

productManager.addProduct("Cartera", "Cartera de Cuero", 19.99, "cartera.jpg", "ABC123", 10);
productManager.addProduct("Mochila", "Mochila para colegio", 29.99, "mochila.jpg", "DEF456", 5);

const allProducts = productManager.getProducts();
console.log("Todos los productos:", allProducts);

const productById = productManager.getProductById(1);
console.log("Producto por ID:", productById);

const nonExistentProduct = productManager.getProductById(3); // Producto que no existe
