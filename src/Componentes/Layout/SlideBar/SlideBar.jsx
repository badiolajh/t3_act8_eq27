function SlideBar() {
  return (
    <ul className="slideBar">

      <ul className="textSlideTop">
        <li><a href="Dashboard">Dashboard</a></li>
      </ul>

      <ul className="textSlideMedio">
        <li><a href="Usuarios">Usuarios</a></li>
        <li><a href="Productos">Productos</a></li>
        <li><a href="Ventas">Ventas</a></li>
        <li><a href="Reportes">Reportes</a></li>
      </ul>

      <ul className="textSlideDown">
        <li><a href="Configuracion">Configuracion</a></li>
        <li><a href="Cerrar session">Cerrer session</a></li>
      </ul>

    </ul>
  )
}
export default SlideBar;
