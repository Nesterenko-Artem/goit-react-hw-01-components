import PropTypes from 'prop-types';
import { RowTable, Data } from './TransactionItem.styled';
export const TransactionItem = ({ item: { type, amount, currency } }) => {
  return (
    <>
      <RowTable>
        <Data>{type}</Data>
        <Data>{amount}</Data>
        <Data>{currency}</Data>
      </RowTable>
    </>
  );
};

TransactionItem.propTypes = {
  item: PropTypes.shape({
    //  id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};