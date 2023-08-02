const ArgegarPersonaForm = () => {
    return (
        <form className="row">
            <div className="form-group col-12">
                <label htmlFor="nombPersona" className="form-label">Nombre</label>
                <input type="email" className="form-control" id="nombPersona" />
            </div>
            <div className="form-group col-6">
                <label htmlFor="deptoPersona">Departamento</label>
                <select id="deptoPersona" className="form-control">
                    <option selected>Choose...</option>
                    <option>...</option>
                </select>
            </div>
            <div className="form-group col-6">
                <label htmlFor="ciudPersona">Ciudad</label>
                <select id="ciudPersona" className="form-control">
                    <option selected>Choose...</option>
                    <option>...</option>
                </select>
            </div>
            <div className="form-group col-6">
                <label htmlFor="fechaNacPersona">Fecha de Nacimiento:</label>
                <input type="date" class="form-control" id="fechaNacPersona" name="fechaNacimiento" />
            </div>
            <div className="form-group col-6">
                <label htmlFor="ocupacionPersona">Ocupacion</label>
                <select id="ocupacionPersona" className="form-control">
                    <option selected>Choose...</option>
                    <option>...</option>
                </select>
            </div>
            <div className="form-group text-center mt-4">
                <button type="submit" className="btn btn-primary">Agregar</button>
            </div>
        </form>
    )
}

export default ArgegarPersonaForm