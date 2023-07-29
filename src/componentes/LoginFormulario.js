import React from 'react'

import { useRef, useState } from "react"

const Login = () => {
  const user = useRef(null);
  const pass = useRef(null);
  const [errorUser, setErrorUser] = useState(false)
  
  const validar=()=>{
    const usuario={
      userCampo : user.current.value,
      passCampo : pass.current.value
    }

    //mejorar esta validacion
    if (usuario.userCampo !== "" && usuario.passCampo !== "") {
      return usuario
    }
    else{
      setErrorUser(true);  
      return null;  
    }
  }
  
  const ingresar=(event)=>{
   event.preventDefault();
   const usu= validar();
   if(usu!=null){
  fetch(`https://censo.develotion.com/login.php`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(usu)
  }).then(r => r.json())
  .then(data => {
    if (data.codigo == 200) {
      localStorage.setItem("apikey", data.apiKey);
      localStorage.setItem("id", data.id);
    //ACA CREO QUE REDIRECCIONAR A ALGUN LADO
    console.log("Login exitoso");
    } else {
      console.log(data.mensaje);
    } 
  })
}

}
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center fondo" style={{ minHeight: "100vh" }}>
    <div className="border p-4 rounded-3 text-center login">
    <h1 className="mb-5">Login</h1>
    <form className="row g-3 align-items-center">
      <div className="col-12">
        <label htmlFor="usuLogin" className="form-label">Usuario</label>
        <input type="text" className="form-control" id="usuLogin" placeholder="" ref={user}/>
      </div>
      <div className="col-12">
        <label htmlFor="passLogin" className="form-label">Password</label>
        <input type="password" className="form-control" id="passLogin" placeholder="" ref={pass} />
      </div>
      <div className="col-12">
        <button type="submit" className="btn btn-primary" onClick={ingresar}>Iniciar sesión </button>
        
      </div>
    </form>
    {errorUser && <p>Usuario y/o contraseña incorrectos</p>}
  </div>
  
   </div>
  )
}

export default Login