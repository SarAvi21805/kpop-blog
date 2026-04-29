import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const KpopCard = ({ group }) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', margin: '10px' }}>
      <img src={group.image} alt={group.name} style={{ width: '100px' }} />
      <h3>{group.name}</h3>
      <p>Agencia: {group.agency}</p>
      <Link to={`/items/${group.id}`}>Ver detalles</Link>
    </div>
  );
};

KpopCard.propTypes = {
  group: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    agency: PropTypes.string.isRequired,
    image: PropTypes.string
  }).isRequired
};

export default KpopCard;