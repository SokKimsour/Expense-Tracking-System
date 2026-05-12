const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    wallet: {
        type: mongoose.Schema.ObjectId,
        required: "Wallet is required"
    },
    amount: {
        type: Number,
        required: "Amount is required"
    },
    note: {
        type: String
    }

}, { timestamps: true });

const income = mongoose.model('incomes', schema);
module.exports = income;