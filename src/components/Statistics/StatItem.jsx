import PropTypes from 'prop-types';

export const StatItem = (props) => {
  return (
    <>
      <li className="item">
        <span className="label">{props.label}</span>
        <span className="percentage">{props.percentage}%</span>
      </li>
    </>
  );
};

StatItem.propTypes = {
  statObject: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
