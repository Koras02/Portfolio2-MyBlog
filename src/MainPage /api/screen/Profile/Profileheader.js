 import React, { useEffect, useState } from 'react';
 import {
     ProfileHeader,
     ProfileHeaderH1,
     ProfileHeaderP,
     ProfileHeaderP1
    
    } from '../style/ProflieStyle';
import {animateScroll as scroll} from 'react-scroll';
import { IconContext } from 'react-icons';

export const Profileheader = ({ toggle, isOpen }) => {
    const [scrollNav,setScrollNav] = useState(true);

     
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
       <IconContext.Provider value={{ color: 'red'}}>
        <ProfileHeader scrollNav={scrollNav} id="header" isOpen={isOpen} onClick={toggle}>
        <ProfileHeaderH1 
        onClick={toggleHome}
        smooth={true} 
        duration={500} 
        spy={true}
        exact='true'
        >My Blog Profile Page</ProfileHeaderH1>
        <ProfileHeaderP
        >Next</ProfileHeaderP>
        <ProfileHeaderP 
        to="future"
        smooth={true}
        duration={1000}
        offset={-200}
        spy={true}
        >Future</ProfileHeaderP>
        <ProfileHeaderP to="story"
        smooth={true} 
        duration={1000} 
        offset={-300}
        spy={true}
        >Story</ProfileHeaderP>
        <ProfileHeaderP 
        to="Profile"
        smooth={true}
        duration={1000}
        offset={-200}
        spy={true}
        >About</ProfileHeaderP>
        <ProfileHeaderP1 to="header">Home</ProfileHeaderP1>
      </ProfileHeader>
       </IconContext.Provider>
      </>
     );
 }


 export default Profileheader;