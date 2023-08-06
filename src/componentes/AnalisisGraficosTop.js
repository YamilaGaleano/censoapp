import { useSelector } from "react-redux";
import { useEffect, useState } from "react"
import AnalisisGraficosOcupacion from "./AnalisisGraficosOcupacion";

const AnalisisGraficosTop = () => {
  const censos = useSelector(state => state.personas.personasUsuario);


  return (
    <div className="d-flex analisis-topSection">
      <div className="card mx-2 flex-fill">
        <div className="card-body">

        </div>
        <div className="card-footer">Personas por departamento</div>
      </div>
      <AnalisisGraficosOcupacion censos={censos} />
    </div>
  )
}

export default AnalisisGraficosTop;