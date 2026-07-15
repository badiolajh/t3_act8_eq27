import { Link } from "react-router-dom";

function SlideBar({ onLogout }) {
  return (
    <nav className="slideBar">
          <ul className="textSlideTop">
              <li><Link to="/dashboard">Dashboard</Link></li>
          </ul>
          <ul className="textSlideMedio">
            <li><Link to="/usuarios">Usuarios</Link></li>
            <li><Link to="/productos">Productos</Link></li>
            <li><Link to="/ventas">Ventas</Link></li>
            <li><Link to="/reportes">Reportes</Link></li>
          </ul>
          <ul className="textSlideDown">
                  <li><Link to="/configuracion">Configuración</Link></li>
                  <li>
                    <button className="btn-logout" onClick={onLogout}>
                      Cerrar sesión
                    </button>
                  </li>
                </ul>
        </nav>
  )
}
export default SlideBar;
