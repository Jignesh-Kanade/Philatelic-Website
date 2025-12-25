import Wallet from '../models/Wallet.js'
import Transaction from '../models/Transaction.js'

// @desc    Get wallet details
// @route   GET /api/wallet
// @access  Private
export const getWallet = async (req, res, next) => {
    try {
        let wallet = await Wallet.findOne({ user: req.user._id })

        if (!wallet) {
            wallet = await Wallet.create({
                user: req.user._id,
                balance: 0
            })
        }

        res.status(200).json({
            success: true,
            wallet
        })
    } catch (error) {
        next(error)
    }
}

// @desc    Get wallet transactions
// @route   GET /api/wallet/transactions
// @access  Private
export const getWalletTransactions = async (req, res, next) => {
    try {
        const transactions = await Transaction.find({ user: req.user._id })
            .sort({ createdAt: -1 })
            .populate('order', 'orderId status')

        res.status(200).json({
            success: true,
            count: transactions.length,
            transactions
        })
    } catch (error) {
        next(error)
    }
}