import ListarPersonas from "./ListarPersonas"
import ListarPersonasFiltro from "./ListarPersonasFiltro"

const ListadoPerContenedor = () => {
    return (
        <div className="card mt-5 listadoPersonas">
        <div className="card-body">        
        <h5 className="card-title">Personas</h5> 
            <ListarPersonasFiltro />
            <ListarPersonas/>
        </div>
        </div>
       
    )
}

export default ListadoPerContenedor