import Joi from 'joi';

const paymentSchema = {
  body: {
    transactionAmount: Joi.number()
    .integer()
    .positive()
    .min(4)
    .required()
    .error(new Error('Please enter a minimum of N1000 as Transaction Amount')),
    
    destinationWalletId: Joi.number()
    .integer()
    .positive()
    .min(10)
    .required()
    .error(new Error('Please enter the 10-digit destination Walled ID')),
    
    accountPin: Joi.number()
    .integer()
    .positive()
    .min(4)
    .required()
    .error(new Error('Please enter your 4-digit Account PIN')),
  }
};

const confirmPaymentSchema = {
  params: {
    id: Joi.string()
      .required().
      error(new Error('Please enter your transaction ID')),
},
  body: {
    OTP: Joi.number().integer()
      .positive()
      .min(6)
      .required()
      .error(new Error('Please enter the OTP that was sent to you')),
  }
};




export default [
  {
    route: '/api/v1/payments',
    method: 'post',
    schema: paymentSchema
  },
  {
    route: '/api/v1/payment/:id',
    method: 'patch',
    schema: confirmPaymentSchema
  }
];