import { Router } from 'express';
import Payments from '../controller/payment.controller';

const router = Router();

router.post('/api/v1/payments', Payments.makePayment);
router.get('/api/v1/payments', Payments.getAllPayments);
router.patch('/api/v1/payments/:id', Payments.confirmPayment);


export default router;