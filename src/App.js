
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './componentes/Login';
import Registrarse from './componentes/Registro';
import Dashboard from './componentes/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/global.css'
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Registrarse />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
