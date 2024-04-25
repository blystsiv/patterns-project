const OrderStatusObserver = require('./OrderStatusObserver');
const PaymentGatewayAdapter = require('./PaymentGatewayAdapter');
const ProductFactory = require('./ProductFactory');
const ShippingStrategy = require('./ShippingStrategy');
const ShoppingCart = require('./ShoppingCart');

const user = { name: 'John' };

const product1 = ProductFactory.createProduct('electronics', 'Laptop', 1000);
const product2 = ProductFactory.createProduct('clothing', 'T-shirt', 20);
const product3 = ProductFactory.createProduct('books', 'Book', 15);

const cart = new ShoppingCart();
cart.addProduct(product1);
cart.addProduct(product2);
cart.addProduct(product3);

console.log('Total:', cart.getTotal());

OrderStatusObserver.notify(user, 'shipped');

const paymentDetails = { amount: cart.getTotal(), method: 'credit_card' };
PaymentGatewayAdapter.processPayment(paymentDetails);

const order = { products: cart.products, shippingAddress: '123 Main St' };
ShippingStrategy.calculateShippingCost(order);

cart.removeProduct('T-shirt');
console.log('Total after removing T-shirt:', cart.getTotal());

cart.checkout('credit_card');

cart.displayCart();
