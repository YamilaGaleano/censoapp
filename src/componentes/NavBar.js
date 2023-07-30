const NavBar = () => {
    return (
        <nav className="nav nav-pills nav-fill ">
        <a className="nav-link" href="#">Agregar una persona</a>
        <a className="nav-link" href="#">Listado de personas</a>
        <a className="nav-link" href="#">Censados totales</a>
        <a className="nav-link " aria-disabled="true">Análisis</a>
      </nav>
    )
}

export default NavBar