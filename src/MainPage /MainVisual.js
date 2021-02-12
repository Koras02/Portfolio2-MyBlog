import React, { useEffect, useState } from 'react';
import './style/MainVisual.scss'
import {
      MainVisualHeaderWrapper,
      MainVisualHeader,
      MainVisualHeaderH1,
      MainVisualHeaderP,
      MainVisualNavbar,
      MainbarContainer,
      Icon,
      MobileIcon,
      MainBtn,
      MainBtnLink,
      MainVisualHeaderP1,
      CloseIcon
} from './style/MainVisualStyle';
 
import { IconContext } from 'react-icons';
 
 

// 
export const MainVisual = ({ isOpen, toggle }) => {
     const [scrollNav, setScrollNav] = useState(true);
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
     return (
          <>
          <IconContext.Provider value={{ color: 'red'}}>
          <MainbarContainer isOpen={isOpen} onClick={toggle} scrollNav={scrollNav}>
              <MobileIcon>
                   <Icon  onClick={toggle}>
                        <CloseIcon />
                   </Icon>
              </MobileIcon>
                <MainVisualHeaderP1 to="home">CONTACT</MainVisualHeaderP1>
                <MainVisualHeaderP1>DRsOP DOWN</MainVisualHeaderP1>
                <MainVisualHeaderP1>BLOG</MainVisualHeaderP1>
                <MainVisualHeaderP1>WORK=</MainVisualHeaderP1>
                <MainVisualHeaderP1>SERVISCS</MainVisualHeaderP1>
                <MainVisualHeaderP1>ABOUT</MainVisualHeaderP1>
                <MainVisualHeaderP1>HOME</MainVisualHeaderP1>
          </MainbarContainer>
          <MainVisualHeaderWrapper scrollNav={scrollNav}>
             <MainVisualHeader>
                <MainVisualHeaderH1>My Blog</MainVisualHeaderH1>
               <MainVisualNavbar>
                <MainVisualHeaderP 
                to="home"
                spy={true}
                smooth={true}
                offset={-180}
                >HOME
                </MainVisualHeaderP>
                <MainVisualHeaderP
                to="About"
                spy={true}
                smooth={true}
                offset={-85}
                >ABOUT
                </MainVisualHeaderP>
                <MainVisualHeaderP
                to="Services"
                spy={true}
                smooth={true}
                offset={-228}
                >
                SERVISCS
                </MainVisualHeaderP>
                <MainVisualHeaderP>
                 WORK
                 </MainVisualHeaderP>
                <MainVisualHeaderP>BLOG</MainVisualHeaderP>
                <MainVisualHeaderP>DROP DOWN</MainVisualHeaderP>
                    <MainVisualHeaderP>CONTACT</MainVisualHeaderP>
                <MainBtn>
                     <MainBtnLink onClick={toggle}>Sign in</MainBtnLink>
                </MainBtn>
                </MainVisualNavbar>
             </MainVisualHeader>
          </MainVisualHeaderWrapper>
          </IconContext.Provider>
          </>
     );
 }


 export default MainVisual;