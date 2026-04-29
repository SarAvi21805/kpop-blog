import { Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import List from './pages/List';
import Detail from './pages/Detail';
import NotFound from './pages/NotFound';
import './App.css'

function App() {
  return (
    <div className="container">
      <nav style={{ padding: '20px', backgroundColor: '#f0f0f0', marginBottom: '20px' }}>
        <Link to="/" style={{ marginRight: '15px' }}>Inicio</Link>
        <Link to="/items">Lista de Idols/Grupos</Link>
      </nav>

      {/* DEFINICIÓN DE RUTAS */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<List />} />
        <Route path="/items/:id" element={<Detail />} />
        {/* Ruta 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;