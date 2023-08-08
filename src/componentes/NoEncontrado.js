import { Link} from "react-router-dom"
const NoEncontrado = () => {
  return (
    <div className="container text-center vh-100 d-flex flex-column justify-content-center">
      <h2 > La página que buscas no existe
        <span className="text-warning"> <i className="bi bi-exclamation-triangle"></i></span>
      </h2>
      <Link to="/" className="btn btn-primary mt-3">
        Volver al login
      </Link>
    </div>
  )
}

export default NoEncontrado