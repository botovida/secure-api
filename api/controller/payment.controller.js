import PaymentModel from '../model/payment.model';

const PaymentController  = {

  makePayment(req, res) {
    if (!req.body.currentBalance && !req.body.amount && !req.body.destinationWalledId && !req.body.pin) {
      return res.status(400).send({'message': 'All fields are required'})
    }
    const payment = PaymentModel.makePayment(req.body);
    return res.status(201).send({data: { status: 201, payment }});
  },

  confirmPayment(req, res) {
    const { id } = req.params;
    if (!req.body.OTP) {
      return res.status(400).send({ 'message': 'Enter the OTP sent to your mobile'});
    }
    const { OTP } = req.body;
    let currentTransaction = PaymentModel.getOnePayment(id);
    if (currentTransaction && (OTP === currentTransaction.OTP) ) {
      let { currentBalance, amount, status, destinationWalledId } = currentTransaction;
      currentTransaction = {
        transactionId: req.params,
        destinationWalledId,
        amountDebited: amount,
        currentBalance: currentBalance - amount,
        status: 'Completed'
      }
      return res.status(200).send(currentTransaction);
    }
    return res.status(400).send('Transaction failed!');
  },

  getAllPayments(req, res) {
    const payments = PaymentModel.allPayments();
    if (payments.length === 0) return res.status(200).json({ status: 404, message: 'There are no payment records' });
    return res.status(200).json({ data: { status: 200, payments }});
  }

};

export default PaymentController;