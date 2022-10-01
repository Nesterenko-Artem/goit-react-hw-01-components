import styled from '@emotion/styled';
import { RandomHexColor } from '../../helper/randomColor';

export const Wraper = styled.div`
  width: 360px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Item = styled.li`
  display: flex;
  padding: 5px 10px;
  align-items: center;
  border: 1px solid #000;
  margin-bottom: 5px;
  border-radius: 10px;
  background-color: ${RandomHexColor};
`;
