import React, { useEffect, useState } from 'react'
import '../index.css';
import {
  HomeWrapper,
  HomeHeaderH1,
  HomeHeaderP,
  HomeHeaderButton
 } from './MainStyle';
 import {animateScroll as scroll} from 'react-scroll';
 

export const Main = ({toggle, isOpen}) => {
    const [scrollNav,setScrollNav] = useState(true)
      
       const changeNav = () => {
         if(window.scrollY > 100) {
           setScrollNav(false)
         } else {
           setScrollNav(true)
         }
       };

       useEffect(() => {
         window.addEventListener('scroll', changeNav);
       }, []);

       const toggleHome = () => {
         scroll.scrollToTop();
       }
     
    return (
      <>
      <HomeWrapper scrollNav={scrollNav} id="header" isOpen={isOpen} onClick={toggle}> 
      <HomeHeaderH1 onClick={toggleHome}>MyBlog</HomeHeaderH1>
      <HomeHeaderP 
      to="/"
      smooth={true} 
      duration={900} 
 
      >
      Home
      </HomeHeaderP>
      <HomeHeaderP 
      to="Profile" 
      smooth={true} 
      duration={2000} 
      spy={true} 
      exact="true" 
      offset={-200}
      >
      Profile
      </HomeHeaderP>
      <HomeHeaderP 
      to="Language" 
      smooth={true} 
      duration={3000} 
      spy={true} 
      exact="true" 
      offset={-200}
      >
      Languge
      </HomeHeaderP>
      <HomeHeaderP to="Developer" 
      smooth={true} 
      duration={3000} 
      spy={true} 
      exact="true" 
      offset={-200}
      >Delveoper
      </HomeHeaderP>
      <HomeHeaderP
      to="footer"
      smooth={true}
      duration={3000}
      spy={true}
      exact="true"
      offset={-200}
      >Footer</HomeHeaderP>
      <HomeHeaderButton to="">
        Sign Up
      </HomeHeaderButton>
      </HomeWrapper> 
      </>
     );
  };

export default Main;