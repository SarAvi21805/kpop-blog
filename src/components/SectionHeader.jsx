import PropTypes from 'prop-types';

const SectionHeader = ({ title, subtitle }) => {
  return (
    <div style={{ marginBottom: '30px' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>{title}</h1>
      {subtitle && <p style={{ fontSize: '1.1rem', opacity: 0.8 }}>{subtitle}</p>}
      <div style={{ width: '90px', height: '4px', background: '#7c4dff', margin: '10px auto' }}></div>
    </div>
  );
};

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};

export default SectionHeader;