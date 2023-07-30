import ListarPersonas from "./ListarPersonas"

const ListarPersonasFiltro = () => {
  return (
    <div class="form-group">
    <label for="filtro">Ocupacion:</label>
    <select class="form-control" id="filtro">
      <option value="opcion1"> 1</option>
      <option value="opcion2"> 2</option>
      <option value="opcion3">3</option>
    </select>
    <ListarPersonas/>
  </div>
  )
}

export default ListarPersonasFiltro