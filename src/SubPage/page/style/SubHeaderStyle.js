import styled from 'styled-components';
import {Link as LinkR } from 'react-router-dom'
import {Link as LinkS } from 'react-scroll';
// import Image from './Image/overlay-bg.jpg';
 

export const SubPageBackContainer = styled.div`
max-width:1320px;
height:86px;
margin:auto;
 
 
`;

export const SubPageHeader = styled(LinkS)`
   width:100%;
   height:44px;
      background:${({scrollNav}) => (scrollNav ? 'blue': 'blue')};
    opacity:${({scrollNav}) => (scrollNav ? '90%': '100%')};
    position:${({scrollNav}) => (scrollNav ? 'fixed': 'fixed')};
    // top:${({scrollNav}) => (scrollNav ? '10px': '20px')};
   padding-top:20px;
   transition:.0.5s;
   padding-bottom:20px;
   border:1px solid #000;
 
 
   z-index:999;

   @media screen and (max-width:1600px) {
     background:${({scrollNav}) => (scrollNav ? '#fff': 'blue')};
    opacity:${({scrollNav}) => (scrollNav ? '90%': '100%')};
    position:${({scrollNav}) => (scrollNav ? 'fixed': 'fixed')};
    // top:${({scrollNav}) => (scrollNav ? '10px': '20px')};
    transition:.0.5s;
   }
     
    
 
   `;


export const SubPageBackContainerH1 = styled.div`
color:#000;
position:relative;
left:40%;
top:20%;
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
   
   export const SubIntroTitle = styled.div`
 
   `
 
   
export const SubPageContainer = styled.div`
max-width:1296px;
hieght:44px;
margin:auto;
//    border:1px solid red;
padding-left:12px;
display:flex;
padding:right:12px;
// background:red;
z-index:-999;


`;

export const SubPageLogo = styled.div`
  box-sizing:border-box;
  color:#fff;
  z-index:999;

`

export const SubPageLogoLink = styled(LinkR)`
  text-decoration:none;
//   color:#fff;
  font:bold 18px/24px arial;
//   display:block;
  margin-left:20px;
  float:left;
  z-index:1;
  color:#000; 

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

