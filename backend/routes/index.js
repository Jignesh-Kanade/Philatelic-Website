import express from 'express'
import authRoutes from './authRoutes.js'
import userRoutes from './userRoutes.js'
import productRoutes from './productRoutes.js'
import orderRoutes from './orderRoutes.js'

const router = express.Router()

// API Routes
router.use('/auth', authRoutes)
router.use('/users', userRoutes)
router.use('/products', productRoutes)
router.use('/orders', orderRoutes)

// Test route
router.get('/test', (req, res) => {
    res.json({
        success: true,
        message: 'API is working!',
        timestamp: new Date().toISOString()
    })
})

export default router