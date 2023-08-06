import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Personas por ocupacion',
        },
    }, scales: {
        x: {
            ticks: {
                font: {
                    size: 9.5,
                },
            },
        },
    }
};


const AnalisisGraficosOcupacion = ({ censos }) => {
    const ocupacionesList = useSelector(state => state.ocupaciones.ocupaciones);
    const [censoPorOcupacion, setCensoPorOcupacion] = useState({});

    const calcularSumaCensosPorOcupacion = () => {
        const sumaCensosPorOcupacion = [];
        ocupacionesList.forEach(ocupacion => {
            const censosFiltrados = censos.filter(censo => censo.ocupacion === ocupacion.id);
            const sumaCensos = censosFiltrados.length;
            sumaCensosPorOcupacion.push(sumaCensos);
        });
        setCensoPorOcupacion(sumaCensosPorOcupacion);
    };

    useEffect(() => {
        calcularSumaCensosPorOcupacion();
    }, [ocupacionesList, censos]);

    return (
        <div className="card mx-2 flex-fill">
            <div className="card-body">
                <Bar options={options} data={{
                    labels: ocupacionesList.map(ocupacion => ocupacion.ocupacion),
                    datasets: [
                        {
                            label: 'Personas',
                            data: censoPorOcupacion,
                            backgroundColor: 'rgba(255, 99, 132, 0.5)',
                        },
                    ],
                }} />

            </div>
            <div className="card-footer">Personas por ocupacion</div>
        </div>
    )
}

export default AnalisisGraficosOcupacion