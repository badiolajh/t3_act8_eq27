
import './Componentes/Layout/SlideBar/SlideBar.css'
import './Componentes/Layout/NavBar/NavBar.css'
import './Componentes/Layout/Usuarios-Frame/Usuarios_F.css'
import './index.css'
import SlideBar from './Componentes/Layout/SlideBar/SlideBar.jsx'
import NavBar from './Componentes/Layout/NavBar/NavBar.jsx'
import Usuarios_F from './Componentes/Layout/Usuarios-Frame/Usuarios_F.jsx'


function App() {
  return (
    <div className="app-layout">
          <NavBar />

          <div className="content-area">
            <SlideBar />

            <main className="main-content">
              <Usuarios_F />
            </main>
          </div>
        </div>
  );
}
export default App;
