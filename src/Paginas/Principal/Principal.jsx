// Corrected imports
import '../../Componentes/Layout/SlideBar/SlideBar.css';
import '../../Componentes/Layout/NavBar/NavBar.css';
import '../../Componentes/Layout/Usuarios-Frame/Usuarios_F.css';
import './Principal.css';

import SlideBar from '../../Componentes/Layout/SlideBar/SlideBar.jsx';
import NavBar from '../../Componentes/Layout/NavBar/NavBar.jsx';
import Usuarios_F from '../../Componentes/Layout/Usuarios-Frame/Usuarios_F.jsx';

import { Routes, Route, Navigate } from "react-router-dom";

function Principal({ user, onLogout }) {
  if (!user) return <Navigate to="/" replace />;

  return (
    <div className="app-layout">
          <NavBar user={user} />

          <div className="content-area">
            <SlideBar onLogout={onLogout} />

            <main className="main-content">
              <Routes>
                {/* La ruta base debe apuntar a usuarios explícitamente */}
                <Route index element={<Navigate to="/usuarios" replace />} />

                <Route path="/dashboard" element={<h1 className='en-proceso'>Bienvenido al Dashboard</h1>} />
                <Route path="/usuarios" element={<Usuarios_F user={user} />} />
                <Route path="/productos" element={<div className="en-proceso"><h1>Productos: En proceso...</h1></div>} />
                <Route path="/ventas" element={<div className="en-proceso"><h1>Ventas: En proceso...</h1></div>} />
                <Route path="/reportes" element={<div className="en-proceso"><h1>Reportes: En proceso...</h1></div>} />
                <Route path="/configuracion" element={<div className="en-proceso"><h1>Configuración: En proceso...</h1></div>} />

                {/* Ruta para manejar errores o rutas inexistentes */}
                <Route path="*" element={<Navigate to="/usuarios" replace />} />
              </Routes>
            </main>
          </div>
        </div>
  );
}
export default Principal;
