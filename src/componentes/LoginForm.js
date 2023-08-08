import {useRef, useState } from "react";
const LoginForm = ({Login}) => {
  const user = useRef(null);
  const pass = useRef(null);
  const [errorUser, setErrorUser] = useState(true)
  
  const cambioInput = () => {
    if (user.current && pass.current) {
      setErrorUser(user.current.value === '' || pass.current.value === '');
    }
  }
  const ingresar=(e)=>{
    if(!errorUser){
      e.preventDefault();
      const datos={usuario:user.current.value, password:pass.current.value}
      Login(datos)
    }
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
      </div>
    </form>
  )
}
export default LoginForm