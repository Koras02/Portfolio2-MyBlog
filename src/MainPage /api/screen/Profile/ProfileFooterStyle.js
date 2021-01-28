import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll';

export const FooterContainer = styled.div`
    width:100%;
    height:500px;
    text-decoration:none;
    border:1px solid #000;
    text-align:center;
    background:#000;
    overflow:hidden   // 높이값 삭제
            
    @media screen and (max-width:480px) {
         margin-top:20px;
    }
`
 
export const FooterLinkWrapper = styled.div`   
    width:100%;
    margin:auto;
    border:1px solid #000;
    background:#000;
    overflow:hidden   // 높이값 삭제
 
`;


export const FooterH1 = styled(LinkS)`
margin:50px auto;
text-decoration:none;
margin-lfet:100px;
color:#fff;
display:block;
cursor:pointer;

`

export const FooterLinkItems = styled.div`
   display:inline-block;
   text-align:center;
   margin:30px;

   @media screen and (max-width:960px) {
      margin-right:14px;
      margin-left:-0px;
   }
   @media screen and (max-width:760px) {
    margin-right:60px;
    margin-left:-20px;
    margin-bottom:-20px;

   }
   `;
   
   export const FooterLinkTitle = styled.div`
   text-decoration:none;
   color:#fff;
   margin-right:-100px;
   font:bold 18px/24px arial;
   
   @media screen and (max-width:1600px) {
      #fff;
   }
   `;
   
   export const FooterLink = styled(LinkR)`
   text-decoration:none;
   color:#fff;
   margin-top:20px;
   margin-left:100px;
   display:block;
   font:bold 16px/35px arial;
   oveflow:hidden;
   

 
   @media screen and (max-width:1200px) {
    color:red;
   }

`;
export const FooterLink1 = styled.a`
    text-decoration:none;
    color:#fff;
    margin-top:20px;
    margin-left:100px;
    display:block;
    font:bold 16px/35px arial;
    
    @media screen and (max-width:1600px) {
        color:#fff;
       }
`;
 
 