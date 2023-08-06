const PersonasCensadas = ({totalCensos}) => {
  return (
    <div className="card mx-2 flex-fill first">
    <div className="card-body text-center">
      <h5 className="card-title">Personas censadas</h5>
      <p className="card-text">{totalCensos}</p>
    </div>
  </div>
  )
}

export default PersonasCensadas