import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CartProvider from './Context/CartContext.jsx'
import { AuthProvider } from './Context/AuthContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <CartProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </CartProvider>
  </AuthProvider>,
)
