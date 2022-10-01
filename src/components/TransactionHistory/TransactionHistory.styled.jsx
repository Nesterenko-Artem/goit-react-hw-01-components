import styled from '@emotion/styled';

export const Wraper = styled.div`
  text-align: center;
  margin: 50px auto;
`;
export const Table = styled.table`
  border: 1px solid #000;

  width: 360px;
  margin: 50px auto 0;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
    rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;
`;
export const TableHead = styled.thead``;

export const TableHeadRow = styled.tr`
  background-color: skyblue;
`;

export const TableHeadItem = styled.th`
  display: inline-block;
  width: 100px;
  text-transform: uppercase;
  color: #1f1818;
  font-size: 14px;
  padding: 12px 0;
  &:not(:last-of-type) {
    border-right: 1px solid #ffffff;
  }
`;

export const TableBody = styled.tbody`
  display: inline-block;
`;
