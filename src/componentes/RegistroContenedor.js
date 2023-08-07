import { useState } from "react"
import RegistroForm from "./RegistroForm"
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
const RegistroContenedor = () => {
  const navigate = useNavigate(null);
  const [errorRegistro, setErrorRegistro] = useState(false);

  const validarDatos = (datos) => {

    if (datos.usuario === "" || datos.password ==="") {
      setErrorRegistro(true);
      if (datos.usuario === "") toast.error("Debe ingresar un usuario");
      else toast.error("Debe ingresar una contraseña");
    } 
  }

  const altaRegistro = (datos) => {
    setErrorRegistro(false);
    validarDatos(datos);
    if (!errorRegistro) {
      fetch(`https://censo.develotion.com/usuarios.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
      }).then(r => r.json())
        .then(data => {
          if (data.codigo === 200) {
            localStorage.setItem("apikey", data.apiKey);
            localStorage.setItem("id", data.id);
            navigate("/Dashboard")
           
          } else {
            console.log(data.mensaje);
            setErrorRegistro(true);
            toast.error(data.mensaje);
          }
        })
    }
  }

  return (
    <div className="border p-4 rounded-3 text-center login-registro">
      <h2 className="mb-5">Registro</h2>
      <RegistroForm altaRegistro={altaRegistro} />
      <ToastContainer 
            position="top-right"
            theme="colored"
            autoClose={1500}
            />
      <a href="/">Volver al login</a>
    </div>
  )
}

export default RegistroContenedor