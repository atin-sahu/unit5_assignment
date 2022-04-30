import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { StoreContextProvider } from './redux/StoreContext'
import { store } from './redux/store'

console.log(store.getState());
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StoreContextProvider store={store}>
      <App />
    </StoreContextProvider>
  </React.StrictMode>
)
