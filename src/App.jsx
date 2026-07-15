
import { useState } from 'react'
import LoginPage from './pages/LoginPage'
import {ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css'
import Principal from './Paginas/Principal/Principal';

import './Componentes/Layout/SlideBar/SlideBar.css'
import './Componentes/Layout/NavBar/NavBar.css'
import './Componentes/Layout/Usuarios-Frame/Usuarios_F.css'


  function App() {
    const [user, setUser] = useState(null)

    const handleLogout = () => {
        setUser(null);
      };

    return (

    <div className="app-layout">
        <>
          <ToastContainer position="top-right" autoClose={2000} theme="dark" />

          {!user ? (
            <LoginPage onLogin={setUser} />
          ) : (
            <Principal user={user} onLogout={handleLogout} />
          )}

        </>

      </div>

    );
}
export default App;
