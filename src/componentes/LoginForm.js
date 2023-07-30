import { useEffect, useRef, useState } from "react";


const LoginForm = () => {
  const user = useRef(null);
  const pass = useRef(null);
  const [errorUser, setErrorUser] = useState(true)
  const [errorLogin, setErrorLogin] = useState(false)
  // useEffect(() => {
  //   if (user.current && pass.current) {
  //     setErrorUser(user.current.value === '' || pass.current.value === '');
  //  }
  // }, [user.current.value]);
  const cambioInput = () => {
    if (user.current && pass.current) {
      setErrorUser(user.current.value === '' || pass.current.value === '');
    }
  }
  const ingresar = (e) => {
    e.preventDefault();
    const usu = { usuario: user.current.value, password: pass.current.value }
    fetch(`https://censo.develotion.com/login.php`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(usu)
    }).then(r => r.json()).then(data => {
      if (data.codigo == 200) {
        localStorage.setItem("apikey", data.apiKey);
        localStorage.setItem("id", data.id);
        //ACA CREO QUE REDIRECCIONAR A ALGUN LADO
        console.log("Login exitoso");
      } else {
        console.log(data.mensaje);
        setErrorLogin(true);
      }
    })

  }

  return (

    <form className="row g-3 align-items-center mb-5">
      <div className="col-12">
        <label htmlFor="usuLogin" className="form-label">Usuario</label>
        <input type="text" className="form-control" id="usuLogin" placeholder="" ref={user} onChange={cambioInput} />
      </div>
      <div className="col-12">
        <label htmlFor="passLogin" className="form-label">Password</label>
        <input type="password" className="form-control" id="passLogin" placeholder="" ref={pass} onChange={cambioInput} />
      </div>
      <div className="col-12">
        <button type="submit" className="btn btn-primary" onClick={ingresar} disabled={errorUser}>Iniciar sesión</button>
        {errorLogin && <p className="mb-5 mt-5">Usuario y/o contraseña incorrectos</p>}
      </div>
    </form>


  )
}

export default LoginForm