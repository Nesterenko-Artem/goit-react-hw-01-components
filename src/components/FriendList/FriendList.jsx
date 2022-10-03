import PropTypes from 'prop-types';
import { Wraper } from './FriendList.styled';
import { FriendItem } from './FriendItem';

export const FriendList = ({ friends }) => {
  return (
    <Wraper>
      <ul>
        {friends.map(friend => (
          <FriendItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            key={friend.id}
          />
        ))}
      </ul>
    </Wraper>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
// friend={friend}
