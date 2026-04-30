import { Routes, Route, Link} from 'react-router-dom';
import { useContext } from 'react';
import { FavoritesContext } from './context/FavoritesContext';
import Home from './pages/Home';
import List from './pages/List';
import Detail from './pages/Detail';
import NotFound from './pages/NotFound';
import Favorites from './pages/Favorites';
import './App.css'

function App() {
  const { darkMode, toggleTheme } = useContext(FavoritesContext);

  return (
    <div className={darkMode ? 'app-dark' : 'app-light'}>
      <nav style={{ 
        padding: '20px', 
        backgroundColor: darkMode ? '#333' : '#f0f0f0', 
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div>
          <Link to="/" style={{ marginRight: '15px', color: darkMode ? 'white' : 'black' }}>Inicio</Link>
          <Link to="/items" style={{ marginRight: '15px', color: darkMode ? 'white' : 'black' }}>Lista de Idols</Link>
          <Link to="/favorites" style={{ color: darkMode ? 'white' : 'black' }}>❤️ Favoritos</Link>
        </div>

        {/* BOTÓN DE TEMA */}
        <button 
          onClick={toggleTheme}
          style={{ 
            cursor: 'pointer', 
            padding: '5px 10px', 
            borderRadius: '15px',
            border: 'none',
            backgroundColor: darkMode ? '#fff' : '#333',
            color: darkMode ? '#333' : '#fff'
          }}
        >
          {darkMode ? '☀️ Modo Claro' : '🌙 Modo Oscuro'}
        </button>
      </nav>

      {/* Contenedor principal para el contenido de las páginas */}
      <main style={{ minHeight: '80vh', padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items" element={<List />} />
          <Route path="/items/:id" element={<Detail />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer style={{ textAlign: 'center', padding: '40px', fontSize: '0.9rem', opacity: 0.7 }}>
        © 2026 K-Pop Blog - Proyecto Senior React
      </footer>
    </div>
  );
}

export default App;