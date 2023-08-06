import { useSelector} from "react-redux"
import { CensosMontevideo } from "./CensosMontevideo"
import CensosRestoPais from "./CensosRestoPais"
import PersonasCensadas from "./PersonasCensadas"
import { useEffect, useState } from "react"


const CensadosTotales = () => {
  const censos =useSelector(state=> state.personas.personasUsuario);
  const [totalCensos, setTotalCensos] = useState(0);
  const [censosMVD, setCensosMVD] = useState(0);
  const [censosRestoPais, setCensosRestoPais] = useState(0);
  

  //
  useEffect(()=>{
    setTotalCensos( censos.length);
    setCensosMVD(censos.filter(c => c.departamento ===3218).length);
    setCensosRestoPais((censos.length)-(censos.filter(c => c.departamento ===3218).length));

  },[censos])

  
  return (
    <div className="d-flex  mb-5 censadosTotales ">
      <PersonasCensadas totalCensos={totalCensos}/>
      <CensosMontevideo censosMVD={censosMVD}/>
      <CensosRestoPais censosRestoPais={censosRestoPais}/>
    </div>
  )
}

export default CensadosTotales