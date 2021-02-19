 
import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';

export const SubVisualWrapper = styled.div`
   width:100%;
   height:100vh;
   background:#0dcaf0;
   // border:1px solid
   // position:absolute;
    overflow:hidden;
   z-index:999;
   opacity:90%;

   @media screen and (max-width:1500px) {
      overflow-y:scroll;
      max-height:190vh;
   }

 
`;

export const SubVisualHeadersWrapper = styled.div`
   width:100%;
   height:44px;
   padding:20px 0px 20px 0px;
   opacity:100%;
   position:relative;
   border:1px solid #000;
`;



export const SubVisualHeadersContainer = styled.div`
   max-width:1296px;
   padding:0px 12px 0px 12px;
   height: 44px;
 
  color:#fff;
  font:bold 24px/24px arial;
  position:relative;
   margin:auto;
`;

export const SubVisualH1 = styled.div`
  color:#000;
  position:relative;
  left:-20px;
  top:-20px;
  font:bold 24px/26px arial;
`

export const SubVisualP = styled.div`
   margin:auto;
   text-align:cneter;
   color:#000;
   font:bold 14px/16px arial;
   position:relative;
   left:40%;
   top:12px;
`

export const SubVisualHeadersLogo = styled.div`
   max-width:127.13px;
   height:13px;
//    border:1px solid #000;
   display:inline;
`;

export const SubVisualHeadersLogoLink = styled(LinkR)`
max-width:127.13px;
height:13px;
// border:1px solid #000;
text-decoration:none;
color:#fff;
// float:left;display:inline;
font:bold 24px/40px arial;
` 

export const SubVisualHeadersNav = styled.div`
   width:691.75px;
   height:44px;
   float:right;
   text-decoration:none;
//    border:1px solid #000;
`;

export const SubVisualHeadersNavUserList = styled.div`
   width:691.75px;
   height:44px;
   border:1px solid #000;
`;

export const SubVisualHeadersNavList = styled.div`
    display:inline;
`;

export const SubVisualHeadersNavListLink = styled(LinkR)`
    font:bold 14px/18px arial;
    margin:0px 20px 0px 10px;
    color:#fff;
    text-decoration:none;
 
     
    &:hover {
       padding:0px 0px 2px 0px;
       font:bold 14px/24px arial;
       border-bottom:2px solid  #fff;
       transition:1s;
      
    }
`

export const SubVisualHeadersNavListLink1 = styled(LinkR)`
text-decoration:none;
color:#fff;
padding:10px 30px 10px 0px;
font:bold 14px/16px arial;

 
`