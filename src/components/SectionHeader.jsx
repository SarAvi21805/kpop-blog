import PropTypes from 'prop-types';

const SectionHeader = ({ title, subtitle }) => (
  <div style={{ marginBottom: '30px', textAlign: 'center' }}>
    <h1>{title}</h1>
    {subtitle && <p style={{ opacity: 0.8 }}>{subtitle}</p>}
  </div>
);

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};

export default SectionHeader;