import styled from '@emotion/styled';
import { RandomHexColor } from '../../helper/randomColor';

export const Wraper = styled.div`
  text-align: center;
  width: 360px;
  margin: 50px auto;
  background-color: #fff;
`;

export const Title = styled.h2`
  margin-bottom: 10px;
  background-color: #85a4a2;
`;

export const List = styled.ul`
  display: flex;
  width: 100%;
  height: 50px;
  border: none;
  justify-content: space-evenly;
`;

export const Item = styled.li`
  width: 100%;
  margin-right: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 2px;
  box-shadow: 5px 7px 10px 1px rgba(0, 0, 0, 0.2);
  background-color: ${RandomHexColor};
`;
export const Percentage = styled.span`
  font-size: x-large;
  font-weight: bold;
`;
export const Label = styled.span`
  /* text-decoration: underline; */
`;
