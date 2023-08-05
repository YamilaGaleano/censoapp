import { useSelector } from "react-redux"
import { CensosMontevideo } from "./CensosMontevideo"
import CensosRestoPais from "./CensosRestoPais"
import PersonasCensadas from "./PersonasCensadas"
import { useEffect, useState } from "react"

const CensadosTotales = () => {

  const censos =useSelector(state=> state.personas)
  const [totalCensos, setTotalCensos] = useState(0);


  
  useEffect(()=>{
    setTotalCensos(censos.length);
  },[censos])

  console.log("censos", censos)
  console.log("tot", censos.personas.length)
  
  return (
    <div className="d-flex  mb-5 censadosTotales ">
      <PersonasCensadas totalCensos/>
      <CensosMontevideo/>
      <CensosRestoPais/>
    </div>
  )
}

export default CensadosTotales