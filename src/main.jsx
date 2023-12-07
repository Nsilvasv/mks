import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { CartProvider } from './Context/CartContext.jsx'


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider> 
      <QueryClientProvider client={queryClient}> 
          <App />
      </QueryClientProvider>
    </CartProvider>
  </React.StrictMode>,
)
