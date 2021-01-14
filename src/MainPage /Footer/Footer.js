import React from 'react';
import {
  FooterWrap,
  FooterHeaderH1,
  FooterHeaderP,
  FooterIcon,
  FooterIconBox,
  FooterIconWrapper,
  FooterH1,
  FaNaver,
  FaNaverH1
} from './FooterStlye'
import {FaFacebook,FaDiscord} from 'react-icons/fa';
 
 

function Footer() {
     return (
       <FooterWrap>
        <FooterHeaderH1>Copyright @ Kakao Corp.Allrights reserved</FooterHeaderH1>
        <FooterIconWrapper>   
        <FooterHeaderP>관련사이트</FooterHeaderP>
        </FooterIconWrapper>
        <FooterIconBox>
        <FooterIcon>
          <FooterH1 href="https://www.facebook.com" target="_blank" aria-label="facebook">
           <FaFacebook size="80px"/>
          </FooterH1>
        </FooterIcon>
        <FooterIcon>
          <FooterH1 
          href="https://blog.naver.com/wjdgh0727" 
          target="_blank" 
          aria-label="Naver"
          >
            <FaNaver>
              <FaNaverH1>
                Naver
              </FaNaverH1>
          </FaNaver>
          </FooterH1>
        </FooterIcon>
        <FooterIcon>
          <FooterH1 href="/" target="_blank" aria-label="Discord">
            <FaDiscord size="80px"/>
          </FooterH1>
        </FooterIcon>
        </FooterIconBox>
       </FooterWrap>
     );
 }


 export default Footer;