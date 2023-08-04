import { useState } from "react"
import RegistroForm from "./RegistroForm"
import { useNavigate } from "react-router-dom";

const RegistroContenedor = () => {
  const navigate = useNavigate(null);
  const [errorRegistro, setErrorRegistro] = useState(false);

  const altaRegistro = (datos) => {

    console.log(datos);

    fetch(`https://censo.develotion.com/usuarios.php`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(datos)
    }).then(r => r.json())
      .then(data => {
        console.log("data", data)
        if (data.codigo === 200) {
          localStorage.setItem("apikey", data.apiKey);
          localStorage.setItem("id", data.id);
          navigate("/Dashboard")
          console.log("Login exitoso");
        } else {
          console.log(data.mensaje);
          setErrorRegistro(true);
        }
      })


  }

  return (
    <div className="border p-4 rounded-3 text-center login-registro">
      <h1 className="mb-5">Registro</h1>
      <RegistroForm altaRegistro={altaRegistro} />
      {errorRegistro &&
        <p className="mb-5 mt-5">Usuario y/o contraseña incorrectos</p>
      }

      <a href="/">Volver al login</a>

    </div>
  )
}

export default RegistroContenedor