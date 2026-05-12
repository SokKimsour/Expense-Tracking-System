const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: "Name is required",
        unique: true
    },
    balance: {
        type: Number,
        default: 0
    },
    note: {
        type: String
    }
}, { timestamps: true });
const wallet = mongoose.model("wallets", schema);
module.exports = wallet;