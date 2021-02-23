import styled from 'styled-components';
import Image from '../Form/Images/Beard.jpg'

export const WorkForm2Wrapper = styled.div`
   width:1320px;
   height:832px;
   border:1px solid #000;
`;

export const WorkForm2Col = styled.div`
   width:400px;
   height:416px;
   display:inline-flex;
   border:1px solid #000;
   padding:0px 10px 0px 10px;
   margin:0px 2px 0px 10px;
`;

export const WorkFormBox = styled.div`
   width:416px;
   height:368px;
   margin-bottom:48px;
//    border:1px solid #000;
`;

export const WorkFormImageLink = styled.div`
width:410px;
height:260px;
margin-bottom:48px;
border:1px solid #000;
background:url(${Image}) no-repeat;
background-size:cover;
box-sizing:border-box;

`;

export const WorkFormImg = styled.div`
   width:416px;
   height:260px;
   border:1px solid red;
`

export const WorkFormImage2 = styled.div`
    width:416px; 
    height:260px;
    border:1px solid blue;
`

export const WorkFormContent = styled.div` 
  width:380px;
  height:60px;
  padding:30px 16px 16px 12px;
  position:relative;
  bottom:50px;
  border:1px solid #000;
`;

export const WorkFormRow = styled.div`
  width:410.91px;
  height:60px;
  border:1px solid #000;
  color:red;
`;

export const WorkFormRowLeft = styled.div`
  width:200.922px;
  height:60px;
  padding:0px 12px 0px 12px;
  float:left;
  border:1px solid #000;
`;

export const WorkFormRowLeftTitle = styled.div`
   display:block;
   font:bold 18px/24px arial;
`;

export const WorkFormRowLeftCategory = styled.div`
   display:inline;
   font:12px/18px arial;
   color:blue;
`;

export const WorkFormRowRight = styled.div`
    width:112.953px;
    height:60px;
    padding:0px 12px 0px 12px;
    float:right;
    // border: 1px solid #000;
`;

export const WorkFormIconWrapper = styled.div`
   width:40.016px;
   height:60px;

`;

export const WorkFormLink = styled.div`
   width:40.02px;
   height:40px;
   border:4px solid blue;
   float:right;
   margin:auto auto;
   position:absolute;
   left:85%;
   border-radius:100% 100%;
`