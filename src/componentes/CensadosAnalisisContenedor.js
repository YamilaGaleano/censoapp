import AnalisisContenedor from "./AnalisisContenedor"
import CensadosTotContenedor from "./CensadosTotContenedor"


const CensadosAnalisisContenedor = () => {
  return (
      <div className="col-md-8">
          <CensadosTotContenedor />
          <AnalisisContenedor />
      </div>
  )
}

export default CensadosAnalisisContenedor