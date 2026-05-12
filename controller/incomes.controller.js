const incomeModel = require("../Models/income.model");
const walletModel = require("../Models/wallet.model");
const createIncome = async (req, res, next) => {
    try {
        const income = await incomeModel.create(req.body);

        if (income) {
            const wallet = await walletModel.findById(income.wallet);
            let newBalance = wallet.balance + income.amount;
            await walletModel.findByIdAndUpdate(income.wallet, { balance: newBalance }, { runValidators: true, new: true });
        }
        res.status(201).json({ success: true, result: income });
    } catch (error) {
        next(error);
    }
}

const findAll = async (req, res, next) => {
    try {
        const income = await incomeModel.find();
        res.status(200).json({ success: true, result: income });
    } catch (error) {
        next(error);
    }

}

module.exports = { createIncome, findAll };