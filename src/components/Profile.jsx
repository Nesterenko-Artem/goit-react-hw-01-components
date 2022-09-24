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
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Wraper>
      <Card>
        <Avatar src={avatar} alt={tag} />
        <Text className="name">{username}</Text>
        <Text className="tag">@{tag}</Text>
        <Text className="location">{location}</Text>
      </Card>

      <List>
        <StatsItem>
          <Label className="label">Followers</Label>
          <Quantity className="quantity">{stats.followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label className="label">Views</Label>
          <Quantity className="quantity">{stats.views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label className="label">Likes</Label>
          <Quantity className="quantity">{stats.likes}</Quantity>
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
