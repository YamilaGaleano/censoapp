import AgregarPerContenedor from "./AgregarPerContenedor"
import CensadosTotContenedor from "./CensadosTotContenedor"
import ListadoPerContenedor from "./ListadoPerContenedor"
import AnalisisContenedor from "./AnalisisContenedor"

const MainContenedor = () => {
  return (
    <div className=" row main">
      <AgregarPerContenedor/>
      <ListadoPerContenedor/>
      <CensadosTotContenedor/>
      <AnalisisContenedor/>

    </div>
  )
}

export default MainContenedor