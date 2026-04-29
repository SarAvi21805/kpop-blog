import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const toggleFavorite = (group) => {
    if (favorites.find(f => f.id === group.id)) {
      setFavorites(favorites.filter(f => f.id !== group.id));
    } else {
      setFavorites([...favorites, group]);
    }
  };

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, darkMode, toggleTheme }}>
      <div className={darkMode ? 'dark-theme' : 'light-theme'} style={{ minHeight: '100vh' }} > 
        {children}
      </div>
    </FavoritesContext.Provider>
  );
};

FavoritesProvider.propTypes = {
  children: PropTypes.node.isRequired
};