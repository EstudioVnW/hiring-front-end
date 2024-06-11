import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ContextProvider from './context/contextProvider.tsx'
import CartProviders from './context/cartProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ContextProvider>
      <CartProviders>
        <App />
      </CartProviders>
    </ContextProvider>
  </React.StrictMode>
)
