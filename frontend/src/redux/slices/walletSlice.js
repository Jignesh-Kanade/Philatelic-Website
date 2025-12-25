import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getWalletBalance, addMoney, getTransactions } from '../../services/userService'

const initialState = {
    balance: 0,
    transactions: [],
    loading: false,
    error: null,
}

// Async thunks
export const fetchWalletBalance = createAsyncThunk(
    'wallet/fetchBalance',
    async (_, { rejectWithValue }) => {
        try {
            const response = await getWalletBalance()
            return response
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Failed to fetch balance')
        }
    }
)

export const addMoneyToWallet = createAsyncThunk(
    'wallet/addMoney',
    async (amount, { rejectWithValue }) => {
        try {
            const response = await addMoney(amount)
            return response
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Failed to add money')
        }
    }
)

export const fetchTransactions = createAsyncThunk(
    'wallet/fetchTransactions',
    async (_, { rejectWithValue }) => {
        try {
            const response = await getTransactions()
            return response
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Failed to fetch transactions')
        }
    }
)

const walletSlice = createSlice({
    name: 'wallet',
    initialState,
    reducers: {
        clearError: (state) => {
            state.error = null
        },
        updateBalance: (state, action) => {
            state.balance = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            // Fetch Balance
            .addCase(fetchWalletBalance.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchWalletBalance.fulfilled, (state, action) => {
                state.loading = false
                state.balance = action.payload.balance
            })
            .addCase(fetchWalletBalance.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
            // Add Money
            .addCase(addMoneyToWallet.pending, (state) => {
                state.loading = true
            })
            .addCase(addMoneyToWallet.fulfilled, (state, action) => {
                state.loading = false
                state.balance = action.payload.balance
            })
            .addCase(addMoneyToWallet.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
            // Fetch Transactions
            .addCase(fetchTransactions.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchTransactions.fulfilled, (state, action) => {
                state.loading = false
                state.transactions = action.payload.transactions
            })
            .addCase(fetchTransactions.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
    },
})

export const { clearError, updateBalance } = walletSlice.actions
export default walletSlice.reducer