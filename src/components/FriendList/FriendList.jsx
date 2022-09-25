import PropTypes from 'prop-types';

import { FriendItem } from './FriendItem';

export const FriendList = ({ friends }) => {
  return (
    <>
      <ul className="friend-list">
        {friends.map(friend => (
          <li key={friend.id}>
            <FriendItem friend={friend} />
          </li>
        ))}
      </ul>
    </>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
