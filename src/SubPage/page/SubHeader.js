 import React, { useEffect, useState } from 'react';
import { 
    SubIntroTitle, 
    SubPageBackContainer, 
    SubPageBackContainerH1,
     SubPageBackHeader, 
     SubPageBackTable, 
     SubPageContainer, 
     SubPageHeader, 
     SubPageLogo, 
     SubPageLogoLink, 
     SubPageNavbar, 
     SubPageNavList, 
     SubPageNavUl 
    } from './style/SubHeaderStyle';
    import { animateScroll as scroll } from 'react-scroll';

export const SubHeader = ({ isOpen })  => {
    const [scrollNav,setScrollNav] = useState(true);
    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    };

    useEffect (() => {
        window.addEventListener('scroll', changeNav);
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop()
    }
     return (
         <>
        <SubPageHeader scrollNav={scrollNav} isOpen={isOpen}>
        <SubPageContainer>
            <SubPageLogo>
                <SubPageLogoLink to="/Portfolio2-MyBlog" onClick={toggleHome}>
                    MyBLOG
                </SubPageLogoLink>
            </SubPageLogo>
                <SubPageNavbar>
                    <SubPageNavUl>
                        <SubPageNavList to="/">
                          HOME
                        </SubPageNavList>
                        <SubPageNavList>
                          ABOUT
                        </SubPageNavList>
                        <SubPageNavList>
                         SERVICES
                       </SubPageNavList>
                        <SubPageNavList>
                           WORK
                       </SubPageNavList>
                       <SubPageNavList>
                           BLOG
                       </SubPageNavList>
                       <SubPageNavList>
                           CONTACT
                       </SubPageNavList>
                    </SubPageNavUl>
                </SubPageNavbar>
        </SubPageContainer>
      <SubPageBackHeader scrollNav={scrollNav}>
        <SubPageBackTable>
           <SubPageBackContainer>
            <SubIntroTitle>
              MyBlog Portfolio Details
              </SubIntroTitle>
           <SubPageBackContainerH1>
               Home/Blog
           </SubPageBackContainerH1>
           </SubPageBackContainer>
        </SubPageBackTable>
      </SubPageBackHeader>
      </SubPageHeader>
      </>
     );
 }


 export default SubHeader;