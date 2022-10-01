import styled from '@emotion/styled';

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

export const Status = styled.span`
  position: relative;
  top: -25px;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  border: 1px solid #000;
  
  background-color: ${p => (p.status ? 'green' : 'red')};
`;
