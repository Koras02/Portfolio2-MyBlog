import React from 'react';
import {FooterWrap,FooterLeft,FooterLeftH1,FooterLeftP,FooterRight,FooterRightH1,FooterRightP} from './FooterStlye'

function Footer() {
     return (
       <FooterWrap>
           <FooterLeft>
               <FooterLeftH1>MyPortfolio Blog</FooterLeftH1>
               <FooterLeftP>Tistory</FooterLeftP>
               <FooterLeftP>Copyright @ KaKao Corp. All rights reserved.</FooterLeftP>
           </FooterLeft>
           <FooterRight> 
               <FooterRightH1>블로그 소개</FooterRightH1>
               <FooterRightP>사용언어</FooterRightP>
               <FooterRightP>웹개발 배우기</FooterRightP>
           </FooterRight>
       </FooterWrap>
     );
 }


 export default Footer;