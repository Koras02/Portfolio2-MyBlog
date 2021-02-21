import styled from 'styled-components';
// import {Link as LinkR} from 'react-router-dom';
import Image from './overlay-bg.jpg';
import Image2 from './Image/Building.jpg';
import Image3 from './Image/jellyFish.jpg';

export const SubPageWrapper = styled.div`
  width:100%;
  height:100vh;
  background:blue;
  z-index:-999;
//   opacity:100%;
 overflow:hidden;

 @media screen and (max-width:1600px) {
    overflow-y:scroll;
 }
`;

export const SubPageOverflow = styled.div`
width:100%;
height:100vh;;
border:1px solid #000;
background:blue;
opacity:80%;
position:relative;
z-index:999;
 
`;
 

export const SubVisualContainer = styled.div`
width:1320px;
height:563.77px;
border:1px solid #000;
margin:auto;
`;







export const SubVisual = styled.div`
  width:100%;
  height:579.77px;
  border:1px solid #000;
  background:#fff;
`;

export const SubVisualSection = styled.div`
  width:100%;
  height:579.77px;
  border:1px solid #000;

`;


export const SubVisualRow = styled.div`
   max-width:1320px;
   height:536.77px;
   border:1px solid #000;
   margin:auto;
`;

export const SubVIsualCol1 = styled.div`
   max-width:880px;
   height:539.77px;
   float:left;
   border:1px solid red;
   z-index:999;
`;


export const BackgroundBg1 = styled.div`
max-width:880px;
height:539.77px;
background:url(${Image}) no-repeat;
background-size:cover;
// border:1px solid blue;
z-index:999;
`

export const BackgroundBg2 = styled.div`
max-width:880px;
height:539.77px;
background:url(${Image2}) no-repeat;
background-size:cover;
// border:1px solid blue;
z-index:999;
`

export const BackgroundBg3 = styled.div`
max-width:880px;
height:539.77px;
background:url(${Image3}) no-repeat;
background-size:cover;
// border:1px solid blue;
`


export const SubVisualCol2 = styled.div`
 
   height:539.77px;
//    border:1px solid blue;
   padding:0px 12px 0px 12px;
   margin-top:24px;
   float:left;
//    background:red;

`;
 

export const SubVisualColInfo = styled.div`
  width:356px;
  height:201px;
  display:block;
  padding:30px 30px 30px 0px;
  border:1px solid #000;
  font:bold 18px/24px arial;
`;

export const SubVisualColInfoH3 = styled.div`
  padding-bottom:20px;
  margin-bottom:20px;
`;

export const SubVisualUl = styled.div`
   width:356px;
   height:118px;
   margin-bottom:16px;
   border:1px solid #000;
`;

export const SubVisualList = styled.div`
    font:bold 14px/24px arial;
`

export const SubVisualDescripition = styled.div`
   width:416px;
   height:256px;
   padding-top:30px;

`;

export const SubVisualDescriptionH2 = styled.div`
   width:416px;
   height:62px;
   margin-bottom:d0px;
   display:block;
   font:bold 22px/24px arial;
`;

export const SubVisualDescriptionP = styled.div`
   width:409px;
   height:138px;
   border:1px solid #000;
   margin-bottom:16px;
   font:14px/24px arial;
`;

export const SubVisualFooter = styled.div`
    width:100%;
    height:52.797px;
    padding:25px 0px 25px 0px;
    background:red;
`;

export const SubVisualFooterContainer = styled.div`
   max-width:1320px;
   height:52.8px;
   margin:auto;
   border:1px solid #000;
`;

export const SubVisualFooterCol = styled.div`
  max-width:1320px;
  height:52.8px;
  margin:auto;
`;

export const SubVisualBox = styled.div`
  max-width:1296px;
  height:52.8px;
  margin:auto;
`;

export const SubVisualP = styled.div`
   max-width:1296px;
   height:24px;
   margin:auto;
   text-align:center;
   font:bold 14px/24px arial;
   color:#fff;
   `;

export const SubVisualCreadits = styled.div`
  max-width:1296px;
  height:24px;
  text-align:center;
  margin:auto;
  font:bold 14px/24px arial;
  color:#fff;
` 
export const SubIntroTitle = styled.div`
 
`