import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Home from './pages/Home';
import Indices from './pages/Indices';
import './global.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/indices" element={<Home />} />
        <Route path="/" element={<Indices />} />
      </Routes>
    </Router>
  )
}

export default App