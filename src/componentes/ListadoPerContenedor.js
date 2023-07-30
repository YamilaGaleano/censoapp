import ListarPersonas from "./ListarPersonasFiltro"

const ListadoPerContenedor = () => {
    return (
        <div class="container">
        <div class="row justify-content-center mt-5">
          <div class="col-6">
            <h1 class="text-center">Personas</h1>   
            <ListarPersonas />
        </div>
        </div>
        </div>
    )
}

export default ListadoPerContenedor