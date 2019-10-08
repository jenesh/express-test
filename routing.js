const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const port = 8000;

const ordersRouter = require('./routes/orders');
const productsRouter = require('./routes/products');
const usersRouter = require('./routes/users');

app.use('/products', productsRouter);
app.use('/orders', ordersRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Live at http://localhost:${port}`);
})