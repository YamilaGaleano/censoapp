const LogoPrincipal = () => {
  return (
    <div className="row mb-5">
      <div className="col d-flex text-center">
        <h1>Censoapp</h1>
        <img src={process.env.PUBLIC_URL + '/img/analitica-de-datos.png'} alt="Logo" style={{ width: '100px' }}/>
      </div>
    </div>
  );
}


export default LogoPrincipal