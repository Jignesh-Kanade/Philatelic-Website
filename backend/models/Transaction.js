import mongoose from 'mongoose'

const transactionSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    type: {
        type: String,
        enum: ['credit', 'debit'],
        required: true
    },
    amount: {
        type: Number,
        required: true,
        min: [0, 'Amount must be positive']
    },
    description: {
        type: String,
        required: true
    },
    balanceAfter: {
        type: Number,
        required: true
    },
    order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order'
    }
}, {
    timestamps: true
})

// Index for faster queries
transactionSchema.index({ user: 1, createdAt: -1 })

const Transaction = mongoose.model('Transaction', transactionSchema)

export default Transaction