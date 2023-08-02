import React from 'react'

const AnalisisTiempoRestante = () => {
  return (
      <div className="row mx-2 align-items-center justify-content-around mt-5 analisis-bottomSection">
          <div className="card col-4 first ">
              <div className="card-body">
                  <h6 className="card-title">Porcentaje</h6>
              </div>
          </div>
          <div className="card col-4 second ">
              <div className="card-body">
                  <h6 className="card-title">Tiempo restante</h6>
              </div>
          </div>
          <div className="card col-12 mt-5 mapa">
              <div className="card-body">
              </div>
              <div className="card-footer">Mapa</div>
          </div>
      </div>
  )
}

export default AnalisisTiempoRestante