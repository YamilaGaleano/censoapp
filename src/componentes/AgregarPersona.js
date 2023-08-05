import React from 'react'
import {useState } from "react";
import { useDispatch} from 'react-redux';
import AgregarPersonaForm from './AgregarPersonaForm'
import { guardarPersonas } from '../features/personaSlice';

const AgregarPersona = () => {
    const [agregado, setAgregado] = useState(false);
    const [errorPersona, setErrorPersona] = useState(false);
    const [msj, setMsj] = useState("");
    const [msj2, setMsj2] = useState("");
    const dispatch = useDispatch();
    const validarDatos = (datos) => {
        if (datos.nombre === "" || datos.departamento ===""|| datos.ciudad ==="Choose..."|| datos.ocupacion ==="Choose..."||datos.fechaNacimiento ==="") {
          setErrorPersona(true);
          setAgregado(false);
          setMsj("Debe completar todos los campos");;
        } 
        else{
            altaPersona(datos);
        }
      }
    const altaPersona=(datos)=>{
       
        fetch(`https://censo.develotion.com/personas.php`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'apiKey': localStorage.getItem("apikey"),
                'iduser': localStorage.getItem("id")
            },
            body: JSON.stringify(datos)
        }).then(r => r.json())
            .then(data => {
                if (data.codigo == 200) {
                    datos.idCenso=data.idCenso;
                    dispatch(guardarPersonas(datos))
                    setAgregado(true);
                    setMsj("Se agrego correctamente");
                }
                else {
                    console.log(data.mensaje);
                    setErrorPersona(true);
                    setAgregado(false);
                    if (msj === "") setMsj(data.mensaje);
                }
            })
        
    }
    return (
        <div className="card-body">
            <h5>Agregar persona</h5>
            <p>Censista: Yamila Galeano</p>
            
            <AgregarPersonaForm validarDatos={validarDatos}/>
            {errorPersona && <p >{msj}</p>}
            {agregado && <p >{msj2}</p>}

        </div>
    )
}

export default AgregarPersona