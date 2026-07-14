import { useState, useEffect} from "react";

function Usuarios_Frame({ user }) {
  const [usuarios, setUsuarios] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const [registrosPorPagina, setRegistrosPorPagina] = useState(7);
  const [busqueda, setBusqueda] = useState("");
  const [filtroRol, setFiltroRol] = useState("Todos");

  useEffect(() => {
    fetch("https://dummyjson.com/users?limit=30")
      .then((res) => res.json())
      .then((data) => setUsuarios(data.users))
      .catch((error) => console.error("Error:", error));
  }, []);

  // 1. Filtrado (se ejecuta siempre que cambie busqueda, filtroRol o usuarios)
  const usuariosFiltrados = usuarios.filter((u) => {
    const coincideBusqueda =
      u.firstName.toLowerCase().includes(busqueda.toLowerCase()) ||
      u.email.toLowerCase().includes(busqueda.toLowerCase());

    const coincideRol =
      filtroRol === "Todos" || (u.role || "user") === filtroRol.toLowerCase();

    return coincideBusqueda && coincideRol;
  });

  // 2. Paginación (calculada sobre los resultados ya filtrados)
  const indiceUltimo = paginaActual * registrosPorPagina;
  const indicePrimero = indiceUltimo - registrosPorPagina;
  const usuariosPagina = usuariosFiltrados.slice(indicePrimero, indiceUltimo);
  const totalPaginas = Math.ceil(usuariosFiltrados.length / registrosPorPagina) || 1;
  return (
    <div className="contenedor-Opciones">
          <h1 className="Bienvenida">Bienvenid@ <span>{user ? user.username : "Usuario"}</span></h1>

          <div className="barra-controles">
            <label className="Buscar">
              Buscar
              <input
                type="text"
                placeholder="Escribe aquí..."
                value={busqueda}
                onChange={(e) => {
                  setBusqueda(e.target.value);
                  setPaginaActual(1); // Resetear a página 1 al buscar
                }}
              />
            </label>

            <select
              className="select-estado"
              value={filtroRol}
              onChange={(e) => {
                setFiltroRol(e.target.value);
                setPaginaActual(1);
              }}
            >
              <option value="Todos">Todos</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
              <option value="moderator">Moderator</option>
            </select>

            <button className="Boton-Verde">Agregar Usuario</button>
          </div>

          {/* Tarjeta 1: Encabezado */}
          <div className="tarjeta-cabecera">
            <table className="Tabla-Header">
              <thead>
                <tr>
                  <th>Nombre</th><th>Correo</th><th>Rol</th><th className="acciones">Acciones</th>
                </tr>
              </thead>
            </table>
          </div>

          <div className="tarjeta-cuerpo">
            <table className="Tabla-Datos">
                  <tbody>
                    {/* IMPORTANTE: Debes mapear 'usuariosPagina', no 'usuarios' */}
                    {usuariosPagina.map((u) => (
                      <tr key={u.id}>
                        <td>{u.firstName} {u.lastName}</td>
                        <td>{u.email}</td>
                        <td>{u.role || "user"}</td>
                        <td className="acciones">
                          <button className="btn-editar">Editar</button>
                          <button className="btn-eliminar">Eliminar</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                    <div className="pie-tabla">
                              <div className="tabla-paginas">
                                <button disabled={paginaActual === 1} onClick={() => setPaginaActual(p => p - 1)}>&lt;</button>
                                <span> Pág {paginaActual} de {totalPaginas} </span>
                                <button disabled={paginaActual === totalPaginas} onClick={() => setPaginaActual(p => p + 1)}>&gt;</button>
                              </div>

                              <label>Mostrar:
                                <select
                                  value={registrosPorPagina}
                                  onChange={(e) => {
                                    setRegistrosPorPagina(Number(e.target.value));
                                    setPaginaActual(1); // Volvemos a la página 1 al cambiar registros
                                  }}
                                >
                                  <option value={5}>5</option>
                                  <option value={7}>7</option>
                                  <option value={10}>10</option>
                                </select> Registros
                              </label>
                            </div>
          </div>
        </div>
  )
}

export default Usuarios_Frame;
