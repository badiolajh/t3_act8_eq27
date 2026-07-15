
import { createRoot } from 'react-dom/client'
import './Componentes/Layout/SlideBar/SlideBar.css'
import './Componentes/Layout/NavBar/NavBar.css'
import App from './App.jsx'

import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
)
