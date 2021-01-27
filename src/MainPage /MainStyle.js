import styled from 'styled-components';
import {Link as LinkS} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';

export const HomeWrapper = styled.div`
  width:100%;
  height:100px; 
  background: ${({scrollNav}) => (scrollNav ? '#000': 'red' )};
  text-decoration:none;
  position:fixed;
  top:${({scrollNav}) => (scrollNav ? '0%': '-200%')};
  margin:0px;
  transition:${({scrollNav}) => scrollNav ? '2s' : '3s'};
  border-bottom:1px solid #fcfcfc;
  overflow-:hidden;
  
  }
`;
export const HomeHeaderH1 = styled(LinkR)`
   position:relative;
   top:50%;
   left:50%;
   margin-right:100px;
   margin-left:-380px;
   text-decoration:none;
   color:#fff;font:bold 18px/24px arial;
   overflow:hidden;

   @media screen and (max-width:860px) {
      margin-left:-300px;
      color:red;
   }
   @media screen and (max-width:640px) {
      margin-left:-220px;
      color:#fff;
      font:bold 14px/18px arial;
   }
   @media screen and (max-width:480px) {
      margin-left:-200px;
      font:bold 14px/16px arial;
   }
`;

 export const HomeHeaderP = styled(LinkS)`
   position:relative;left:50%;
   top:50px;
   text-decoration:none;
   margin-top:100px;
   margin-right:100px;
   margin-left:-20px;
   color:#fff;
   overflow:hidden;
   font:bold 18px/20px arial;

   &:hover {
      color:red;
   }
   &:nth-child(2) {
      color:red;
   }

   @media screen and (max-width:860px) {
      margin-right:40px;
   }

   @media screen and (max-width:640px) {
      margin-right:70px;
      margin-left:-60px;
      font:bold 14px/16px arial;
      &:nth-child(4) {
         display:noen
      }
   }
   @media screen and (max-width:480px) {
      margin-right:110px;
      margin-left:-90px;
      font:bold 10px/16px arial;
   }
 `;

 export const HomeHeaderButton = styled.div`
   display:none;
   transition: all 0.2s ease-in-out;
   @media screen and (max-width:640px) {
      display:block;
      color:red;
      position:absolute;
      left:50%;
      margin-left:180px;
      font:15px/14px arial;
      top:55px;
      cursor:pointer;
      color:powderblue;
      transition: all 0.2s ease-in-out;
   }
   @media screen and (max-width:480px) {
      display:block;
      color:red;
      position:absolute;
      left:50%;
      margin-left:140px;
      font:10px/14px arial;
      top:55px;
      cursor:pointer;
      color:powderblue;
      transition: all 0.2s ease-in-out;
   }

   &:hover {
      transition: all 0.2s ease-in-out;
      background:#fff;
   }
 `