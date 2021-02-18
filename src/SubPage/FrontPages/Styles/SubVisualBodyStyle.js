import styled from 'styled-components';
import Image from '../pages/Images/Coffie.jpg';
import Image2 from '../pages/Images/Valantain.jpg'

export const SubVisualBodyWrapper = styled.div`
  width:100%;
  height:579.77px;
  border:1px solid #000;
  margin-top:5px;
`;

export const SubVisualBodyContainer = styled.div`
  width:100%;
  height:539.766px;
  padding-top:40px;
  border:1px solid red;
`;

export const SubVisualBodyRow = styled.div`
   max-width:1320px;
   height:536.766px;
   border:1px solid #000;
   margin:-24px -12px 0x -12px;
   margin:auto;
   outline:none;
`;

export const SubVisualBodyCol = styled.div`
   max-width:856px;
   height:539.766px;
   padding:0px 12px 0px 12px;
   border:1px solid #000;
   outline:none;

`;

export const SubVisualBackGround = styled.image`
   max-width:856px;
   height:539.77px;
   border:1px solid #000;
`;

export const Form2 = styled.div`
width:856px;
height:539.77px;
outline:none;
padding:0;
margin:0;
`;

export const Img = styled.div`
  width:856px;
  height:539.77px;
  background-image:url(${Image});
  background-size:cover;

`
export const Img2 = styled.div`
  width:856px;
  height:539.77px;
  background-image:url(${Image2});
  background-size:cover;
`