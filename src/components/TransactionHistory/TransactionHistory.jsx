import PropTypes from 'prop-types';

import { TransactionItem } from './TransactionItem';

export const TransactionHistory = ({ items }) => {
  return (
    <>
      <table className="transaction-history">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(item => (
            <TransactionItem item={item} key={item.id} />
          ))}
        </tbody>
      </table>
    </>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};
