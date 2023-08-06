import { useSelector } from "react-redux";

import AnalisisGraficosOcupacion from "./AnalisisGraficosOcupacion";
import AnalisisGraficoDepartamentos from "./AnalisisGraficoDepartamentos";

const AnalisisGraficosTop = () => {
  const censos = useSelector(state => state.personas.personasUsuario);


  return (
    <div className="d-flex analisis-topSection">
      <AnalisisGraficoDepartamentos censos={censos}/>
      <AnalisisGraficosOcupacion censos={censos} />
    </div>
  )
}

export default AnalisisGraficosTop;