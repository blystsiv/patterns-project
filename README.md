# Online Shop Project Documentation

This project is a simple online shop implemented in JavaScript. It includes functionality to manage a shopping cart, create products of different categories, process payments, and provide order status updates.

## Design Patterns Used:

- Factory Method:
  The ProductFactory class implements the Factory Method pattern to create different types of products (electronics, clothing, books) based on a common interface.
- Singleton:
  The ShoppingCart class is implemented as a Singleton to ensure that there's only one instance of the shopping cart throughout the application, maintaining consistency in the user's shopping session.
- Observer:
  The OrderStatusObserver class follows the Observer pattern to notify users of changes in their order status, providing real-time updates.
- Adapter:
  The PaymentGatewayAdapter class acts as an Adapter to process payments with an external payment gateway, adapting its interface to work seamlessly with the internal payment processing system of the online shop.
- Strategy:
  The ShippingStrategy class utilizes the Strategy pattern to calculate shipping costs for orders, allowing for different shipping calculation strategies to be implemented and easily switched based on requirements or changes in business logic.

## Functionality:

- Products can be added to the shopping cart, which calculates the total price of all items.
- Users receive order status updates through the OrderStatusObserver.
- Payments are processed using an external payment gateway, adapted by the PaymentGatewayAdapter.
- Shipping costs are calculated based on different strategies using the ShippingStrategy.
- The shopping cart can be displayed, and items can be removed or the entire cart can be cleared during checkout.

## Usage:

- Create products using the ProductFactory.
- Add products to the shopping cart using the ShoppingCart.
- Receive order status updates via the OrderStatusObserver.
- Process payments with the PaymentGatewayAdapter.
- Calculate shipping costs with the ShippingStrategy.
- Remove items from the shopping cart or complete the checkout process.
