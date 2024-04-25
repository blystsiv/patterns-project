const ShoppingCart = require('./ShoppingCart.js');
const { ElectronicsProduct, ClothingProduct, BooksProduct } = require('./Product');

describe('ShoppingCart', () => {
  let cart;

  beforeEach(() => {
    cart = new ShoppingCart();
  });

  afterEach(() => {
    cart = null;
  });

  test('addProduct method adds a product to the cart', () => {
    const product = new ElectronicsProduct('Laptop', 1000);
    cart.addProduct(product);
    expect(cart.products).toContain(product);
  });

  test('removeProduct method removes a product from the cart', () => {
    const product = new ClothingProduct('T-shirt', 20);
    cart.addProduct(product);
    cart.removeProduct('T-shirt');
    expect(cart.products).not.toContain(product);
  });

  test('getTotal method calculates the total price of products in the cart', () => {
    const product1 = new ClothingProduct('T-shirt', 20);
    const product2 = new BooksProduct('Book', 15);
    cart.addProduct(product1);
    cart.addProduct(product2);
    expect(cart.getTotal()).toBe(35);
  });

  test('checkout method clears the cart', () => {
    const product = new ElectronicsProduct('Laptop', 1000);
    cart.addProduct(product);
    cart.checkout('credit_card');
    expect(cart.products.length).toBe(0);
  });

  test('displayCart method logs the products in the cart', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    const product1 = new ElectronicsProduct('Laptop', 1000);
    const product2 = new ClothingProduct('T-shirt', 20);
    cart.addProduct(product1);
    cart.addProduct(product2);
    cart.displayCart();
    expect(consoleSpy).toHaveBeenCalledTimes(3);
  });

  test('removeProduct method handles non-existent product gracefully', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    cart.removeProduct('Non-existent Product');
    expect(consoleSpy).toHaveBeenCalledWith('Non-existent Product not found in the cart.');
  });

  test('getTotal method returns 0 when the cart is empty', () => {
    expect(cart.getTotal()).toBe(0);
  });

  test('checkout method logs the correct total amount and payment method', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    const product = new ElectronicsProduct('Laptop', 1000);
    cart.addProduct(product);
    cart.checkout('credit_card');
    expect(consoleSpy).toHaveBeenCalledWith(
      'Checkout completed. Total amount: $1000, Payment method: credit_card',
    );
  });

  test('checkout method logs the correct total amount and payment method', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    const product = new ElectronicsProduct('Laptop', 1000);
    cart.addProduct(product);
    cart.checkout('credit_card');
    expect(consoleSpy).toHaveBeenCalledWith(
      'Checkout completed. Total amount: $1000, Payment method: credit_card',
    );
  });

  test('displayCart method logs an empty cart message when the cart is empty', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    cart.displayCart();
    expect(consoleSpy).toHaveBeenCalledWith('The cart is empty.');
  });
});
