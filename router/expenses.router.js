const express = require("express");
const { createExpense, findAll } = require("../controller/expenses.controller");
const expenseRouter = express.Router();

expenseRouter.post("/", createExpense);

expenseRouter.get("/", findAll);

module.exports = expenseRouter;