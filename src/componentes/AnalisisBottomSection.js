import Mapa from "./Mapa"
import Porcentaje from "./Porcentaje"
import TiempoRestante from "./TiempoRestante"

const AnalisisBottomSection = () => {
    return (
        <div className="row mx-2 align-items-center justify-content-around mt-5 analisis-bottomSection">
            <Porcentaje />
            <TiempoRestante/>
            <Mapa/>
        </div>
    )
}

export default AnalisisBottomSection