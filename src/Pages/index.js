import React, {useState} from 'react';
import MainVisual from '../MainPage /MainVisual';
import HeroSection from './HeroSection';
import { HeroImage } from './HeroSection/HeroSectionStyle';
import Footer2 from './Profile/page/Footer2';
 
 
 
// import { Body } from './indesStyle';
 
import Profile from './Profile/Profile';

const Home = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggle = () => {
        setIsOpen(!isOpen);
    }
     return (
        <>  
          <MainVisual isOpen={isOpen} toggle={toggle} />
          <HeroImage>
          </HeroImage>
          <HeroSection />
          <Profile />
          <Footer2 />
        </>
     );
 }


 export default Home;