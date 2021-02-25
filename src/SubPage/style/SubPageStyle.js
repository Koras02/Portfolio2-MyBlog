import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom'
import Image from './Images/overlay-bg.jpg';

 

export const SubPageHeader = styled.div`
   transition: all 0.5s;
   z-index:997px;
   padding:20px 0;
   width:100%;
   height:44px;
//    padding: 0px 20px 0px 20px;
`

export const SubPageContainer = styled.div`
  max-width:1296px;
  height:44px;
  padding:0px 12px 0px 12px;
  margin:auto;
  align-items:center;
  box-sizing:border-box;
  color:rgb(78,78,78);
  display:flex;
  font:bold 16px/24px arial;
  max-width:1320px;
  justify-content:space-between;

  @media screen and (min-width:1400px) {
      max-width:1320px;
  }



`

export const SubPageLogo = styled.div`
   font-size:28px;
   margin:0;
   padding:0;
   font-weight:600;
   letter-spacing:1px;
`;

export const SubPageLogoLink = styled(LinkR)`
   text-decoration:none;
   transition: all 0.5 ease-in-out;
`;
export const SubPageNavbar = styled.div`
   padding:0;
   position:relative;
   display:flex;
   flex-wrap:wrap;
   justify-content:space-between;

`

 
export const SubPageNavbarUl = styled.ul`
    list-style:none;
    margin:0;
    padding:0;
    display:flex;
    list-style:none;
    align-items:center;
`

export const SubPageNavbarli = styled.li`
   white-space:nowrap;
   padding:10px 0 10px 30px;
   display:list-item;
   text-align: -webkit-match-parent;
   box-sizing:border-box;
   display:list-item;
   font:bold 18px/24px arial;
`

export const SubPageBackground = styled.div`
    // background:red;
    width:100%;
    height:100px;
    background-image:url(${Image});
    background-attacthment:fixed;
    background-size:cover;
    background-repeat:no-repeat;
    background-position:center center;
    position:relative;
    bottom:70px;
    z-index:-99;
`

export const SUbPageBackgroundOverlay = styled.div`
    position:absolute;
    top:0;
    left:0;
    padding:0;
    opacity: .7;
    box-sizing:border-box;
    background:red;
    width:100%;
    height:100%;
`

export const SubPageTable = styled.div`
   width:100%;
   height:100%;
   display:table;
   border:1px solid #000;
`;

export const SubPageContainer2 = styled.div`
   max--width:1320px;
   height:86px;
   padding:0px 12px 0px 12px; 
   display:block;
   box-sizing:border-box;
   margin:auto;
   color:#000;


   @media screen and (min-width: 1400px) {
       max-width:1320px;
   }
`

export const SubPageIntroTitle = styled.div`
width:1296px;
height:38px;
   box-sizing:border-box;
//    margin-bottom:24px;
   display:block;
   font:bold 32px/38px arial;
   margin-bottom:1.5rem;
   @media (min-width:1200px) {
       font-size 2rem;
   }
`

export const SubPageIntroContent = styled.div`
   max-width:1296px;
   height:24px;
   margin-bottom:16px;
   justify-content:center;
   display:flex;
   list-style:none;

`

export const SubPageIntroList = styled.div`
   box-sizing:border-box;
   display:list-item;
   text-align:--webkit-match-parent;
   margin-left:10px;
`

export const SubPageIntroLink = styled(LinkR)`
    color:#1e1e1e;
    transition: all 0.5s ease-in-out;
    cursor:pointer;
    font-size:16px;
    font-weight:400px;
    line-height:24px;
`;



 