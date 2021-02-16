import React, { useEffect, useState } from 'react'
import '../index.css';
import {
  HomeWrapper,
  HomeHeaderH1,
  HomeHeaderP
 } from './MainStyle';
 import {animateScroll as scroll} from 'react-scroll';


export const Main = ({toggle}) => {
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
      <HomeWrapper scrollNav={scrollNav}> 
      <HomeHeaderH1 onClick={toggleHome}>MyBlog</HomeHeaderH1>
      <HomeHeaderP to="Home"
      onClick={toggle} smooth={true} duration={900}
      >Home</HomeHeaderP>
      <HomeHeaderP to="Profile"
      smooth={true} duration={1000} spy={true} exact="true" offset={-200}
      >Profile</HomeHeaderP>
      <HomeHeaderP to="Language"
        smooth={true} duration={3000} spy={true} exact="true" offset={-200}
      >Languge</HomeHeaderP>
      <HomeHeaderP to="Developer"
            smooth={true} duration={3000} spy={true} exact="true" offset={-200}
      >Delveoper</HomeHeaderP>
      <HomeHeaderP>Home</HomeHeaderP>
      <HomeHeaderP>Home</HomeHeaderP>
      </HomeWrapper> 
      </>
     );
  };

export default Main;
