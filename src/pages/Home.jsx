import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', padding: '40px 20px' }}>
      <header style={{ marginBottom: '50px' }}>
        <h1 style={{ fontSize: '3rem' }}>🎤 K-Pop World Blog</h1>
        <p style={{ fontSize: '1.2rem' }}>Tu portal favorito para conocer a las estrellas del momento.</p>
        <Link to="/items">
          <button style={{ marginTop: '10px',fontSize: '1.1rem', padding: '15px 30px' }}>Explorar Idols</button>
        </Link>
      </header>
      
      <section style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
        <h2>¿Qué encontrarás aquí?</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div>
            <h3>✨ Perfiles Detallados</h3>
            <p>Información sobre agencias, miembros y la historia de cada grupo.</p>
          </div>
          <div>
            <h3>❤️ Tus Favoritos</h3>
            <p>Guarda los grupos que más te gustan para verlos cuando quieras.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;