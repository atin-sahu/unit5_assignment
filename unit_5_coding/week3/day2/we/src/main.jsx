import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {CartContextProvider} from "./Contexts/CartContext"
import {LangContextProvider} from "./Contexts/LangContext"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LangContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </LangContextProvider>
  </React.StrictMode>
)
