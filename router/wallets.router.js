const express = require("express");
const { createWallet, findAll, findOne, update, deleteWallet } = require("../controller/wallets.controller");
const walletRouter = express.Router();

walletRouter.post("/", createWallet);

walletRouter.get("/", findAll);

walletRouter.get("/:id", findOne);

walletRouter.put("/:id", update);

walletRouter.delete("/:id", deleteWallet);

module.exports = walletRouter;