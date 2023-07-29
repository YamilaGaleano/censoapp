import React from 'react'

const Registrarse = () => {
  return (
  <div className="container-fluid d-flex flex-column justify-content-center align-items-center fondo" style={{ minHeight: "100vh" }}>
      <div className="row mb-5">
        <div className="col text-center">
          <h1>Censoapp</h1>
        </div>
      </div>
      <div className="border p-4 rounded-3 text-center login-registro">
        <h1 className="mb-5">Registraro</h1>
        <form className="row g-3 align-items-center mb-5">
          <div className="col-12">
            <label htmlFor="usuLogin" className="form-label">Usuario</label>
            <input type="text" className="form-control" id="usuLogin" placeholder="" />
          </div>
          <div className="col-12">
            <label htmlFor="passLogin" className="form-label">Password</label>
            <input type="password" className="form-control" id="passLogin" placeholder="" />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary" >Registrarse</button>
          </div>
        </form>
        <p className="mb-5 mt-5">Usuario y/o contraseña incorrectos</p>
        
        <a href="/">Registrarse</a>

      </div>
    </div>

  )
}

export default Registrarse