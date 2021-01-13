import React from 'react';
import {FooterWrap,FooterHeaderH1,FooterHeaderP,FooterIcon} from './FooterStlye'

function Footer() {
     return (
       <FooterWrap>
        <FooterHeaderH1>Copyright @ Kakao Corp.Allrights reserved</FooterHeaderH1>
        <FooterHeaderP>관련사이트</FooterHeaderP>
        <FooterIcon>Github</FooterIcon>
        <FooterIcon>NavverBlog</FooterIcon>
        <FooterIcon>Discord</FooterIcon>
       </FooterWrap>
     );
 }


 export default Footer;