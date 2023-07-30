const ArgegarPersonaForm = () => {
  return (
    <form class="row g-3">
    <div class="col-md-6">
      <label for="nombPersona" class="form-label">Nombre</label>
      <input type="email" class="form-control" id="nombPersona"/>
    </div>
    <div class="col-md-6">
      <label for="fechaNacPersona">Fecha de Nacimiento:</label>
      <input type="date" class="form-control" id="fechaNacPersona" name="fechaNacimiento"/>
    </div>
    <div class="col-md-6">
      <label for="deptoPersona" class="form-label">Departamento</label>
      <select id="deptoPersona" class="form-select">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div class="col-md-6">
      <label for="ciudPersona" class="form-label">Ciudad</label>
      <select id="ciudPersona" class="form-select">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>

    <div class="col-md-12">
      <label for="ocupacionPersona" class="form-label">Ocupacion</label>
      <select id="ocupacionPersona" class="form-select">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div class="col-12">
      <button type="submit" class="btn btn-primary">Agregar</button>
    </div>
  </form>
  )
}

export default ArgegarPersonaForm