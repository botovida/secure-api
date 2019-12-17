import express from 'express';

import paymentRoutes from './api/route/payment.route';

const app = express()


app.use(express.json())

app.get('/', (req, res) => res.send('Welcome to AjoCard Payment Services!'))

app.use(paymentRoutes);

export default app;