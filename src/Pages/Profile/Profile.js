import React from 'react';
import About from './page/About';
import Blog from './page/Blog';
import Contact from './page/Contact';
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
         </ProfileWrapper>
      </>
     );
 }


 export default Profile;