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
      margin-left:-240px;
      font:bold 18px/18px arial;
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
      margin-right:110px;
      margin-left:-80px;
      font:bold 14px/16px arial;
   }
   @media screen and (max-width:480px) {
      margin-right:110px;
      margin-left:-80px;
      font:bold 12px/16px arial;
   }
 `;