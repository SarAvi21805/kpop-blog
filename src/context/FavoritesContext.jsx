import { createContext, useState } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (group) => {
    if (favorites.find(f => f.id === group.id)) {
      setFavorites(favorites.filter(f => f.id !== group.id));
    } else {
      setFavorites([...favorites, group]);
    }
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};