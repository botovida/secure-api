import PaymentModel from '../model/payment.model';

const Payment = {

  makePayment(req, res) {
    if (!req.body.amount && !req.body.destinationWalledId && !req.body.pin) {
      return res.status(400).send({'message': 'All fields are required'})
    }
    const payment = PaymentModel.makePayment(req.body);
    return res.status(201).send(payment);
  },

  getAllPayments(res, req) {
    const allPayments = PaymentModel.getAllPayments();
    return res.status(200).send(allPayments);
  }

};

export default Payment;