import PropTypes from 'prop-types';

import { InfoName, Img, Status, Item } from './FriendItem.styled';

export const FriendItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <Item>
        <Status status={isOnline}>{isOnline}</Status>
        <Img src={avatar} alt={name} width="48" />
        <InfoName>{name}</InfoName>
      </Item>
    </>
  );
};

FriendItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
