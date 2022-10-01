import PropTypes from 'prop-types';
import { Wraper, Item } from './FriendList.styled';
import { FriendItem } from './FriendItem';

export const FriendList = ({ friends }) => {
  return (
    <Wraper>
      <ul className="friend-list">
        {friends.map(friend => (
          <Item key={friend.id}>
            <FriendItem friend={friend} />
          </Item>
        ))}
      </ul>
    </Wraper>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
