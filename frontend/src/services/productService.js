import api from './api'

export const getAllProducts = async (params = {}) => {
    const queryParams = new URLSearchParams(params).toString()
    const response = await api.get(`/products?${queryParams}`)
    return response
}

export const getProductById = async (id) => {
    const response = await api.get(`/products/${id}`)
    return response
}

export const searchProducts = async (query) => {
    const response = await api.get(`/products/search?q=${query}`)
    return response
}

export const createProduct = async (productData) => {
    const response = await api.post('/products', productData)
    return response
}

export const updateProduct = async (id, productData) => {
    const response = await api.put(`/products/${id}`, productData)
    return response
}

export const deleteProduct = async (id) => {
    const response = await api.delete(`/products/${id}`)
    return response
}

export const getProductsByCategory = async (category) => {
    const response = await api.get(`/products/category/${category}`)
    return response
}

export const getFeaturedProducts = async () => {
    const response = await api.get('/products/featured')
    return response
}