import React from 'react';
import About from './page/About';
import Blog from './page/Blog';
import Contact from './page/Contact';
import Footer from './page/Footer';
import Footer2 from './page/Footer2';
import CounterSection from './page/Form/CounterSection';
import ProfileForm from './page/Form/ProfileForm';
import Services from './page/Services';
import WORK from './page/WORK';
import {ProfileWrapper} from './ProfileStyle'
 

export function Profile() {
     return (
      <> 
         <ProfileWrapper>
         <About />
         <Services />
         <CounterSection />
         <WORK/>
         <ProfileForm/>
         <Blog />
         <Contact/>
         <Footer />
         <Footer2 />
         </ProfileWrapper>
      </>
     );
 }


 export default Profile;