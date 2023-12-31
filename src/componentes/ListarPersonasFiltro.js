import { useState } from "react";

const ListarPersonasFiltro = ({ logos, handleTabClick, ocupacionSel }) => {
  const [title, setTitle] = useState("");
  const handleTitle = (logo) => {
    handleTabClick(logo.id);
    setTitle(logo.nombre);
  }
  return (
    <div className="card-header">
      <h5 className="card-title mb-3">{title!==""? title : "Listado de Personas"}</h5>
      <div className="row">
        <div className="col-12 d-flex justify-content-between">
          {logos.map(logo =>
            <span
              key={logo.id}
              className={`nav-link logo-item ${ocupacionSel === logo.id ? 'active' : ''}`}
              aria-current={ocupacionSel === logo.id ? 'true' : 'false'}
              onClick={() => handleTitle(logo)}
            >
              <img src={logo.url} alt={logo.nombre} />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListarPersonasFiltro;