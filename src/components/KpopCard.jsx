import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const KpopCard = ({ group }) => {
  return (
    <div className="kpop-card">
      <img src={group.image} alt={group.name} className="card-img" />
      <div>
        <h3>{group.name}</h3>
        <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>{group.agency}</p>
      </div>
      <Link to={`/items/${group.id}`}>
        <button style={{ width: '100%' }}>Ver detalles</button>
      </Link>
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