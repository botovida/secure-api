import {uuid} from 'uuidv4';

class Payment {

  constructor() {
    this.payments = [];
  }

  makePayment(data) {
    const newPayment = {
      transactionId: uuid(),
      accountBalance: data.accountBalance || '',
      transactionAmount: data.transactionAmount || '',
      destinationWalletId: data.destinationWalletId || '',
      accountPin: data.accountPin || '',
      generatedOTP: Math.floor(Math.random() * 999999),
      transactionDate: new Date().toLocaleString(),
      transactionStatus: 'Pending'
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
