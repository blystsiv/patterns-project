const { Product } = require('./Product');

class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    if (product instanceof Product) {
      this.products.push(product);
    } else {
      console.error('Invalid product type:', product);
    }
  }

  removeProduct(productName) {
    const index = this.products.findIndex((product) => product.name === productName);
    if (index !== -1) {
      this.products.splice(index, 1);
      console.log(`Removed ${productName} from the cart.`);
    } else {
      console.log(`${productName} not found in the cart.`);
    }
  }

  getTotal() {
    return this.products.reduce((total, product) => total + product.price, 0);
  }

  checkout(paymentMethod) {
    const totalAmount = this.getTotal();
    console.log(
      `Checkout completed. Total amount: $${totalAmount}, Payment method: ${paymentMethod}`,
    );
    this.products = [];
  }

  displayCart() {
    if (this.products.length === 0) {
      console.log('The cart is empty.');
    } else {
      console.log('Shopping Cart:');
      this.products.forEach((product) => {
        console.log(`Name: ${product.name}, Price: $${product.price}`);
      });
    }
  }
}

module.exports = ShoppingCart;
