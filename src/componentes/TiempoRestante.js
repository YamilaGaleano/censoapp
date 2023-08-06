import { useEffect, useState } from "react"

const TiempoRestante = () => {

    const [dias, setDias] = useState(0);
    const [horas, setHoras] = useState(0);
    const [minutos, setMinutos] = useState(0);
    const [segundos, setSegundos] = useState(0);
    useEffect(() => {
        const diaFinal = new Date("2023-08-31 00:00:01");
        const intervalo = setInterval(() => {
            const fechaActual = new Date();
            const differencia = diaFinal.getTime() - fechaActual.getTime();

            const d = Math.floor(differencia / (1000 * 60 * 60 * 24));
            setDias(d);

            const h = Math.floor((differencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            setHoras(h);

            const m = Math.floor(
                (differencia % (1000 * 60 * 60)) / (1000 * 60)
            );
            setMinutos(m);

            const s = Math.floor((differencia % (1000 * 60)) / 1000);
            setSegundos(s);
        }, 1000)
        return () => clearInterval(intervalo);
    }, [])
    console.log("dias", dias)
    return (
        <div className="card col-4 second ">
            <div className="card-body">
                <h6 className="card-title">Tiempo restante</h6>
                <div className="row text-center reloj">
                    <div className="col-3 reloj-item d-flex flex-column">
                        <span className="reloj-valor">{dias}</span>
                        <span className="reloj-nombre">Días</span>
                    </div>
                    <div className="col-3 reloj-item d-flex flex-column">
                        <span className="reloj-valor">{horas}</span>
                        <span className="reloj-nombre">Hs</span>
                    </div>
                    <div className="col-3 reloj-item d-flex flex-column">
                        <span className="reloj-valor">{minutos}</span>
                        <span className="reloj-nombre">Min</span>
                    </div>
                    <div className="col-3 reloj-item d-flex flex-column">
                        <span className="reloj-valor">{segundos}</span>
                        <span className="reloj-nombre">Seg</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TiempoRestante