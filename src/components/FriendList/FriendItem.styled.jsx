import styled from '@emotion/styled';
import { RandomHexColor } from '../../helper/randomColor';

export const InfoName = styled.p`
  font-size: xx-large;
  margin-left: 50px;
`;

export const Img = styled.img`
  display: block;
  width: 75px;
  height: 75px;
  margin-left: 20px;
  border-radius: 5%;
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
export const Status = styled.span`
  position: relative;
  top: -25px;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  border: 1px solid #000;
  
  background-color: ${p => (p.status ? 'green' : 'red')};
`;
