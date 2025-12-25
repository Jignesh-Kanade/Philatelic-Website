import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import cartReducer from './slices/cartSlice'
import productReducer from './slices/productSlice'
import orderReducer from './slices/orderSlice'
import walletReducer from './slices/walletSlice'

const store = configureStore({
    reducer: {
        auth: authReducer,
        cart: cartReducer,
        product: productReducer,
        order: orderReducer,
        wallet: walletReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export default store