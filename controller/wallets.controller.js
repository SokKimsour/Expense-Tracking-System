const walletModel = require("../Models/wallet.model");

const createWallet = async (req, res, next) => {
    try {
        const wallet = await walletModel.create(req.body);

        res.status(201).json({ success: true, result: wallet });
    } catch (error) {
        next(error);
    }
};

const findAll = async (req, res, next) => {
    try {
        const wallet = await walletModel.find();
        res.status(200).json({ success: true, result: wallet });
    } catch (error) {
        next(error);
    }
};

const findOne = async (req, res, next) => {
    try {
        const wallet = await walletModel.findById(req.params.id);

        if (!wallet) {
            return res.status(404).json({ success: false, message: "Wallet not found" });
        }

        res.status(200).json({ success: true, result: wallet });
    } catch (error) {
        next(error);
    }
};

const update = async (req, res, next) => {
    try {
        const { name, note } = req.body;
        const wallet = await walletModel.findByIdAndUpdate(req.params.id, { name, note }, { runValidators: true, new: true });

        if (!wallet) {
            return res.status(404).json({ success: false, message: "Wallet not found" });
        }

        res.status(200).json({ success: true, result: wallet });
    } catch (error) {
        next(error);
    }
};



const deleteWallet = async (req, res, next) => {
    try {
        const wallet = await walletModel.findByIdAndDelete(req.params.id);

        if (!wallet) {
            return res.status(404).json({ success: false, message: "Wallet not found" });
        }

        res.status(200).json({ success: true, result: wallet });
    } catch (error) {
        next(error);
    }
};


module.exports = { createWallet, findAll, findOne, update, deleteWallet };