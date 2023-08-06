import { useState } from "react";

const ListarPersonasFiltro = ({ logos, handleTabClick, ocupacionSel }) => {
  const [title, setTitle] = useState("");
  
  const handleTitle = (logo) => {
    handleTabClick(logo.id);
    setTitle(logo.nombre);
  }
  
  console.log("logos", logos);

  return (
    <div className="card-header">
      <h5 className="card-title mb-3">Listado de Personas</h5>
      <div className="slider-container">
        <div className="slider">
          {logos.map(logo =>
            <a
              key={logo.id}
              className={`nav-link slider-item ${ocupacionSel === logo.id ? 'active' : ''}`}
              aria-current={ocupacionSel === logo.id ? 'true' : 'false'}
              onClick={() => handleTitle(logo)}
            >
              <img src={logo.url} alt={logo.nombre} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListarPersonasFiltro;



    // <div className="card-header">
    //   <h5 className="card-title mb-3">Listado de Personas</h5>
    //   <ul className="nav nav-tabs card-header-tabs ">
    //     {logos.map(logo =>
    //       <li className="nav-item">
    //         <a
    //           className={`nav-link ${ocupacionSel === logo.id ? 'active' : ''}`}
    //           aria-current={ocupacionSel === logo.id ? 'true' : 'false'}
    //           onClick={()=>handleTitle(logo)}
    //         >
    //         <img src={logo.url}/>
    //         </a>
    //       </li>)}
    //   </ul>
    // </div>