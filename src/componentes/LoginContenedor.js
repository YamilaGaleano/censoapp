import LoginForm from "./LoginForm"
import {useNavigate } from "react-router-dom";
import {useState } from "react";
const LoginContenedor = () => {
  const navigate = useNavigate();
  const [errorLogin, setErrorLogin] = useState(false)
  const Login = (datos) => { 
    fetch(`https://censo.develotion.com/login.php`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(datos)
    }).then(r => r.json()).then(data => {
      if (data.codigo == 200) {
        localStorage.setItem("apikey", data.apiKey);
        localStorage.setItem("id", data.id);
        localStorage.setItem("user", datos.usuario);
        navigate("/Dashboard")
      } else {
        setErrorLogin(true);
      }
    })
  }
  return (
    <div className="border p-4 rounded-3 text-center login-registro">
    <h1 className="mb-5">Login</h1>
    <LoginForm Login={Login}/>
    {errorLogin && <p >Usuario y/o contraseña incorrectos</p>}
    <a href="/registro">Registrarse</a>

  </div>
  )
}
export default LoginContenedor