import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Root from './Route/Root.jsx'
import { RouterProvider } from 'react-router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Root}></RouterProvider>
  </StrictMode>,
)
