import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import { ThemeContextProvider } from './contexts/ThemeContext'
import AuthContextProvider from './contexts/AuthContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <ThemeContextProvider>
      <RouterProvider router={router} />
    </ThemeContextProvider>
  </AuthContextProvider>
)
