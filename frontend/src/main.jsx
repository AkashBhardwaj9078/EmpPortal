import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import AuthProvider from './context/AuthProvider.jsx'
import TaskProvider from './context/TaskProvider.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
          
        <App />  
        </BrowserRouter>

        

      </TaskProvider>
    </AuthProvider>




  </StrictMode>
)
