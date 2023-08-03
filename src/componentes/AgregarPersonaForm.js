import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from "react-router-dom";
import { guardarDepartamentos } from "../features/departamentoSlice";
import { guardarOcupaciones } from "../features/ocupacionSlice";

const AgregarPersonaForm = () => {
    const navigate = useNavigate();
    const dep = useSelector(state => state.departamentos.departamentos)
    const ocu = useSelector(state => state.ocupaciones.ocupaciones)
    const [ciudadesData, setCiudadesData] = useState([]);
    const [selectDep, setSelectDep] = useState('');
    const dispatch = useDispatch();
    useEffect(() => {
        if (localStorage.getItem("id") === null) {
            navigate("/");
        } else {
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
                     'iduser':localStorage.getItem("id")
                  },           
                }).then(r => r.json()).then(data =>{
                    (data.codigo == 200)?dispatch(guardarOcupaciones(data.ocupaciones)) : console.log(data.mensaje);                        
                      }).catch(function (error) {
                        console.log(error)
                      })
              }

    }, [])
    const CambioSelectDep = (e) => {
        setSelectDep(e.target.value);
        console.log(e.target.value);
    };
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
        }).catch(function (error) {
            console.log(error)
        })


    }, [selectDep])



    return (
        <form className="row">
            <div className="form-group col-12">
                <label htmlFor="nombPersona" className="form-label">Nombre</label>
                <input type="email" className="form-control" id="nombPersona" />
            </div>
            <div className="form-group col-6">
                <label htmlFor="deptoPersona">Departamento</label>
                <select id="deptoPersona" className="form-control" onChange={CambioSelectDep}>
                    <option selected>Choose...</option>
                    {dep.map((option) => (
                        <option key={option.id} value={option.id}>
                            {option.nombre} </option>))}
                </select>
            </div>
            <div className="form-group col-6">
                <label htmlFor="ciudPersona">Ciudad</label>
                <select id="ciudPersona" className="form-control" >
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
                <label htmlFor="fechaNacPersona">Fecha de Nacimiento:</label>
                <input type="date" className="form-control" id="fechaNacPersona" name="fechaNacimiento" />
            </div>
            <div className="form-group col-6">
                <label htmlFor="ocupacionPersona">Ocupacion</label>
                <select id="ocupacionPersona" className="form-control">
                    <option selected>Choose...</option>
                    {ocu.map((option) => (
                        <option key={option.id} value={option.id}>
                            {option.ocupacion} </option>))}
                </select>
            </div>
            <div className="form-group text-center mt-4">
                <button type="submit" className="btn btn-primary" >Agregar</button>
            </div>
        </form>
    )
}

export default AgregarPersonaForm