import React from 'react'

import { useRef, useState } from "react"
import LoginContenedor from './LoginContenedor'
import LogoPrincipal from './LogoPrincipal'

const Login = () => {
  // const user = useRef(null);
  // const pass = useRef(null);
  // const [errorUser, setErrorUser] = useState(false)
  // const user = useRef(null);
  // const pass = useRef(null);
  // const [errorUser, setErrorUser] = useState(false)

  // const validar = () => {
  //   const usuario = {
  //     userCampo: user.current.value,
  //     passCampo: pass.current.value
  //   }
  // const validar = () => {
  //   const usuario = {
  //     userCampo: user.current.value,
  //     passCampo: pass.current.value
  //   }

  //   //mejorar esta validacion
  //   if (usuario.userCampo !== "" && usuario.passCampo !== "") {
  //     return usuario
  //   }
  //   else {
  //     setErrorUser(true);
  //     return null;
  //   }
  // }
  //   //mejorar esta validacion
  //   if (usuario.userCampo !== "" && usuario.passCampo !== "") {
  //     return usuario
  //   }
  //   else {
  //     setErrorUser(true);
  //     return null;
  //   }
  // }

  // const ingresar = (event) => {
  //   event.preventDefault();
  //   const usu = validar();
  //   if (usu != null) {
  //     fetch(`https://censo.develotion.com/login.php`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(usu)
  //     }).then(r => r.json())
  //       .then(data => {
  //         if (data.codigo == 200) {
  //           localStorage.setItem("apikey", data.apiKey);
  //           localStorage.setItem("id", data.id);
  //           //ACA CREO QUE REDIRECCIONAR A ALGUN LADO
  //           console.log("Login exitoso");
  //         } else {
  //           console.log(data.mensaje);
  //         }
  //       })
  //   }
  // const ingresar = (event) => {
  //   event.preventDefault();
  //   const usu = validar();
  //   if (usu != null) {
  //     fetch(`https://censo.develotion.com/login.php`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(usu)
  //     }).then(r => r.json())
  //       .then(data => {
  //         if (data.codigo == 200) {
  //           localStorage.setItem("apikey", data.apiKey);
  //           localStorage.setItem("id", data.id);
  //           //ACA CREO QUE REDIRECCIONAR A ALGUN LADO
  //           console.log("Login exitoso");
  //         } else {
  //           console.log(data.mensaje);
  //         }
  //       })
  //   }

  // }
  // }
  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center fondo" style={{ minHeight: "100vh" }}>
      <LogoPrincipal/>
      <LoginContenedor/>
    </div>

  )
}

export default Login