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
      MainVisualHeaderP2,
      CloseIcon,
      MenuWrapper,
      MenuWrapperLink
} from './style/MainVisualStyle';
import { IconContext } from 'react-icons';
// import Menu from './Menu';
// import Menu from './Menu';
 
 

// 
export const MainVisual = ({ isOpen, toggle }) => {
     const [scrollNav, setScrollNav] = useState(true);
     const [mouseover,setToggle] = useState(false);
     const changeNav = () => {
          if(window.scrollY >= 80) {
               setScrollNav(true)
          } else {
               setScrollNav(false)
          }
     };
     
     const onToggle = () => {
          setToggle(mouseover => !mouseover);
     
     }
     useEffect (() => {
         window.addEventListener('scroll', changeNav);
     }, [])

 
     return (
          <>
          <IconContext.Provider value={{ color: 'red'}}>
          <MainbarContainer isOpen={isOpen} onClick={toggle} scrollNav={scrollNav} >
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
                offset={-80}
                >
                SERVISCS
                </MainVisualHeaderP>
                <MainVisualHeaderP
                to="Work"
                spy={true}
                smooth={true}
                offset={-80}
                >
                 WORK
                 </MainVisualHeaderP>
                <MainVisualHeaderP
                to="BLOG"
                spy={true}
                smooth={true}
                offset={-80}
                >
               BLOG</MainVisualHeaderP>
                <MainVisualHeaderP2 
                onMouseOverCapture={onToggle}
                className="DROPDOWN"
                >DROP DOWN
                </MainVisualHeaderP2>
               <MainVisualHeaderP
               to="footer"
               spy={true}
               smooth={true}
               offset={-80}
               >CONTACT</MainVisualHeaderP>
                <MainBtn>
               <MainBtnLink>Sign in</MainBtnLink>
                </MainBtn>
                </MainVisualNavbar>
             </MainVisualHeader>
               {mouseover && 
             <MenuWrapper>
                <MenuWrapperLink to="/">
                    Drop Down 1
                </MenuWrapperLink>
                <br/>
                <MenuWrapperLink to="/">
                    Drop Down 1
                </MenuWrapperLink>
                <br/>
                <MenuWrapperLink to="/">
                    Drop Down 1
                </MenuWrapperLink>
                <br/>
                <MenuWrapperLink to="/">
                    Drop Down 1
                </MenuWrapperLink>
                <br/>
                <MenuWrapperLink to="/">
                    Drop Down 1
                </MenuWrapperLink>
             </MenuWrapper>
               }
          </MainVisualHeaderWrapper>
          </IconContext.Provider>
          </>
     );
 }


 export default MainVisual;