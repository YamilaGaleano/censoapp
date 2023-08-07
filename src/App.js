import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Login from './componentes/Login';
import Registro from './componentes/Registro';
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
      <Route path="/"  element={<Login/>} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="*" element={<Login/>} />
      </Routes>

    </BrowserRouter>
    </Provider>
  );
}

export default App;
