import styled from '@emotion/styled';

export const RowTable = styled.tr`
   box-sizing: border-box;
    background-color: #ffffff;
  &:nth-child(even) {
    background-color: #dcd7d7;
  }
 
`;
export const Data = styled.td`
  width: 100px;
  text-align: center;
  text-transform: capitalize;
  padding: 12px 0;
  &:not(:last-of-type) {
    border-right: 1px solid #ffffff;
  }
`;