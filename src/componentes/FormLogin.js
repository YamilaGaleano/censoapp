

const FormLogin = () => {
  return (
    <form className="row g-3 align-items-center mb-5">
    <div className="col-12">
      <label htmlFor="usuLogin" className="form-label">Usuario</label>
      <input type="text" className="form-control" id="usuLogin" placeholder=""  />
    </div>
    <div className="col-12">
      <label htmlFor="passLogin" className="form-label">Password</label>
      <input type="password" className="form-control" id="passLogin" placeholder=""  />
    </div>
    <div className="col-12">
      <button type="submit" className="btn btn-primary">Iniciar sesión</button>
    </div>
  </form>
  )
}

export default FormLogin