import LoginForm from "./LoginForm"

const LoginContenedor = () => {
  return (
    <div className="border p-4 rounded-3 text-center login-registro">
    <h1 className="mb-5">Login</h1>
    <LoginForm />
    {/* {errorUser &&
      <p className="mb-5 mt-5">Usuario y/o contraseña incorrectos</p>
    } */}
    <a href="/registro">Registrarse</a>

  </div>
  )
}

export default LoginContenedor