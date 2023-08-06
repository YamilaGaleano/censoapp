const ListarPersonas = ({ personasLista, ocupacionSel }) => {
  return (
    <div className="card-body">
    <ul className="list-group">
        {personasLista.filter(persona=>persona.ocupacion===ocupacionSel).map(per => <li className="list-group-item">{per.nombre}</li>)}
    </ul>
</div>


  )
}

export default ListarPersonas