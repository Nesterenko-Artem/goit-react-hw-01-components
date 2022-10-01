import PropTypes from 'prop-types';
import { Wraper, Title, List, Item, Percentage, Label } from './Statistics.styled';
export const StatList = ({ stats, title }) => {
  return (
    <Wraper>
      {Title && <Title >{title}</Title>}
      <List>
        {stats.map(stat => (
          <Item key={stat.id}>
            <Label >{stat.label}</Label>
            <Percentage >{stat.percentage}%</Percentage>
          </Item>
        ))}
      </List>
    </Wraper>
  );
};

StatList.propTypes = {
  title: PropTypes.string.isRequired,

  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
