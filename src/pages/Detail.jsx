import { useParams, Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

const Detail = () => {
    const { id } = useParams();
    const [group, setGroup] = useState(null);
    const { favorites, toggleFavorite } = useContext(FavoritesContext);

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => {
                const found = data.find(g => String(g.id) === String(id));
                setGroup(found);
            });
    }, [id]);

    if (!group) return <div style={{ padding: '20px' }}>Cargando información del grupo...</div>;

    const isFavorite = favorites.some(fav => fav.id === group.id);

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <Link to="/items">← Volver al listado</Link>
      <hr />
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <img src={group.image} alt={group.name} style={{ width: '200px', borderRadius: '10px' }} />
        <div>
          <h1>{group.name}</h1>
          <p><strong>Agencia:</strong> {group.agency}</p>
          <p><strong>Miembros:</strong> {group.members}</p>
          <button 
            onClick={() => toggleFavorite(group)}
            style={{ 
              padding: '10px', 
              backgroundColor: isFavorite ? '#ff4b4b' : '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            {isFavorite ? '❤️ Quitar de Favoritos' : '🤍 Agregar a Favoritos'}
          </button>
        </div>
      </div>
      <div style={{ marginTop: '20px' }}>
        <h3>Descripción</h3>
        <p>{group.description}</p>
      </div>
      <div style={{ marginTop: '30px' }}>
        <h3>🎵 Canciones Populares</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          {group.songs && group.songs.map((song, index) => (
            <div key={index} style={{ 
              padding: '10px', 
              background: 'rgba(124, 77, 255, 0.1)', 
              borderRadius: '5px',
              borderLeft: '4px solid #7c4dff'
            }}>
              {song}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Detail;