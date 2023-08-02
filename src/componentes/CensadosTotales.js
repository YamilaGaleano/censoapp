
const CensadosTotales = () => {
  return (
    <div className="d-flex  mb-5 censadosTotales ">
      <div className="card mx-2 flex-fill first">
        <div className="card-body">
          <h5 className="card-title">Personas censadas</h5>
          <p className="card-text">100</p>
        </div>
      </div>
      <div className="card mx-2 flex-fill second">
        <div className="card-body">
          <h5 className="card-title">Personas en Montevideo</h5>
          <p className="card-text">60</p>
        </div>
      </div>
      <div className="card mx-2 flex-fill third">
        <div className="card-body">
          <h5 className="card-title">Resto del Pais</h5>
          <p className="card-text">40</p>
        </div>
      </div>
    </div>
  )
}

export default CensadosTotales