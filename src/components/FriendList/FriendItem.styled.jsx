import styled from '@emotion/styled';

export const InfoName = styled.p`
  font-size:xx-large;
      margin-left: 50px;
`;

export const Img = styled.img`
  display: block;

`;

export const Status = styled.span`
  position: relative;
  top:-28px;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background-color:${p => (p.status ? 'green' : 'red')};
`;