 
import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';

export const SubVisualWrapper = styled.div`
   width:100%;
//    height:784.56px;
  height:100vh;
   background:#0dcaf0;
   position:relative;
   z-index:999;
   opacity:90%;
`;

export const SubVisualHeadersWrapper = styled.div`
   width:100%;
   height:44px;
   padding:20px 0px 20px 0px;
   opacity:100%;
   position:relative;

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
//    border:1px solid #000;
`;

export const SubVisualHeadersNavList = styled.div`
//    border:1px solid #000;
   display:inline;
   margin:10px 20px 0px 0px;
//    margin:20px;
//    padding:10px 10px 10px 0px;
`;

export const SubVisualHeadersNavListLink = styled(LinkR)`
   width:50.05px;
   height:24px;
//    border:1px solid #000;
   color:#fff;
   text-decoration:none;
   display:inline-flex;
   font:bold 10px/18px arial;
   margin-right:10px;
   margin-left:-0px;
//    text-algin:center;
//    position:relative;
   left:10px;
  &:nth-child() {
      color:red;
  }
`

export const SubVisualHeadersNavListLink1 = styled(LinkR)`
   width:50.05px;
   height:24px;
//    border:1px solid #000;
   color:#fff;
   text-decoration:none;
   display:inline-flex;
   font:bold 10px/18px arial;
   margin-right:15px;
   margin-left:1px;
//    text-algin:center;
   position:relative;
   left:25px;
  &:nth-child() {
      color:red;
  }
`