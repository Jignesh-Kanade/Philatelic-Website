import express from 'express'
import {
    getWalletBalance,
    addMoneyToWallet,
    getTransactions,
    getAllUsers,
    updateUserStatus,
    deleteUser,
    getUserStats
} from '../controllers/userController.js'
import protect from '../middleware/auth.js'
import admin from '../middleware/admin.js'

const router = express.Router()

// Protected routes
router.use(protect)

// User wallet routes
router.get('/wallet', getWalletBalance)
router.post('/wallet/add', addMoneyToWallet)
router.get('/transactions', getTransactions)

// Admin only routes
router.get('/stats', admin, getUserStats)
router.get('/', admin, getAllUsers)
router.put('/:id/status', admin, updateUserStatus)
router.delete('/:id', admin, deleteUser)

export default router