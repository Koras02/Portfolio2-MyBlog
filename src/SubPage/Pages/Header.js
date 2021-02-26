import React from 'react';
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
  SubPageIntroLink
} from '../style/SubPageStyle';
import '../style/SubPageStyle.scss'

function Header() {
  return (

    <SubPageHeader class="fixed-top" id="header">
      <SubPageContainer class="container d-flex align-items-center justify-content-between">
        <SubPageLogo>
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