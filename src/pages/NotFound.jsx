import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h2>404 - ¡Oops! Página no encontrada</h2>
      <p>Parece que este grupo de K-pop aún no ha debutado.</p>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
};

export default NotFound;