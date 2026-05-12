const express = require("express");
const { createIncome, findAll } = require("../controller/incomes.controller");
const incomeRouter = express.Router();

incomeRouter.post("/", createIncome);

incomeRouter.get("/", findAll);

module.exports = incomeRouter;