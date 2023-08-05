import LogoPrincipal from "./LogoPrincipal";
import RegistroContenedor from "./RegistroContenedor";

const Registro = () => {
  return (
  <div className="container-fluid d-flex flex-column justify-content-center align-items-center fondo" style={{ minHeight: "100vh" }}>
      <LogoPrincipal/>
      <RegistroContenedor/>

    </div>

  )
}

export default Registro