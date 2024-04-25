class PaymentGatewayAdapter {
  static processPayment(paymentDetails) {
    console.log('Processing payment with external payment gateway:', paymentDetails);
  }
}

module.exports = PaymentGatewayAdapter;