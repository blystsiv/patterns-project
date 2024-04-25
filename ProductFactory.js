const { ElectronicsProduct, ClothingProduct, BooksProduct } = require('./Product');

class ProductFactory {
  static createProduct(type, name, price) {
    switch (type) {
      case 'electronics':
        return new ElectronicsProduct(name, price);
      case 'clothing':
        return new ClothingProduct(name, price);
      case 'books':
        return new BooksProduct(name, price);
      default:
        throw new Error('Invalid product type');
    }
  }
}

module.exports = ProductFactory;
