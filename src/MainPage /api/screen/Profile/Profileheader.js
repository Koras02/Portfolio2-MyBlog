 import React, { useEffect, useState } from 'react';
 import {
     ProfileHeader,
     ProfileHeaderH1,
     ProfileHeaderP} from '../style/ProflieStyle';
import {animateScroll as scroll} from 'react-scroll';

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
        <ProfileHeader scrollNav={scrollNav} id="header" isOpen={isOpen} onClick={toggle}>
        <ProfileHeaderH1 
        onClick={toggleHome}
        smooth={true} 
        duration={900} 
        >My Blog Profile Page</ProfileHeaderH1>
        <ProfileHeaderP
        >Next</ProfileHeaderP>
        <ProfileHeaderP>Future</ProfileHeaderP>
        <ProfileHeaderP to="story"
        smooth={true} 
        duration={1000} 
        offset={-400}
        >Story</ProfileHeaderP>
        <ProfileHeaderP 
        to="Profile"
        smooth={true}
        duration={1000}
        offset={-100}
        >About</ProfileHeaderP>
        <ProfileHeaderP to="header">Home</ProfileHeaderP>
      </ProfileHeader>
      </>
     );
 }


 export default Profileheader;