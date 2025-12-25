import React, { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Orders from './pages/Orders'
import Wallet from './pages/Wallet'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Dashboard from './pages/admin/Dashboard'
import ManageProducts from './pages/admin/ManageProducts'
import ManageOrders from './pages/admin/ManageOrders'
import ManageUsers from './pages/admin/ManageUsers'
import AddProduct from './pages/admin/AddProduct'
import Settings from './pages/admin/Settings'
import ProtectedRoute from './components/auth/ProtectedRoute'
import { checkAuth } from './redux/slices/authSlice'

function App() {
  const dispatch = useDispatch()
  const { isAuthenticated, user } = useSelector((state) => state.auth)
  const { authChecked } = useSelector((state) => state.auth)


  useEffect(() => {
    dispatch(checkAuth())
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Auth Routes */}
          <Route
            path="/login"
            element={authChecked && isAuthenticated ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/register"
            element={isAuthenticated ? <Navigate to="/" /> : <Register />}
          />

          {/* Protected User Routes */}
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/orders"
            element={
              <ProtectedRoute>
                <Orders />
              </ProtectedRoute>
            }
          />
          <Route
            path="/wallet"
            element={
              <ProtectedRoute>
                <Wallet />
              </ProtectedRoute>
            }
          />

          {/* Protected Admin Routes */}
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute adminOnly>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/products"
            element={
              <ProtectedRoute adminOnly>
                <ManageProducts />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/products/add"
            element={
              <ProtectedRoute adminOnly>
                <AddProduct />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/orders"
            element={
              <ProtectedRoute adminOnly>
                <ManageOrders />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/users"
            element={
              <ProtectedRoute adminOnly>
                <ManageUsers />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/settings"
            element={
              <ProtectedRoute adminOnly>
                <Settings />
              </ProtectedRoute>
            }
          />

          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App





