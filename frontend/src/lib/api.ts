import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})

// Add token to requests
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

// Handle 401 errors
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            window.location.href = '/login'
        }
        return Promise.reject(error)
    }
)

export const authAPI = {
    sendOTP: async (phone: string) => {
        const response = await api.post('/api/auth/send-otp', { phone })
        return response.data
    },

    verifyOTP: async (phone: string, otp: string, registrationData?: any) => {
        const response = await api.post('/api/auth/verify-otp', {
            phone,
            otp,
            registrationData,
        })
        if (response.data.token) {
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('user', JSON.stringify(response.data.user))
        }
        return response.data
    },

    login: async (phone: string, otp: string) => {
        const response = await api.post('/api/auth/login', { phone, otp })
        if (response.data.token) {
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('user', JSON.stringify(response.data.user))
        }
        return response.data
    },

    logout: () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        window.location.href = '/'
    },

    isAuthenticated: () => {
        return !!localStorage.getItem('token')
    },

    getUser: () => {
        const user = localStorage.getItem('user')
        return user ? JSON.parse(user) : null
    },
}

export default api
