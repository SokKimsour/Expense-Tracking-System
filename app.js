const express = require('express');
const notFound = require('./helpers/notfound');
const walletRouter = require('./router/wallets.router');
const app = express();

app.use(express.json());

app.use("/wallet", walletRouter);

app.use(notFound);


module.exports = app;