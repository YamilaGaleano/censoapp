import { useDispatch} from 'react-redux';
import { eliminarPersona } from '../features/personaSlice';
const ListarPersonas = ({ personasLista, ocupacionSel }) => {
  const dispatch = useDispatch();
  const eliminarPer=(id)=>{
    fetch(`https://censo.develotion.com/personas.php?idCenso=`+id, {
      method: 'Delete',
      headers: {
        'Content-Type': 'application/json',
        'apiKey': localStorage.getItem("apikey"),
        'iduser': localStorage.getItem("id")
      },
    }).then(r => r.json()).then(data => {
      if (data.codigo === 200) {
          dispatch(eliminarPersona(id));
      } 
    })
  }
  return (
    <div className="card-body overflow-auto">
      {personasLista.filter(persona => persona.ocupacion === ocupacionSel).length === 0 ? (
        <p>No se encontraron censos con la ocupación seleccionada.</p>
      ) : (
        <ul className="list-group">
          {personasLista.filter(persona => persona.ocupacion === ocupacionSel).map(per => (
            <li className="list-group-item" key={per.id}>
              <div className="d-flex justify-content-between align-items-center">
                <span>{per.nombre}</span>
                <button
                  className="btn btn-danger"
                  onClick={() => eliminarPer(per.id)}
                >
                  <i className="bi bi-trash3"></i>
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
  
}

export default ListarPersonas