import { useState } from "react"
import RegistroForm from "./RegistroForm"
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
const RegistroContenedor = () => {
  const navigate = useNavigate(null);
  const [errorRegistro, setErrorRegistro] = useState(false);

  const validarDatos = (datos) => {

    if (datos.usuario === "" || datos.password === "") {
      setErrorRegistro(true);
      (datos.usuario === "")?toast.error("Debe ingresar un usuario"):toast.error("Debe ingresar una contraseña");
     } else {
      if (datos.usuario.length < 4) {
        setErrorRegistro(true);
        toast.error("El usuario debe tener al menos 4 caracteres");
      } else if (datos.password.length < 6) {
        setErrorRegistro(true);
        toast.error("La contraseña debe tener al menos 6 caracteres");
    }
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