import { useContext } from 'react';
import { FavoritesContext } from '../context/FavoritesContext';
import KpopCard from '../components/KpopCard';

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Mis Favoritos ❤️</h1>
      {favorites.length === 0 ? (
        <p>Aún no tienes grupos favoritos. ¡Ve a la lista y añade algunos!</p>
      ) : (
        <div className="grid-container">
          {favorites.map(group => (
            <KpopCard key={group.id} group={group} />
          ))}
        </div>
      )}
    </div>
  );
};
export default Favorites;