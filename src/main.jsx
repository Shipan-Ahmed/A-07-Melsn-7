import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Root from './Route/Root.jsx'
import { RouterProvider } from 'react-router'
import FriendsContextData from './Components/CustomsContext/FriendsContextData.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FriendsContextData>
      <RouterProvider router={Root}></RouterProvider>
   </FriendsContextData>
  </StrictMode>,
)
