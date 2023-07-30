import RegistroForm from "./RegistroForm"

const RegistroContenedor = () => {
  return (
    <div className="border p-4 rounded-3 text-center login-registro">
    <h1 className="mb-5">Registraro</h1>
    <RegistroForm/>
    <p className="mb-5 mt-5">Usuario y/o contraseña incorrectos</p>
    
    <a href="/">Registrarse</a>

  </div>
  )
}

export default RegistroContenedor