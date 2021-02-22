import styled from 'styled-components';
import {Link as LinkR } from 'react-router-dom'
import {Link as LinkS} from 'react-scroll' 

import Image from './Image/overlay-bg.jpg';
 

export const SubPageBackContainer = styled.aside`
max-width:1320px;
height:86px;
margin:50px auto;

 
 
`;

export const SubScrollWrapper = styled.div`
   width:100%;
   border:1px solid #000;
`

export const SubPageDown = styled.div`
   background:red;
   position:fixed;
`

export const SubPageHeader = styled.div`
   width:100%;
   height:44px;
   padding-top:20px;
   padding-bottom:20px;
   border:1px solid #000;
   // background:url(${Image}) no-repeat;
   background:url(${Image}) no-repeat; 
   background-size:cover;
   
   // color:#fff;
   z-index:999;
 
 
 
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
 
   export const SubPageBar = styled.div`
      width:100%:
      height:200px;
 
   `
   
export const SubPageContainer = styled.div`
max-width:1296px;
hieght:44px;
margin:auto;
padding-left:12px;
display:flex;
// border:1px solid red;
padding:right:12px;
 
z-index:-999;

 

`;

export const SubPageLogo = styled.div`
  box-sizing:border-box;
  color:#fff;
  z-index:999;

`
export const SubPageLogo2 = styled.div`
  box-sizing:border-box;
  color:#fff;
  z-index:999;
  border:1px solid #000;
  position:fixed;
  left:0%;
 
`;

export const SubHeaderv = styled.div`
   border:1px solid #000;
   z-index:999;
   position:fixed;
   width:100%;
  //  border:1px solid #000;
  
  
  @media screen and (max-width:1600px) {
    width:99%;
    height:42px;
    background:${({scrollNav}) => (scrollNav ? 'red': '#000')};
    opacity:${({scrollNav}) => (scrollNav ? '90%': '100%')};
    position:${({scrollNav}) => (scrollNav ? 'fixed': 'fixed')};
    top:${({scrollNav}) => (scrollNav ? '0%': '0%')};
    left:1px;
   
    padding:12px 0px 12px 0px;
    transition:0.5s;
    z-index:1;
         
       
   }
  

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

  @media screen and (max-width:1600px) {
    //   display:none;
    position:fixed;
    border:1px solid red;
    color:#fff;
 
  }
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

  
`;


export const SubPageContainer2 = styled.div`
max-width:1296px;
hieght:44px;
margin:auto;
padding-left:12px;
display:flex;
padding:right:12px;
display:none;

// background:red;
z-index:-999;


@media screen and (max-width:1600px) {
    border:1px solid red;
    display:block;
    color:#fff;
 }

  `;

 
  export const SubPageNavUl = styled.div`
  max-width:691.750px;
  list-stlye:none;
  display:flex;
  z-index:999;
  position:fixed;
  `
  
  export const SubPageNavList = styled(LinkS)`
  float:right;
   margin-left:20px;
   padding:10px 10px 10px 20px;
  color:#000;
   text-decoration:none;
   z-index:999;
 
  @media screen and (max-width:1600px) {
    color:#fff;
    transition:transfrom 250ms ease-in-out;
 

    &:hover {
      border-bottom: 1px solid #fff;
      transition: 1s ease;
      transform: scaleX(1);
      transition:transform 10ms ease-in-out;
    }
    &:hover:after {
      transform: scaleX(1);
    }
    }
  }
 
`;

