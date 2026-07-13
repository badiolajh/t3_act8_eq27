import { useState } from 'react'
import LoginPage from './pages/LoginPage'
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css'

function App() {
  const [user, setUser] = useState(null)

  return (
    <>
      {!user ? (
        <LoginPage onLogin={setUser} />
      ) : (
        <h1>Bienvenido al Dashboard</h1>
        //Insertar aqui despues los componentes del dashboard
      )}
      <ToastContainer position="top-right" autoClose={2000} theme="dark" transition={Slide} />
    </>
  )
}

export default App
