import {uuid} from 'uuidv4';

class Payment {

  constructor() {
    this.payments = [];
  }

  makePayment(data) {
    const newPayment = {
      transactionId: uuid(),
      currentBalance: data.currentBalance || '',
      amount: data.amount || '',
      destinationWalletId: data.destinationWalletId || '',
      pin: data.pin || '',
      OTP: Math.floor(Math.random() * 999999),
      createdAt: new Date().toLocaleString(),
      status: 'Pending'
    }

    this.payments.push(newPayment);

    return newPayment;
  }

  getOnePayment(transactionId) {
    const currentTransaction = this.payments.find(transaction => transaction.transactionId === transactionId);
    return currentTransaction;
  }

  allPayments() {
    return this.payments;
  }
};

export default new Payment();
