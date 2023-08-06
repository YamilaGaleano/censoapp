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
            text: 'Personas por Departamento',
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

const AnalisisGraficoDepartamentos = ({censos}) => {
    const departamentosList = useSelector(state => state.departamentos.departamentos);
    const [censoPorDpto, setCensoPorDpto] = useState({});

    const calcularSumaCensosPorDpto = () => {
        const sumaCensosPorDpto = [];
        departamentosList.forEach(dpto => {
            const censosFiltrados = censos.filter(censo => censo.departamento === dpto.id);
            const sumaCensos = censosFiltrados.length;
            sumaCensosPorDpto.push(sumaCensos);
        });
        setCensoPorDpto(sumaCensosPorDpto);
    };

    useEffect(() => {
        calcularSumaCensosPorDpto();
    }, [departamentosList, censos]);
    return (
        <div className="card mx-2 flex-fill">
            <div className="card-body">
                <Bar options={options} data={{
                    labels: departamentosList.map(dpto => dpto.nombre),
                    datasets: [
                        {
                            label: 'Personas',
                            data: censoPorDpto,
                            backgroundColor: 'rgba(99, 148, 255, 0.5)',
                        },
                    ],
                }} />

            </div>
            {/* <div className="card-footer">Personas por departamento</div> */}
        </div>
    )
}

export default AnalisisGraficoDepartamentos