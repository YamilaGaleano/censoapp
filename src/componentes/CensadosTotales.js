import { useSelector } from "react-redux"
import { CensosMontevideo } from "./CensosMontevideo"
import CensosRestoPais from "./CensosRestoPais"
import PersonasCensadas from "./PersonasCensadas"
import { useEffect, useState } from "react"

const CensadosTotales = () => {

  const censos =useSelector(state=> state.personas);
  const depto = useSelector(state=> state.departamentos)
  const [totalCensos, setTotalCensos] = useState(0);
  const [censosMVD, setCensosMVD] = useState(0);
  const [censosRestoPais, setCensosRestoPais] = useState(0);
  
  useEffect(()=>{
    setTotalCensos( censos.personas.length);
    setCensosMVD(censos.personas.filter(c => c.departamento ==='3218').length);
    setCensosRestoPais((totalCensos)-(censosMVD));

  },[censos])

  console.log("dep", depto)
  console.log("censos", censos)
  console.log("tot", censos.personas.length)
  console.log("totc", totalCensos)
  
  return (
    <div className="d-flex  mb-5 censadosTotales ">
      <PersonasCensadas totalCensos={totalCensos}/>
      <CensosMontevideo censosMVD={censosMVD}/>
      <CensosRestoPais censosRestoPais={censosRestoPais}/>
    </div>
  )
}

export default CensadosTotales