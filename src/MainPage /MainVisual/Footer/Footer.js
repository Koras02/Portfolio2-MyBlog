 import React from 'react';
import { 
    FooterContainer, 
    FooterLink, 
    FooterLink1, 
    FooterH1,
    FooterLinkItems, 
    FooterLinkTitle, 
    FooterLinkWrapper, 
 } from './FooterStyle';
 import {animateScroll as scroll} from 'react-scroll';

export function Footer() {
    const toggleHome = () => {
        scroll.scrollToTop();
    }
     return (
        <FooterContainer id="footer">
            <FooterLinkWrapper>
            <FooterH1 to="/" onClick={toggleHome}>JungHo's Blog</FooterH1>
                <FooterLinkItems>
                    <FooterLinkTitle to="">사이트 바로가기</FooterLinkTitle>
                    <FooterLink to="/">홈페이지</FooterLink>
                    <FooterLink1 
                    href="https://discord.com/channels/798765103105048657/798765103855173645"
                    >디스코드</FooterLink1>
                    <FooterLink to="/">네이버 블로그</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>포토폴리오</FooterLinkTitle>
                    <FooterLink to="/">깃허브1</FooterLink>
                    <FooterLink to="/">깃허브2</FooterLink>
                    <FooterLink to="/">깃허브3</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>개인 작업물 보기</FooterLinkTitle>
                    <FooterLink to="/">source1</FooterLink>
                    <FooterLink to="/">source2</FooterLink>
                    <FooterLink to="/">source3</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>개발자 로드맵</FooterLinkTitle>
                    <FooterLink to="/">Junior</FooterLink>
                    <FooterLink to="/">Front-End</FooterLink>
                    <FooterLink to="/">Back-End</FooterLink>
                </FooterLinkItems>
                </FooterLinkWrapper> 
        </FooterContainer>
     );
 }


 export default Footer;