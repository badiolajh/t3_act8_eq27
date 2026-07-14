
function Usuarios_Frame(){
  return (
    <div className="contenedor-Opciones">
          <h1 className="Bienvenida">Bienvenido <span>Jonathan</span></h1>

          <div className="barra-controles">
            <label className="Buscar">
              Buscar <input type="text" placeholder="Escribe aquí..." />
            </label>
            <select className="select-estado">
              <option>Activo</option>
              <option>Inactivo</option>
            </select>
            <button className="Boton-Verde">Agregar Usuario</button>
          </div>

          {/* Tarjeta 1: Encabezado */}
          <div className="tarjeta-cabecera">
            <table className="Tabla-Header">
              <thead>
                <tr>
                  <th>Nombre</th><th>Correo</th><th>Estado</th><th className="acciones">Acciones</th>
                </tr>
              </thead>
            </table>
          </div>

          <div className="tarjeta-cuerpo">
            <table className="Tabla-Datos">
              <tbody>
                <tr>
                  <td>Juan Jose robles</td>
                  <td>Juan@gmail.com</td>
                  <td>Activa</td>
                  <td className="acciones">
                    <button className="btn-editar">Editar</button>
                    <button className="btn-eliminar">Eliminar</button>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="pie-tabla">
              <div className="tabla-paginas">
                <button>&lt;</button> <button>1</button> <button>10</button> <button>&gt;</button>
              </div>
              <label>Mostrar:
                <select><option>5</option><option>10</option></select> Registros
              </label>
            </div>
          </div>
        </div>
  )
}

export default Usuarios_Frame;
