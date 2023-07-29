import React from 'react'

const Registrarse = () => {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center fondo" style={{ minHeight: "100vh" }}>
    <div className="border p-4 rounded-3 text-center login">
    <h1 className="mb-5">Registro</h1>
    <form className="row g-3 align-items-center">
      <div className="col-12">
        <label htmlFor="usuLogin" className="form-label">Usuario</label>
        <input type="text" className="form-control" id="usuLogin" placeholder=""/>
      </div>
      <div className="col-12">
        <label htmlFor="passLogin" className="form-label">Password</label>
        <input type="password" className="form-control" id="passLogin" placeholder=""/>
      </div>
      <div className="col-12">
        <button type="submit" className="btn btn-primary">Registrarse</button>
      </div>
    </form>
    </div>
  </div>
  )
}

export default Registrarse