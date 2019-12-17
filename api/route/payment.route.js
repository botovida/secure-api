import { Router } from 'express';
import Payments from '../controller/payment.controller';
import validatorMiddleware from '../middleware/validator.middleware';

const validateRequest = validatorMiddleware();

const router = Router();

router.post('/api/v1/payments', validateRequest, Payments.makePayment);
router.get('/api/v1/payments', Payments.getAllPayments);
router.patch('/api/v1/payment/:id', validateRequest, Payments.confirmPayment);


export default router;