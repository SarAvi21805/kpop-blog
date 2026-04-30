import { useParams, Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import SectionHeader from "../components/SectionHeader";
import { object } from "prop-types";

const Detail = () => {
    const { id } = useParams();
    const [group, setGroup] = useState(null);
    const [songs, setSongs] = useState([]);
    const { favorites, toggleFavorite } = useContext(FavoritesContext);

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => {
                const found = data.find(g => String(g.id) === String(id));
                setGroup(found);

                // Si se encuentra el grupo, busca las canciones en iTunes (API)
                if (found) {
                  const query = encodeURIComponent(found.name);
                  fetch(`https://itunes.apple.com/search?term=${query}&entity=song&limit=12`)
                    .then(res => res.json())
                    .then(apiData => {
                      setSongs(apiData.results || []); // Guarda las canciones
                    })
                    .catch(err => console.error("Error con API iTunes:", err));
                }
            })
            .catch(err => console.error("Error JSON:", err));
    }, [id]);

    if (!group) {
      return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <h2>Cargando información del grupo...</h2>
      </div>
      );
    }

    const isFavorite = favorites.some(fav => fav.id === group.id);

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
      <Link to="/items" style={{ textDecoration: 'none', color: '#7c4dff' }}>← Volver al listado</Link>
      
      <SectionHeader title={group.name} subtitle={`Agencia: ${group.agency}`} />

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center', marginTop: '20px' }}>
        <img src={group.image} alt={group.name} style={{ objectFit:'fill' ,width: '300px', borderRadius: '15px', boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }} />
        
        <div style={{ flex: '1', minWidth: '300px', textAlign: 'left' }}>
          <p><strong>Miembros:</strong> {group.members}</p>
                    
          <div style={{ marginTop: '20px' }}>
            <h3>Descripción</h3>
            <p style={{ lineHeight: '1.6' }}>{group.description}</p>
          </div>

          <button 
            onClick={() => toggleFavorite(group)}
            style={{ 
              backgroundColor: isFavorite ? '#ff4b4b' : '#4CAF50',
              width: '100%',
              marginTop: '10px'
            }}
          >
            {isFavorite ? '❤️ Quitar de Favoritos' : '🤍 Agregar a Favoritos'}
          </button>
        </div>
      </div>

      <div style={{ marginTop: '40px' }}>
        <h3>🎵 Canciones Populares</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
          {songs.length > 0 ? (
            songs.map((track) => (
              <div key={track.trackId} style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '10px',
                padding: '10px', 
                background: 'rgba(124, 77, 255, 0.1)', 
                borderRadius: '10px',
                textAlign: 'left'
              }}>
                <img src={track.artworkUrl60} alt={track.trackName} style={{ borderRadius: '5px' }} />
                <div>
                  <div style={{ fontWeight: 'bold', fontSize: '0.8rem' }}>{track.trackName}</div>
                  <div style={{ fontSize: '0.6rem', opacity: 0.7 }}>{track.collectionName}</div>
                </div>
              </div>
            ))
          ) : (
            <p>No se encontraron canciones para este grupo.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Detail;