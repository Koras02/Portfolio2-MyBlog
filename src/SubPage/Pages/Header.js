import React, { useEffect, useState } from 'react';
import {
  SubPageHeader,
  SubPageContainer,
  SubPageLogo,
  SubPageLogoLink,
  SubPageNavbar,
  SubPageNavbarUl,
  SubPageNavbarli,
  SubPageBackground,
  SubPageTable,
  SubPageContainer2,
  SubPageIntroTitle,
  SubPageIntroContent,
  SubPageIntroList,
  SubPageIntroLink,
  SubPageWrapper,
} from '../style/SubPageStyle';
import '../style/SubPageStyle.scss'


export function Header() {
  const [scrollNav, setScrollNav] = useState(true);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);


  return (

    <SubPageHeader class="fixed-top" id="header" scrollNav={scrollNav}>
      <SubPageWrapper scrollNav={scrollNav}>
        <SubPageContainer class="container d-flex align-items-center justify-content-between">
          <SubPageLogo scrollNav={scrollNav}>
            <SubPageLogoLink to="/">MyBLOG</SubPageLogoLink>
          </SubPageLogo>
          <SubPageNavbar>
            <SubPageNavbarUl>
              <SubPageNavbarli>HOME</SubPageNavbarli>
              <SubPageNavbarli>ABOUT</SubPageNavbarli>
              <SubPageNavbarli>SERVICES</SubPageNavbarli>
              <SubPageNavbarli>WORK</SubPageNavbarli>
              <SubPageNavbarli>BLOG</SubPageNavbarli>
              <SubPageNavbarli>DROPDOWN</SubPageNavbarli>
              <SubPageNavbarli>CONTACT</SubPageNavbarli>
            </SubPageNavbarUl>
          </SubPageNavbar>
        </SubPageContainer>
      </SubPageWrapper>
      <SubPageBackground>
        <SubPageTable>
          <SubPageContainer2>
            <SubPageIntroTitle class="intro-title mb-4">
              Blog Details
                    </SubPageIntroTitle>
            <SubPageIntroContent>
              <SubPageIntroList>
                <SubPageIntroLink class="breadcrub-item">Home /</SubPageIntroLink>
              </SubPageIntroList>
              <SubPageIntroList>
                <SubPageIntroLink class="breadcrub-item"> Home / </SubPageIntroLink>
              </SubPageIntroList>
              <SubPageIntroList>
                <SubPageIntroLink class="breadcrub-item active"> Data </SubPageIntroLink>
              </SubPageIntroList>
            </SubPageIntroContent>
          </SubPageContainer2>
        </SubPageTable>
      </SubPageBackground>
    </SubPageHeader>

  );
}


export default Header;