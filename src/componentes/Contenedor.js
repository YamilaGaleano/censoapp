import React from 'react';
import Login from './LoginFormulario';


const Contenedor = () => {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center fondo" style={{ minHeight: "100vh" }}>
      <Login/>
    </div>
    
  );
};

export default Contenedor;