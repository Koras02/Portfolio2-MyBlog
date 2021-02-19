import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import Image from './Background.jpg'

export const SubPageWrapper = styled.div`
    width:100%;
    height:84px;
    background-color:#efefef;
    color:#4e4e4e;
    padding-top:20px;
    z-index:-991;
    opacity:80%;
    padding:bottom:20px;
`;

export const SubpageContainer = styled.div`
     max-width:1320px;
     height:44px;
     margin:auto;
     border:1px solid #000;
     align-items:center;
     display:flex;
     padding:0px 12px 0px 12px;
     z-index:999;
`
 
export const SubPageLogo = styled.div`
  font-siz:24px;
  margin:0;
  padding:0;
  font-weight:600;
  letter-spacing: 1px;
  z-index:999;
`;

export const SubPageLogoLink = styled(LinkR) `
   font-size:20px;
   margin:0;padding:0;
   font-weight:600;
   letter-spacing:1px;
   color:#000;
   z-index:1;
   text-decoration:none;
`

export const SubPageNavLink = styled.div`
  padding:0;
  position:relative;
  display:flex;
  flex-wrap:wrap;
  align-items:center;
  z-index:1;
  justify-content:space-between;
`

export const SubPageNavUl = styled.ul`
   margin:0;
   padding:0;
   display:flex;
   list-style:none;
   align-items:center;
`;

export const SubPageNavList = styled.div`
   white-space:nowrap;
   padding:0px 0px 10px 30px;
   position:relative;
   left:70%;
   top:10px;
   `;
   
   export const SubPageLink = styled(LinkR)`
   display:flex;
   align-items:center;
   justify-content:space-between;
   text-decoration:none;
//    color:#000;
   color:#fff;
  font-size:16px;
  font-weight:600;
  padding:0;
  white-space:nowrap;
  transition:0.3s;
  letter-spacing: 0.4px;
  position:relative;
  z-index:1;
  top:-20px;

 
  text-transition: uppercase;

  :berfore {
      content: "";
      position:absolute;
      height:2px;
      bottom: -6px;
      left:0;
      width:0;
      background-color:#fff;
      visibility: hidden;
      transition: all 0.3 ease-in-out 0s;
  }
`

export const SubVisualSingleImage = styled.div`
  width:100%;
  height:0px;
  background-image: url(${Image});
  background-position:fixed;
  background-position-x:50%;
  background:position-y:50%;
  background-repeat:no-repeat;
  background-size: cover;
  z-index:1;;
`;

export const MainVisualMain = styled.div`
  width:100%;;
  height:579.77px;
  border:1px solid #000;
  position:relative;
  
`;

export const MainVisualSection = styled.div`
  width:100%;
  height:539.766px;
  padding-top:40px;
  border:1px solid #000;
`

export const MainVisualContainer = styled.div`
   max-width:1320px;
   hieght:563.77px;
   margin:auto;
   border:1px solid #000;
`;

export const MainVisualRow = styled.div`
   max-width:1320px;
   height:563.77px;
   border:1px solid #000;
   display:inline-flex;
`;

export const MainVisualCol = styled.div`
   width:856px;
   height:539.77px;
   border:1px solid #000;
   display:grid;
   margin-top:24px;
   padidng:0px 12px 0px 12px;
   outline:none;
`;

export const MainVisualCol2 = styled.div`
  width:416px;
  height:539.77px;
  border:1px solid #000;
  display:grid;
  padding:0px 12px 0px 12px;
  margin-top:24px;
`


export const Col1 = styled.div`
width:820px;
height:539.77px;
  background:url(${Image});
  background-size:cover;
`


export const Col2 = styled.div`
width:820px;
height:539.77px;
background:url(${Image}) no-repeat;
background-size:cover;
`
