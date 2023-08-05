import AnalisisGraficosTop from './AnalisisGraficosTop'
import AnalisisBottomSection from './AnalisisBottomSection'

const AnalisisContenedor = () => {
    return (
        <div className="container analisis">
            <h5 className="text-center mb-4">Análisis</h5>
            <AnalisisGraficosTop />
            <AnalisisBottomSection />
        </div>
    )
}

export default AnalisisContenedor