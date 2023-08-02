import Analisis from './AnalisisPersonas'
import AnalisisTiempoRestante from './AnalisisTiempoRestante'

const AnalisisContenedor = () => {
    return (
        <div className="container analisis">
            <h5 className="text-center mb-4">Análisis</h5>
            <Analisis />
            <AnalisisTiempoRestante />
        </div>
    )
}

export default AnalisisContenedor