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
    const [deptosConCensos, setdeptosConCensos] = useState([]);

    const calcularSumaCensosPorDpto = () => {
        const sumaCensosPorDpto = [];
        const deptosCensos =[];
        departamentosList.forEach(dpto => {
            const censosFiltrado = censos.filter(censo => censo.departamento === dpto.id);
            const sumaCensos = censosFiltrado.length;
            if(sumaCensos!==0){
                deptosCensos.push(dpto);
                sumaCensosPorDpto.push(sumaCensos);
            }
            
        });
        setCensoPorDpto(sumaCensosPorDpto);
        setdeptosConCensos(deptosCensos)

    };

    useEffect(() => {
        calcularSumaCensosPorDpto();
    }, [departamentosList, censos]);
    return (
        <div className="card mx-2 flex-fill">
            <div className="card-body">
                <Bar options={options} data={{
                    labels: deptosConCensos.map(dpto => dpto.nombre),
                    datasets: [
                        {
                            label: 'Personas',
                            data: censoPorDpto,
                            backgroundColor: 'rgba(99, 148, 255, 0.5)',
                        },
                    ],
                }} />

            </div>
        </div>
    )
}

export default AnalisisGraficoDepartamentos