 import React from 'react';
import { 
    HeroContainer, 
    HeroContent, 
    HeroH1, 
    HeroP, 
 } from './HeroSectionStyle';
// import Image from './Images/Person.jpg'
 
 

const HeroSection = () => {
   return (
       <>
      <HeroContainer id="/home">
        <HeroContent>
         <HeroH1>I am Kim Jung Ho</HeroH1>
         <HeroP>Designer</HeroP>
         </HeroContent>
      </HeroContainer>
      </>
     );
 }


 export default HeroSection;