
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './componentes/Login';
import Registrarse from './componentes/Registro';
import Dashboard from './componentes/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/global.css'

function App() {
  return (

       <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Registrarse />} />
        <Route path="/Dashboard" element={<Dashboard />} />
 
 
    </Routes>
      </BrowserRouter>
   
  );
}

export default App;
