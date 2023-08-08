import React from 'react'
import { useDispatch} from 'react-redux';
import AgregarPersonaForm from './AgregarPersonaForm'
import { guardarPersonas } from '../features/personaSlice';
import { ToastContainer, toast } from 'react-toastify';

const AgregarPersona = () => {
    const dispatch = useDispatch();

    const validarDatos = (datos) => {
        if (datos.nombre === "" || datos.departamento ===""|| datos.ciudad ==="Choose..."|| datos.ocupacion ==="Choose..."||datos.fechaNacimiento ==="") {
          toast.error("Debe completar todos los campos");
          return false;
        } 
        else{
            altaPersona(datos);
            return true;
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
                if (data.codigo === 200) {
                    datos.idCenso=data.idCenso;
                    dispatch(guardarPersonas(datos))
                    toast.success('Se agrego correctamente');
                }
                else {
                    toast.error(data.mensaje);
                    
                }
            })       
    }

    return (
        <div className="card-body">
            <h5>Agregar persona</h5>
            <p>Censista: {localStorage.getItem('user')}</p>
            <AgregarPersonaForm validarDatos={validarDatos}/>
            <ToastContainer 
            position="top-left"
            theme="colored"
            autoClose={1500}
            />
        </div>
    )
}

export default AgregarPersona