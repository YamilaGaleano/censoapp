import { useSelector } from "react-redux";
import { useEffect, useState } from "react"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});
const Mapa = () => {
    const departamentos = useSelector(state => state.departamentos.departamentos);
    const censos = useSelector(state => state.personas.personasUsuario);
    const [censoPorDep, setcensoPorDep] = useState({});
    useEffect(() => {
        calcularSumaCensosPorDepartamento();
      }, [censos, departamentos]);
    
      const calcularSumaCensosPorDepartamento = () => {
        const censosPorDepartamento = {};     
        censos.forEach(persona => {
          if (censosPorDepartamento[persona.departamento] !== undefined) {
            censosPorDepartamento[persona.departamento] = censosPorDepartamento[persona.departamento] + 1;
          } else {
            censosPorDepartamento[persona.departamento] = 1;
          }
        });          
        setcensoPorDep(censosPorDepartamento);
      };
    return (
        <div className="card col-12 mt-5 mapa">
            <div className="card-body" style={{ height: '400px', width: '100%' }}>
            <MapContainer center={[-33, -56]} zoom={6} scrollWheelZoom={false} style={{height:'100%', width:'100%'}}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
{departamentos.map((valor,i) =><Marker key={i} position={[valor.latitud, valor.longitud]}>
    <Popup>
    <strong>Departamento: {valor.nombre}</strong>  <br />
    Censados: {censoPorDep[valor.id] !== undefined ? censoPorDep[valor.id] : 0}
        <br />
    </Popup>
  </Marker>)}
</MapContainer>
            </div>
            <div className="card-footer">Mapa</div>
        </div>
    )
}

export default Mapa