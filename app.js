const express = require('express');
const notFound = require('./helpers/notfound');
const walletRouter = require('./router/wallets.router');
const incomeRouter = require('./router/incomes.router');
const app = express();

app.use(express.json());

app.use("/wallet", walletRouter);

app.use("/income", incomeRouter);

app.use(notFound);


module.exports = app;