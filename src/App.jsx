
import { useState } from 'react'
import LoginPage from './pages/LoginPage'
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css'
import Principal from './Paginas/Principal/Principal';

import './Componentes/Layout/SlideBar/SlideBar.css'
import './Componentes/Layout/NavBar/NavBar.css'
import './Componentes/Layout/Usuarios-Frame/Usuarios_F.css'

  function App() {
  const [user, setUser] = useState(null)
  return (
    <div className="app-layout">
          <>
                {!user ? (
                  <LoginPage onLogin={setUser} />
                ) : (
                  //Insertar aqui despues los componentes del dashboard
                  <Principal/>
                )}
                <ToastContainer position="top-right" autoClose={2000} theme="dark" transition={Slide} />
              </>

    </div>
  );
}
export default App;
