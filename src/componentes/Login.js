import LoginContenedor from './LoginContenedor'
import LogoPrincipal from './LogoPrincipal'
import { useEffect } from 'react'
import {useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("id") != null && localStorage.getItem("apikey") != null) navigate("/Dashboard");
  }, [])
  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center fondo" style={{ minHeight: "100vh" }}>
      <LogoPrincipal/>
      <LoginContenedor/>
    </div>
  )
}
export default Login