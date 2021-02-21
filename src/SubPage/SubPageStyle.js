import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import Image from './overlay-bg.jpg';
import Image2 from './Building.jpg';
import Image3 from './jellyFish.jpg';

export const SubPageWrapper = styled.div`
  width:100%;
  height:100vh;
  background:blue;
  z-index:999;
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
z-index:1;
 
`;
export const SubPageHeader = styled.div`
   width:100%;
   height:44px;
   padding-top:20px;
   padding-bottom:20px;
   border:1px solid #000;
   // background:url(${Image}) no-repeat;
   background:url(${Image}) no-repeat; 
   background-size:cover;
   
   color:#000;
   z-index:1;
   `;
   
   export const SubPageContainer = styled.div`
   max-width:1296px;
   hieght:44px;
   margin:auto;
   //    border:1px solid red;
   padding-left:12px;
   display:flex;
   padding:right:12px;
   // background:red;
   z-index:999;
 
  
`;

export const SubPageLogo = styled.div`
  box-sizing:border-box;
  color:#fff;
  z-index:999;

`

export const SubPageLogoLink = styled(LinkR)`
  text-decoration:none;
  color:#fff;
  font:bold 18px/24px arial;
  display:block;
  margin-left:20px;
  float:left;
  z-index:999;
  color:green;
 
  `;
  
  export const SubPageNavbar = styled.div`
  max-width:691.750px;
  height:44px;
//   border:1px solid #000;
  color:#fff;
  float:right;
  position:relative;left:50%;
  bottom:5px;
  z-index:999;
:;
   
  `;
  
  export const SubPageNavUl = styled.div`
  max-width:691.750px;
  list-stlye:none;
  display:flex;
  z-index:999;
  
  `
  
  export const SubPageNavList = styled(LinkR)`
  float:right;
   margin-left:20px;
   padding:10px 20px 10px 0px;
  color:#000;
   text-decoration:none;
   z-index:999;
`;




export const SubPageBackHeader = styled.div`
//  :;
//    background:#000;  
   box-sizing:border-box;
   max-width:100%;
   height:102px;
   border:1px solid #000;
   position:relative;
   top:-150%;
   //  background:red;
   `;
   
   export const SubPageBackTable = styled.div`
   max-width:100%;
   height:102px;
   border:1px solid #000;
   color:#000;
   // background:red;
   `;
   
   export const SubPageBackContainer = styled.div`
   max-width:1320px;
  height:86px;
  margin:auto;
`;

export const SubIntroTitle = styled.div`
 
`

export const SubPageBackContainerH1 = styled.div`
   color:#000;
   position:relative;
   left:40%;
   top:20%;
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

export const SubVisualContainer = styled.div`
   width:1320px;
   height:563.77px;
   border:1px solid #000;
   margin:auto;
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
z-index:1;
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