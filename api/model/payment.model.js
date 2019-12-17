import uuid from 'uuidv4';

class Payment {

  constructor() {
    this.payments = [];
  }

  makePayment(data) {
    const newPayment = {
      id: uuid.v4(),
      amount: data.amount || '',
      destinationWalletId: data.destinationWalletId || '',
      pin: data.pin || '',
      createdAt: new Date()
    }

    this.payments.push(newPayment);

    return newPayment;
  }

  getAllPayments() {
    return this.payments;
  }
};

export default new Payment();
