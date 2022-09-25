import PropTypes from 'prop-types';
import {
  Wraper,
  Avatar,
  Card,
  Text,
  List,
  Label,
  Quantity,
  StatsItem,
} from './Profile/Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Wraper>
      <Card>
        <Avatar src={avatar} alt={tag} />
        <Text >{username}</Text>
        <Text >@{tag}</Text>
        <Text >{location}</Text>
      </Card>
      <List>
        <StatsItem>
          <Label >Followers</Label>
          <Quantity >{stats.followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label >Views</Label>
          <Quantity >{stats.views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label >Likes</Label>
          <Quantity >{stats.likes}</Quantity>
        </StatsItem>
      </List>
    </Wraper>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
