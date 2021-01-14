import React, {useState,useCallback,useEffect} from 'react';
import Main from '../Main';
import Home from './MainvisualMenu/Home';
import {animateScroll as scroll} from 'react-scroll';
import { 
  MainvisualWrapper, 
  MainVisualHeader,
  MainVisualH1,
  MainVisualP,
  MainVisualP2,
  MainVisualPLinks
} from './MainVisualStyle';
import Menu from './Visual/Menu';

export function MainHeader() {
    const [mouseup,setToggle] = useState(false);
    const [scrollNav,setScrollNav] = useState(true);

      const changeNav = () => {
        if(window.scrollY >= 80) {
          setScrollNav(false)
        } else {
          setScrollNav(true)
        }
      };
      useEffect(() => {
        window.addEventListener('scroll', changeNav);
      }, []);

    const onToggle = useCallback(() => {
      setTimeout(() => {
        setToggle(toggle => !toggle)
      }, 400);
    },[]);
     return (
         <>
        <Main />
        <MainvisualWrapper scrollNav={scrollNav} >
           <MainVisualHeader> 
               <MainVisualP onMouseEnter={onToggle} onMouseLeave={onToggle}>Home
                 {mouseup && <Home />}
               </MainVisualP>
               <MainVisualP
               href="https://reactjs.org" 
               target="_blank" 
               arial-label="discord"
               >Discord</MainVisualP>
               <MainVisualPLinks to="Profile" 
               smooth={true} 
               duration={500}
               >Menu</MainVisualPLinks>
               <MainVisualH1>MyBlog</MainVisualH1>
               <MainVisualP2>Languge</MainVisualP2>
               <MainVisualP2>태그</MainVisualP2>
               <MainVisualP2>About</MainVisualP2>
        <Menu />
        </MainVisualHeader>
        </MainvisualWrapper>
        </>
     );
 }


 export default MainHeader;