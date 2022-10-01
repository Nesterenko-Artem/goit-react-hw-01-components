import styled from '@emotion/styled';

export const Wraper = styled.div`
  width: 360px;
  height: 400px;
  margin: 50px auto 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  // color: rgb(104, 102, 102);
  border: 1px solid rgb(117, 116, 116);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 20px;
  font-size: 18px;
  line-height: 1.2;
`;
export const Avatar = styled.img`
  width: 150px;
  border-radius: 50%;
  // background-color: rgb(220, 215, 215);
  border: 1px solid rgb(117, 116, 116);
`;
export const Text = styled.p`
   font-size: 22px;
   line-height: 1.2;
   font-weight: 500;
   color: rgb(1, 1, 1);
 `;

export const List = styled.ul`
  display: flex;
  // justify-content: center;
  // align-items: center;
  // padding-left: 20px;
  // padding-right: 20px;
  background-color: rgb(220, 215, 215);
  border-top: 1px solid rgb(117, 116, 116);  
`;
export const StatsItem = styled.li`
   flex-basis: calc(100% / 3);
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   padding-top: 20px;
   padding-bottom: 20px;
   gap: 10px;
 `;
export const Label = styled.span`
    font-size: 14px;
    line-height: 1.2;
  `;
export const Quantity = styled.span`
    font-size: 18px;
    line-height: 1.2;
    font-weight: 500;
    color: rgb(1, 1, 1);
  `;