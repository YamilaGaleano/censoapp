import { useDispatch, useSelector } from "react-redux";
import { listaPersonas } from "../features/personaSlice"
import ListarPersonas from "./ListarPersonas"
import ListarPersonasFiltro from "./ListarPersonasFiltro"
import { useEffect, useState } from "react"

const ListadoPerContenedor = () => {
    const dispatch = useDispatch();
    const [logos, setLogos] = useState([]);
    const ocupacionesList = useSelector(state => state.ocupaciones.ocupaciones);
    const nuevaPersona = useSelector(state => state.personas.personas);
    const personasLista = useSelector(state => state.personas.personasUsuario);
    const [ocupacionSel, setOcupacionSel] = useState(1);

    const handleTabClick = (ocupacionId) => {
        setOcupacionSel(ocupacionId);
    };


    useEffect(() => {
        const newLogos = ocupacionesList.map(ocupacion => ({
            id: ocupacion.id,
            url: `https://censo.develotion.com/imgs/${ocupacion.id}.png`,
            nombre: ocupacion.ocupacion
        }));

        setLogos(newLogos);
    }, [ocupacionesList]);

    useEffect(() => {
        fetch(`https://censo.develotion.com/personas.php?idUsuario=` + localStorage.getItem("id"), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'apiKey': localStorage.getItem("apikey"),
                'iduser': localStorage.getItem("id")
            },
        })
            .then(r => r.json())
            .then(data => {
                if (data.codigo === 200) {
                    dispatch(listaPersonas(data.personas));
                } else {
                    console.log(data.mensaje);
                }
            });

    }, [nuevaPersona]);


    return (
        <div className="card mt-5 listadoPersonas">
            <ListarPersonasFiltro logos={logos} handleTabClick={handleTabClick} ocupacionSel={ocupacionSel} />
            <ListarPersonas personasLista={personasLista} ocupacionSel={ocupacionSel}/>
        </div>

    )
}

export default ListadoPerContenedor


