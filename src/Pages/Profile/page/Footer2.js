/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import './style/FooterStyle.scss'
import { FooterLink } from './style/FootertoStyle';
import {animateScroll as scroll} from 'react-scroll';
import {TiArrowUpThick} from 'react-icons/ti'
 

export const Footer2 = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(true);

    const changeNav = () => {
       if(window.scrollY > 100) {
          setScrollNav(false)
       } else {
          setScrollNav(true)
       }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    },[])

    const toggleHome = () => {
       scroll.scrollToTop();
    }

     return (
        <footer className="footerWrapper">
           <container className="footerContainer" scrollNav={scrollNav}>
               <h1 className="footer2H1">@ Copyright <span className="footer2span">DevFolio</span> All Rights Reserved</h1>
               <h1 className="footer2H1">Designed by BootstrapMode</h1>
               <FooterLink to="/" onClick={toggleHome}>
                  <TiArrowUpThick color="#fff" size="40px"/>
               </FooterLink>
           </container>
        </footer>
     );
 }


 export default Footer2;