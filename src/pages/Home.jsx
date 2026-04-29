import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>K-Pop World Blog</h1>
      <p>Bienvenido a la enciclopedia de tus grupos favoritos.</p>
      <div style={{ marginTop: '20px' }}>
        <Link to="/items" style={{ 
          padding: '10px 20px', 
          backgroundColor: '#646cff', 
          color: 'white', 
          textDecoration: 'none', 
          borderRadius: '5px' 
        }}>
          Ver todos los grupos
        </Link>
      </div>
    </div>
  );
};

export default Home;