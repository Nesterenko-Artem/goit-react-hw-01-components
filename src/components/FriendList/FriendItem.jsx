import PropTypes from 'prop-types';

import { InfoName, Img, Status } from './FriendItem.styled';

export const FriendItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <>
      <Status status={isOnline}>{isOnline}</Status>
      <Img className="avatar" src={avatar} alt={name} width="48" />
      <InfoName >{name}</InfoName>
    </>
  );
};

FriendItem.propTypes = {
  friend: PropTypes.shape({
    id: PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};
