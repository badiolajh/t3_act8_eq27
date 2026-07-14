import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Componentes/Layout/SlideBar/SlideBar.css'
import './Componentes/Layout/NavBar/NavBar.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
