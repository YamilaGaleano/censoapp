const ArgegarPersonaForm = () => {
    return (
        <form className="row g-3">
            <div className="col-md-6">
                <label htmlFor="nombPersona" class="form-label">Nombre</label>
                <input type="email" className="form-control" id="nombPersona" />
            </div>
            <div className="col-md-6">
                <label htmlFor="fechaNacPersona">Fecha de Nacimiento:</label>
                <input type="date" className="form-control" id="fechaNacPersona" name="fechaNacimiento" />
            </div>
            <div class="col-md-6">
                <label htmlFor="deptoPersona" className="form-label">Departamento</label>
                <select id="deptoPersona" className="form-select">
                    <option selected>Choose...</option>
                    <option>...</option>
                </select>
            </div>
            <div class="col-md-6">
                <label htmlFor="ciudPersona" className="form-label">Ciudad</label>
                <select id="ciudPersona" className="form-select">
                    <option selected>Choose...</option>
                    <option>...</option>
                </select>
            </div>

            <div className="col-md-12">
                <label htmlFor="ocupacionPersona" className="form-label">Ocupacion</label>
                <select id="ocupacionPersona" className="form-select">
                    <option selected>Choose...</option>
                    <option>...</option>
                </select>
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-primary">Agregar</button>
            </div>
        </form>
    )
}

export default ArgegarPersonaForm