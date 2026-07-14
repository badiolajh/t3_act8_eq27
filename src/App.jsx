import { useState } from 'react'
import LoginPage from './pages/LoginPage'
import InicioPage from './pages/InicioPage';
import UsuarioForm from './components/UsuarioForm';
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css'

function App() {
  const [user, setUser] = useState(null)

  return (
    //Pagina de login
    <>
      {!user ? (
        <LoginPage onLogin={setUser} />
      ) : (
        //Insertar aqui despues los componentes del dashboard
        <InicioPage/>
      )}
      <ToastContainer position="top-right" autoClose={2000} theme="dark" transition={Slide} />
    </>

    //Prueba del componente UsuarioForm
    // <>
    //   <UsuarioForm/>
    // </>

  )
}

export default App
