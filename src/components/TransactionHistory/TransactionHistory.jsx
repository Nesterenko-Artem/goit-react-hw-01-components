import PropTypes from 'prop-types';
import { Table, TableHead, TableHeadRow, TableHeadItem, TableBody, Wraper } from './TransactionHistory.styled';
import { TransactionItem } from './TransactionItem';

export const TransactionHistory = ({ items }) => {
  return (
    <Wraper>
      <Table className="transaction-history">
        <TableHead>
          <TableHeadRow>
            <TableHeadItem>Type</TableHeadItem>
            <TableHeadItem>Amount</TableHeadItem>
            <TableHeadItem>Currency</TableHeadItem>
          </TableHeadRow>
        </TableHead>

        <TableBody>
          {items.map(item => (
            <TransactionItem item={item} key={item.id} />
          ))}
        </TableBody>
      </Table>
    </Wraper>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};
