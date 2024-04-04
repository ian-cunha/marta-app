import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Home from './pages/Home';
import Indices from './pages/Indices';
import './global.css'
import Marta from './pages/Marta';
import Mercado from './pages/Mercado';
import OfertaEDemanda from './pages/OfertaEDemanda';
import Comercializacao from './pages/Comercializacao';
import Beneficios from './pages/Beneficios';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/indices" element={<Indices />} />
        <Route path="/marta" element={<Marta />} />
        <Route path="/mercado" element={<Mercado />} />
        <Route path="/ofertaedemanda" element={<OfertaEDemanda />} />
        <Route path="/comercializacao" element={<Comercializacao />} />
        <Route path="/beneficios" element={<Beneficios />} />

      </Routes>
    </Router>
  )
}

export default App