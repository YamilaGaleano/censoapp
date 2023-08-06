import { useDispatch,useSelector } from "react-redux";
import { useEffect, useState } from "react"
import { totalPersonas } from "../features/personaSlice"

const Porcentaje = () => {
  const dispatch = useDispatch();
  const totalCensos = useSelector(state => state.personas.personasTotal);
  const censosUsuario = useSelector(state => state.personas.personasUsuario);
  const [porcentaje, setPorcentaje]= useState(0);

  useEffect(() => {
    fetch("https://censo.develotion.com/totalCensados.php", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'apiKey': localStorage.getItem("apikey"),
            'iduser': localStorage.getItem("id")
        },
    })
        .then(r => r.json())
        .then(data => {
            console.log("dataFetch",data);
            if (data.codigo === 200) {
                dispatch(totalPersonas(data.total));
            } else {
                console.log(data.mensaje);
            }
        });

    setPorcentaje(parseFloat(((censosUsuario.length *100)/totalCensos).toFixed(2)));

}, [censosUsuario]);


return (
  <div className="card col-4 first ">
    <div className="card-body text-center">
      <h6 className="card-title">Porcentaje de personas censadas</h6>
      <p className="card-text">%{porcentaje}</p>
    </div>
  </div>
)
}

export default Porcentaje