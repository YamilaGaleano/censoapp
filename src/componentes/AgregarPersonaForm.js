import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { guardarDepartamentos } from "../features/departamentoSlice";
import { guardarOcupaciones } from "../features/ocupacionSlice";

const AgregarPersonaForm = ({ validarDatos }) => {
    const dep = useSelector(state => state.departamentos.departamentos)
    const ocu = useSelector(state => state.ocupaciones.ocupaciones)
    const [ocupacionEdad, setocupacionEdad] = useState([]);
    const [ciudadesData, setCiudadesData] = useState([]);
    const [selectDep, setSelectDep] = useState('');
    const [selectEdad, setSelectEdad] = useState('');
    const dispatch = useDispatch();

    const nombPersonaRef = useRef(null);
    const ciudPersonaRef = useRef(null);
    const ocupacionPersonaRef = useRef(null);

    useEffect(() => {
        fetch(`https://censo.develotion.com/departamentos.php`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'apiKey': localStorage.getItem("apikey"), 'iduser': localStorage.getItem("id")
            },
        }).then(r => r.json()).then(data => {
            (data.codigo == 200) ? dispatch(guardarDepartamentos(data.departamentos)) : console.log(data.mensaje);
        }).catch(function (data) {
            console.log(data.mensaje)
        })
        fetch(`https://censo.develotion.com/ocupaciones.php`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'apiKey': localStorage.getItem("apikey"),
                'iduser': localStorage.getItem("id")
            },
        }).then(r => r.json()).then(data => {
            (data.codigo == 200) ? dispatch(guardarOcupaciones(data.ocupaciones)) : console.log(data.mensaje);
        })

    }, [])

    useEffect(() => {
        fetch(`https://censo.develotion.com/ciudades.php?idDepartamento=` + selectDep, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'apiKey': localStorage.getItem("apikey"),
                'iduser': localStorage.getItem("id")
            },
        }).then(r => r.json()).then(data => {
            (data.codigo == 200) ? setCiudadesData(data.ciudades) : console.log(data.mensaje);
        })
    }, [selectDep])

    const agregar = (e) => {
        e.preventDefault();
        const persona = {
            idUsuario: localStorage.getItem("id"),
            nombre: nombPersonaRef.current.value,
            departamento: selectDep,
            ciudad: ciudPersonaRef.current.value,
            fechaNacimiento: selectEdad,
            ocupacion: ocupacionPersonaRef.current.value
        }
        validarDatos(persona);
    }

    const CambioEdad = (e) => {
        setSelectEdad(e.target.value)
        const fechaActual = new Date();
        const fechaIngresada = new Date(e.target.value);

        const anioActual = fechaActual.getFullYear();
        const mesActual = fechaActual.getMonth();
        const diaActual = fechaActual.getDate();


        const anioIngresado = fechaIngresada.getFullYear();
        const mesIngresado = fechaIngresada.getMonth();
        const diaIngresado = fechaIngresada.getDate();

        const esMayor = anioActual - anioIngresado >= 18 && (
            anioActual - anioIngresado > 18 || mesActual > mesIngresado || (mesActual === mesIngresado && diaActual >= diaIngresado));

        const nuevaOcupacionEdad = !esMayor ? ocu.filter(ocupacion => ocupacion.ocupacion === "Estudiante") : ocu;

        setocupacionEdad(nuevaOcupacionEdad);
    };
    const CambioSelectDep = (e) => {
        setSelectDep(e.target.value);
    };

    return (
        <form className="row">
            <div className="form-group col-12">
                <label htmlFor='nombre' className="form-label">Nombre</label>
                <input type="email" className="form-control" id='nombre' ref={nombPersonaRef} />
            </div>
            <div className="form-group col-6">
                <label htmlFor='departamento'>Departamento</label>
                <select id='departamento' className="form-control" onChange={CambioSelectDep}>
                    <option selected>Choose...</option>
                    {dep.map((option) => (
                        <option key={option.id} value={option.id}>
                            {option.nombre} </option>))}
                </select>
            </div>
            <div className="form-group col-6">
                <label htmlFor='ciudad'>Ciudad</label>
                <select id='ciudad' className="form-control" ref={ciudPersonaRef} >
                    <option selected>Choose...</option>
                    {
                        ciudadesData.map((option) => (
                            <option key={option.id} value={option.id}>
                                {option.nombre}
                            </option>
                        ))}

                </select>
            </div>
            <div className="form-group col-6">
                <label htmlFor='fechaNacimiento'>Fecha de Nacimiento:</label>
                <input type="date" className="form-control" id='fechaNacimiento' name="fechaNacimiento" onChange={CambioEdad} />
            </div>
            <div className="form-group col-6">
                <label htmlFor='ocupacion' >Ocupacion</label>
                <select id='ocupacion' className="form-control" ref={ocupacionPersonaRef} >
                    <option selected>Choose...</option>
                    {ocupacionEdad.map((option) => (
                        <option key={option.id} value={option.id}>
                            {option.ocupacion} </option>))}
                </select>
            </div>
            <div className="form-group text-center mt-4">
                <button type="submit" className="btn btn-primary" onClick={agregar}>Agregar</button>
            </div>
        </form>
    )
}

export default AgregarPersonaForm