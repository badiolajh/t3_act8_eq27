// Corrected imports
import '../../Componentes/Layout/SlideBar/SlideBar.css';
import '../../Componentes/Layout/NavBar/NavBar.css';
import '../../Componentes/Layout/Usuarios-Frame/Usuarios_F.css';
import './Principal.css'; // Since this is in the same folder as Principal.jsx, use ./

import SlideBar from '../../Componentes/Layout/SlideBar/SlideBar.jsx';
import NavBar from '../../Componentes/Layout/NavBar/NavBar.jsx';
import Usuarios_F from '../../Componentes/Layout/Usuarios-Frame/Usuarios_F.jsx';


  function Principal() {
  return (
    <div className="app-layout">

          <NavBar />

          <div className="content-area">
            <SlideBar/>

            <main className="main-content">
              <Usuarios_F />
        </main>
      </div>


        </div>
  );
}
export default Principal;
