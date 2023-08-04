import { useRef } from "react"

const RegistroForm = ({altaRegistro}) => {
    const usu = useRef(null);
    const pass = useRef(null);
    
    const tomarDatos =(e)=>{
        e.preventDefault();
        const datos = {usuario: usu.current.value, password: pass.current.value};
        altaRegistro(datos);
    }

    return (
        <form className="row g-3 align-items-center mb-5">
            <div className="col-12">
                <label htmlFor="usuRegistro" className="form-label" >Usuario</label>
                <input type="text" className="form-control" id="usuRegistro" placeholder=""  ref={usu}/>
            </div>
            <div className="col-12">
                <label htmlFor="passRegistro" className="form-label" >Password</label>
                <input type="password" className="form-control" id="passRegistro" placeholder=""  ref={pass}/>
            </div>
            <div className="col-12">
                <input type="submit" className="btn btn-primary" onClick={tomarDatos} value="Registrarse"/>
            </div>
        </form>
    )
}

export default RegistroForm