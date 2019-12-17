import express from 'express';

const app = express()

app.use(express.json())

app.get('/', (req, res) => res.send('Welcome to AjoCard Payment Services!'))


export default app;