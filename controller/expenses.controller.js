const expenseModel = require("../Models/expense.model");
const walletModel = require("../Models/wallet.model");
const createExpense = async (req, res, next) => {
    try {
        const expense = await expenseModel.create(req.body);

        if (expense) {
            const wallet = await walletModel.findById(expense.wallet);
            let newBalance = wallet.balance - expense.amount;
            await walletModel.findByIdAndUpdate(expense.wallet, { balance: newBalance }, { runValidators: true, new: true });
        }
        res.status(201).json({ success: true, result: expense });
    } catch (error) {
        next(error);
    }
}

const findAll = async (req, res, next) => {
    try {
        const expense = await expenseModel.find();
        res.status(200).json({ success: true, result: expense });
    } catch (error) {
        next(error);
    }

}

module.exports = { createExpense, findAll };