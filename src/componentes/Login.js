import LoginContenedor from './LoginContenedor'
import LogoPrincipal from './LogoPrincipal'
const Login = () => {
  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center fondo" style={{ minHeight: "100vh" }}>
      <LogoPrincipal/>
      <LoginContenedor/>
    </div>
  )
}
export default Login