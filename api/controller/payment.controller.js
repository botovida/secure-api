import PaymentModel from '../model/payment.model';

const PaymentController  = {

  makePayment(req, res) {
    if (!req.body.accountBalance && !req.body.transactionAmount && !req.body.destinationWalledId && !req.body.pin) {
      return res.status(400).send({'message': 'All fields are required'})
    }
    try {
      const payment = PaymentModel.makePayment(req.body);
      const message = 'Please enter the OTP sent to you to confirm payment'
      return res.status(201).send({data: { status: 201, payment, message }});
    } catch (error) {
      return res.status(500).send(error.message);
    }
  },

  confirmPayment(req, res) {
    
    const { id } = req.params;
    try {
      if (!req.body.OTP) {
        return res.status(400).send({ 'message': 'Enter the OTP sent to your mobile'});
      }
      const { OTP } = req.body;
      let currentTransaction = PaymentModel.getOnePayment(id);
      if (currentTransaction && (OTP === currentTransaction.generatedOTP) ) {
        const { transactionId, accountBalance, transactionAmount, transactionStatus, destinationWalledId, transactionDate } = currentTransaction;
        currentTransaction = {
          transactionId,
          destinationWalledId,
          amountDebited: transactionAmount,
          accountBalance: accountBalance - transactionAmount,
          transactionStatus: 'Completed',
          transactionDate
        }
        const message = 'Payment Successful'
        return res.status(200).send( { data: { currentTransaction, message }});
      }
      return res.status(400).send('Transaction failed!');
    } catch(error) {
      return res.status(500).send(error.message);
    }
  },

  getAllPayments(req, res) {
    const payments = PaymentModel.allPayments();
    try {
      
      if (payments.length === 0) return res.status(200).json({ status: 404, message: 'There are no payment records' });
      return res.status(200).json({ data: { status: 200, payments }});
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

};

export default PaymentController;