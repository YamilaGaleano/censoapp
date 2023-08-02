import PersonasContenedor from "./PersonasContenedor"
import CensadosAnalisisContenedor from "./CensadosAnalisisContenedor"

const MainContenedor = () => {
  return (
    <div className="container-fluid ">
      <div className="row dashboard">
        <PersonasContenedor />
        <CensadosAnalisisContenedor/>
      </div>
    </div>
  )
}

export default MainContenedor