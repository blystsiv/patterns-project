class OrderStatusObserver {
  static notify(user, orderStatus) {
    console.log(`User ${user.name}: Your order status is now ${orderStatus}`);
  }
}

module.exports = OrderStatusObserver;