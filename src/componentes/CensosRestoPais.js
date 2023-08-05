const CensosRestoPais = ({censosRestoPais}) => {
  return (
    <div className="card mx-2 flex-fill third">
      <div className="card-body">
        <h5 className="card-title">Resto del Pais</h5>
        <p className="card-text">{censosRestoPais}</p>
      </div>
    </div>
  )
}

export default CensosRestoPais