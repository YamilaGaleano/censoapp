const PersonasCensadas = ({totalCensos}) => {
  console.log('llego', totalCensos)
  return (
    <div className="card mx-2 flex-fill first">
    <div className="card-body">
      <h5 className="card-title">Personas censadas</h5>
      <p className="card-text">{totalCensos}</p>
    </div>
  </div>
  )
}

export default PersonasCensadas