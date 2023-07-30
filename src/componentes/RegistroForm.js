
const RegistroForm = () => {
    return (
        <form className="row g-3 align-items-center mb-5">
            <div className="col-12">
                <label htmlFor="usuRegistro" className="form-label">Usuario</label>
                <input type="text" className="form-control" id="usuRegistro" placeholder="" />
            </div>
            <div className="col-12">
                <label htmlFor="passRegistro" className="form-label">Password</label>
                <input type="password" className="form-control" id="passRegistro" placeholder="" />
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-primary" >Registrarse</button>
            </div>
        </form>
    )
}

export default RegistroForm